export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="container">
        <h2 className="mb-6 text-sm font-medium text-neutral-600">Projects</h2>

        <article className="rounded-2xl bg-brand-bg/10 p-6 shadow-soft md:p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left copy block */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">Vale</h3>
              <p className="mt-1 text-sm text-neutral-600">
                A Responsive Website for a Language School
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-700">
                A structured and friendly site that makes it easier for adults
                to explore Spanish courses and feel confident choosing the one
                that fits their needs.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-xl bg-brand-accent px-4 py-2 text-sm font-medium text-brand-bg hover:shadow-soft"
              >
                View Case Study
              </a>
            </div>

            {/* Right image placeholder */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-brand-bg/20">
              {/* Drop your mockup image below by replacing the div with an <img> */}
              <div className="absolute inset-0 grid place-items-center text-neutral-500">
                (Project mockup)
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
