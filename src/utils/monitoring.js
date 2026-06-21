const EVENTS_KEY = 'portfolio-monitor-events';
const VISITOR_KEY = 'portfolio-monitor-visitor-id';
const MAX_EVENTS = 200;

const canUseStorage = () => {
  try {
    const key = '__portfolio_monitor_test__';
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const readEvents = () => {
  if (!canUseStorage()) return [];

  try {
    const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
    return Array.isArray(events) ? events : [];
  } catch {
    return [];
  }
};

const writeEvents = (events) => {
  if (!canUseStorage()) return;
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events.slice(-MAX_EVENTS)));
};

const getVisitorId = () => {
  if (!canUseStorage()) return 'storage-unavailable';

  const savedId = localStorage.getItem(VISITOR_KEY);
  if (savedId) return savedId;

  const id =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  localStorage.setItem(VISITOR_KEY, id);
  return id;
};

const getDeviceType = () => {
  if (window.matchMedia('(max-width: 720px)').matches) return 'Mobile';
  if (window.matchMedia('(max-width: 1024px)').matches) return 'Tablet';
  return 'Desktop';
};

const buildEvent = (page) => {
  const now = Date.now();

  return {
    id: `visit-${now}-${Math.random().toString(16).slice(2)}`,
    visitorId: getVisitorId(),
    page,
    path: window.location.pathname + window.location.hash,
    startedAt: now,
    lastSeenAt: now,
    durationMs: 0,
    device: getDeviceType(),
    language: navigator.language || 'Unknown',
    platform: navigator.platform || 'Unknown',
    screen: `${window.screen.width}x${window.screen.height}`,
    userAgent: navigator.userAgent,
  };
};

export const trackPageVisit = (page) => {
  if (!canUseStorage()) return () => {};

  const visit = buildEvent(page);
  writeEvents([...readEvents(), visit]);

  const updateVisit = () => {
    const now = Date.now();
    const events = readEvents();
    const updatedEvents = events.map((event) =>
      event.id === visit.id
        ? {
            ...event,
            lastSeenAt: now,
            durationMs: Math.max(0, now - event.startedAt),
          }
        : event,
    );
    writeEvents(updatedEvents);
  };

  const intervalId = window.setInterval(updateVisit, 5000);
  window.addEventListener('pagehide', updateVisit);
  document.addEventListener('visibilitychange', updateVisit);

  return () => {
    window.clearInterval(intervalId);
    updateVisit();
    window.removeEventListener('pagehide', updateVisit);
    document.removeEventListener('visibilitychange', updateVisit);
  };
};

export const getMonitorData = () => {
  const events = readEvents().sort((a, b) => b.startedAt - a.startedAt);
  const totalDuration = events.reduce((sum, event) => sum + (event.durationMs || 0), 0);
  const uniqueVisitors = new Set(events.map((event) => event.visitorId)).size;

  return {
    events,
    totalVisits: events.length,
    uniqueVisitors,
    totalDuration,
    averageDuration: events.length ? totalDuration / events.length : 0,
  };
};
