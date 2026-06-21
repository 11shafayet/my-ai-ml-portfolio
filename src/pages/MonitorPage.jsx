import { useEffect, useState } from 'react';
import PageMotion from '../components/motion/PageMotion';
import { getMonitorData } from '../utils/monitoring';
import styles from '../App.module.css';

const formatDuration = (durationMs) => {
  const totalSeconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes <= 0) return `${seconds}s`;
  return `${minutes}m ${seconds}s`;
};

const formatDate = (timestamp) =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(timestamp));

function MonitorPage() {
  const [monitorData, setMonitorData] = useState(() => getMonitorData());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMonitorData(getMonitorData());
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <PageMotion>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <span className={styles.sectionLabel}>Monitor</span>
        <h1>Visitor activity monitor.</h1>
        <p>
          This public page shows visits captured by this browser. Site-wide tracking across all
          visitors requires a shared analytics backend.
        </p>
      </section>

      <section className={`${styles.section} ${styles.monitorSection}`}>
        <div className={styles.monitorGrid}>
          <article className={styles.monitorMetric}>
            <span>Total visits</span>
            <strong>{monitorData.totalVisits}</strong>
          </article>
          <article className={styles.monitorMetric}>
            <span>Unique visitors</span>
            <strong>{monitorData.uniqueVisitors}</strong>
          </article>
          <article className={styles.monitorMetric}>
            <span>Total time</span>
            <strong>{formatDuration(monitorData.totalDuration)}</strong>
          </article>
          <article className={styles.monitorMetric}>
            <span>Avg. time</span>
            <strong>{formatDuration(monitorData.averageDuration)}</strong>
          </article>
        </div>

        <div className={styles.monitorPanel}>
          <div className={styles.monitorPanelHeader}>
            <h2>Visit details</h2>
            <span>{monitorData.events.length} recorded</span>
          </div>

          {monitorData.events.length > 0 ? (
            <div className={styles.monitorTableWrap}>
              <table className={styles.monitorTable}>
                <thead>
                  <tr>
                    <th>Visitor</th>
                    <th>Page</th>
                    <th>Duration</th>
                    <th>Device</th>
                    <th>Started</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {monitorData.events.map((event) => (
                    <tr key={event.id}>
                      <td>
                        <span className={styles.monitorBadge}>{event.visitorId.slice(0, 8)}</span>
                      </td>
                      <td>
                        <strong>{event.page}</strong>
                        <span>{event.path}</span>
                      </td>
                      <td>{formatDuration(event.durationMs || 0)}</td>
                      <td>{event.device}</td>
                      <td>{formatDate(event.startedAt)}</td>
                      <td>
                        <span>{event.language}</span>
                        <span>{event.platform}</span>
                        <span>{event.screen}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className={styles.monitorEmpty}>No visits recorded in this browser yet.</p>
          )}
        </div>
      </section>
    </PageMotion>
  );
}

export default MonitorPage;
