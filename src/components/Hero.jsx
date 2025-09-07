import Nav from './Nav';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center bg-brand-bg text-brand-text"
    >

      {/* Main content area */}
      <div className="container flex flex-grow flex-col">
                <Nav className="container mx-0 mt-8" />
        {/* Spacer Div */}
        <div className="flex-grow-[1]"></div>
        {/* Content Wrapper */}
        <div className="flex-grow-[2]">
          <p className="mb-2 text-base md:text-lg font-normal leading-6 md:leading-7 opacity-80">
            Hi, I'm
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-normal leading-[96px] md:leading-[144px]">
            Xenia.
          </h1>
          <p className="mt-6 max-w-[58rem] text-justify text-2xl font-normal leading-9 opacity-90">
            I design clean, user-centered interfaces that make digital
            experiences feel simple, structured, and approachable. My work
            focuses on clarity, real-life usability, and just enough personality
            to feel human.
          </p>
        </div>
        
      </div>

      {/* "Scroll Down" affordance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <a
          href="#projects"
          className="text-sm font-medium opacity-90 hover:opacity-100"
          aria-label="See my projects"
        >
          <div className="flex w-full flex-col items-center text-center">
            <span>See My Projects</span>
            <img
              src={
                new URL('../assets/caret-double-down.svg', import.meta.url).href
              }
              alt=""
              aria-hidden="true"
              className="mt-4 h-6 w-6 animate-bounce"
            />
          </div>
        </a>
      </div>

      {/* Curved bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto h-8 w-full bg-brand-bg"
        style={{
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          marginBottom: '-32px',
          zIndex: 20,
        }}
      ></div>
    </section>
  );
}
