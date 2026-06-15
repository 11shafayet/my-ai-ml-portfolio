import styles from '../../App.module.css';

function ProgressBar({ progress }) {
  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
