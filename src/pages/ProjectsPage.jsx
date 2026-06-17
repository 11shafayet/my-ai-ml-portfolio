import { projects } from '../data/portfolio';
import PageMotion from '../components/motion/PageMotion';
import ProjectGrid from '../components/projects/ProjectGrid';
import styles from '../App.module.css';

function ProjectsPage() {
  return (
    <PageMotion>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <span className={styles.sectionLabel}>Projects</span>
        <h1>AI/ML projects focused on measurable outcomes.</h1>
        <p>
          A compact project archive covering computer vision, NLP, and future production-grade AI systems.
        </p>
      </section>
      <section className={`${styles.section} ${styles.projectsArchive}`}>
        <ProjectGrid items={projects} />
      </section>
    </PageMotion>
  );
}

export default ProjectsPage;
