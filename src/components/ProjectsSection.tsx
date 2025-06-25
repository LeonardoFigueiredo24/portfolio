
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "PS2Zone Pt-Br",
      description: "Site dedicado ao PlayStation 2 com conteúdo em português brasileiro, incluindo informações sobre jogos, reviews e nostalgia dos clássicos do console.",
      image: "🎮",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      category: "web",
      challenge: "Interface nostálgica inspirada na era PS2",
      demo: "https://leonardofigueiredo24.github.io/PS2Zone-Pt-Br/",
      code: "https://github.com/LeonardoFigueiredo24/PS2Zone-Pt-Br"
    },
    {
      id: 2,
      title: "Conversor de Moedas",
      description: "Aplicação web para conversão de moedas em tempo real, com interface intuitiva e dados atualizados de câmbio internacional.",
      image: "💱",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      category: "web",
      challenge: "Integração com API de câmbio em tempo real",
      demo: "https://leonardofigueiredo24.github.io/conversor-de-moedas/",
      code: "https://github.com/LeonardoFigueiredo24/conversor-de-moedas"
    },
    {
      id: 3,
      title: "Lista de Filmes",
      description: "Aplicação para gerenciar e organizar uma lista pessoal de filmes, com funcionalidades de busca, categorização e avaliação.",
      image: "🎬",
      tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      category: "web",
      challenge: "Gerenciamento de estado local e interface responsiva",
      demo: "https://leonardofigueiredo24.github.io/lista-de-filmes/",
      code: "https://github.com/LeonardoFigueiredo24/lista-de-filmes"
    }
  ];

  const filters = [
    { id: "all", label: "🌐 Todos", count: projects.length },
    { id: "web", label: "🌐 Web", count: projects.filter(p => p.category === "web").length },
    { id: "mobile", label: "📱 Mobile", count: projects.filter(p => p.category === "mobile").length },
    { id: "api", label: "🔗 API", count: projects.filter(p => p.category === "api").length },
    { id: "design", label: "🎨 Design", count: projects.filter(p => p.category === "design").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma coleção dos meus trabalhos mais recentes, demonstrando habilidades técnicas e criatividade
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass-effect glow-hover ${
                activeFilter === filter.id 
                  ? "bg-gradient-to-r from-royal-blue to-neon-purple" 
                  : ""
              }`}
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glass-effect glow-hover group reveal overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Image/Icon */}
              <div className="aspect-video bg-gradient-to-br from-royal-blue/20 to-neon-purple/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {project.image}
              </div>

              <div className="p-6 space-y-4">
                {/* Title and Challenge */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-neon-purple bg-neon-purple/10 px-2 py-1 rounded-full inline-block">
                    💡 {project.challenge}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs glass-effect">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 glass-effect glow-hover"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    🚀 Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 glass-effect glow-hover"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    📝 Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-effect glow-hover"
            onClick={() => window.open("https://github.com/LeonardoFigueiredo24", "_blank")}
          >
            Ver Todos os Projetos no GitHub 📚
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
