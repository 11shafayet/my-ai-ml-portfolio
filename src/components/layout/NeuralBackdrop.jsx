import { useMemo } from 'react';
import styles from '../../App.module.css';

function NeuralBackdrop() {
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, index) => index), []);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      {nodes.map((node) => (
        <span key={node} style={{ '--i': node }} />
      ))}
    </div>
  );
}

export default NeuralBackdrop;
