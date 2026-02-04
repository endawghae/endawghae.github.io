const sideProjects = [
  {
    title: "Multiplayer Test",
    image: "/sideProjects/project2.png",
    animated: "/sideProjects/project2.webp",
    tags: ["Unity", "C#", "WebGL", "Software Development", "Netcode"]
  },
  {
    title: "Untitled Firefighter Game",
    image: "/sideProjects/project1.png",
    animated: "/sideProjects/project1.webp",
    tags: ["Unity", "C#", "WebGL", "Software Development"]
  },
];

export const SideProjects = () => {
  return (
    <section id="sideProjects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2>
            <span className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Other Projects
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Works in progress or things I'm tinkering with
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sideProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300 hidden lg:block"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <img
                    src={project.animated}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Mobile Version */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 lg:hidden">
                  <img
                    src={project.animated}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};