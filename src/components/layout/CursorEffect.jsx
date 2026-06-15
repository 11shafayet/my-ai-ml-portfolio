import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from '../../App.module.css';

function CursorEffect() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.3 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.3 });

  useEffect(() => {
    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsHidden(false);
      setIsPointer(Boolean(event.target.closest('a, button, input, textarea, [role="button"]')));
    };

    const handleLeave = () => setIsHidden(true);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`${styles.cursorTrail} ${isPointer ? styles.cursorPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{ x: trailX, y: trailY }}
      />
      <motion.div
        className={`${styles.cursorDot} ${isPointer ? styles.cursorPointer : ''} ${isHidden ? styles.cursorHidden : ''}`}
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
}

export default CursorEffect;
