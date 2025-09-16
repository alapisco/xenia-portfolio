import SectionV2 from './layout/SectionV2';
import SectionHeader from './ui/SectionHeader';
import SectionText from './ui/SectionText';


export default function AboutMe() {
  return (
    <SectionV2 id="about-me" width="wide" stack="xlarge" roundTop roundBottom padding='xsmall'>
      <SectionHeader title="About Me" />
      <div className="flex flex-col gap-2 sm:gap-4">
        <SectionText paragraphs={[
          "I’m a UX/UI designer with a background in content strategy and creative ideation for educational media. Before moving into design, I spent several years developing creative video distribution strategies, working closely with creative teams to turn abstract learning goals into engaging visual content.",
          "Curiosity and empathy are what led me to UX/UI. I’ve always been drawn to how people interact with information, and I find satisfaction in designing tools that make everyday actions feel more thoughtful and intuitive. My approach to design is user-centered, content-aware, and detail-driven - shaped by my past experience analyzing user behavior and storytelling across digital platforms.",
          "I’m currently looking for opportunities where I can grow, contribute, and keep learning - whether through internships, project-based roles, or a permanent position. I’m open to part-time or full-time positions, and while I’m based in Zaragoza, Spain, I’m happy to consider remote, hybrid, or on-site work."
        ]} />
      </div>
    </SectionV2>
  );
}
