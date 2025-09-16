import SectionV2 from './layout/SectionV2';
import SectionHeader from './ui/SectionHeader';
import ProjectShowcase from './ui/ProjectShowcase';

export default function Projects() {
  return (
    <SectionV2 id="projects" width="wide" stack="xlarge" roundTop roundBottom padding='xsmall'>
      <SectionHeader title="Projects"/>
      <ProjectShowcase 
        imageDirectory="assets/vale"
        name='Vale' 
        headings={['A Responsive Website', 'for a Language School']}
        description={
          <>
            <strong>A structured and friendly site</strong> that makes it easier for adults{' '}
            <strong>to explore Spanish courses</strong> and <strong>feel confident</strong> choosing the one that fits their needs.
          </>
        }
      />
      <ProjectShowcase 
        imageDirectory="assets/grub-up"
        name='GrubUp' 
        headings={['A Food-Sharing App and', 'a Responsive Landing Page']}
        description={
          <>
            <strong>A clean and friendly app </strong> that helps neighbors exchange extra food with minimal effort and builds trust through{' '}
            <strong>clear, reliable interactions.</strong> 
          </>
        }
        className="mt-4"
      />
    </SectionV2>
  );
}
