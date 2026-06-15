import PageMotion from '../components/motion/PageMotion';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import HeroSection from '../components/sections/HeroSection';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import SkillsSection from '../components/sections/SkillsSection';

function HomePage({ onNavigate }) {
  return (
    <PageMotion>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreview onNavigate={onNavigate} />
      <ExperienceSection />
      <ContactSection />
    </PageMotion>
  );
}

export default HomePage;
