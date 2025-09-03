import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Hero />
      <Projects />
      {/* Stubs for the rest of your SPA anchors */}
      <section id="about" className="container py-24">
        <h2 className="text-2xl font-semibold">About</h2>
      </section>
      <section id="contact" className="container pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section>
    </>
  );
}
