
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const timeline = [
    {
      year: "2023",
      title: "Análise e Desenvolvimento de Sistemas",
      description: "UNIP (Universidade Paulista) - Em andamento",
      icon: "🎓"
    },
    {
      year: "2024",
      title: "Especialização Profissional",
      description: "Cursos em Redes Client-Server, C++ e Administração",
      icon: "📚"
    },
    {
      year: "2024",
      title: "Desenvolvimento de Competências",
      description: "Inglês (Aslan), Informática e Governo Integrado",
      icon: "🌐"
    },
    {
      year: "2024",
      title: "Experiência em Atendimento",
      description: "Recepcionista de Hotel e Auxiliar Administrativo",
      icon: "💼"
    },
    {
      year: "2025",
      title: "Aperfeiçoamento Técnico",
      description: "Curso especializado em JavaScript",
      icon: "🚀"
    }
  ];

  const courses = [
    { name: "JavaScript", year: "2025", status: "Em andamento" },
    { name: "Projeto de Redes Client-Server", year: "2024", status: "Concluído" },
    { name: "Aplicativos Console com C++", year: "2024", status: "Concluído" },
    { name: "Inglês - Aslan", year: "2024", status: "Em andamento" },
    { name: "Auxiliar Administrativo", year: "2024", status: "Concluído" },
    { name: "Informática", year: "2024", status: "Concluído" },
    { name: "Governo Integrado", year: "2024", status: "Concluído" },
    { name: "Recepcionista de Hotel", year: "2024", status: "Concluído" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-white/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-6 reveal">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-neon-purple rounded-xl flex items-center justify-center text-2xl mr-4 animate-float">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Leonardo Figueiredo</h3>
                  <p className="text-neon-purple font-mono">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estudante de Análise e Desenvolvimento de Sistemas na UNIP, combinando formação acadêmica 
                  sólida com experiência prática em desenvolvimento web. Minha jornada começou com curiosidade 
                  sobre tecnologia e hoje me especializo em criar soluções digitais inovadoras.
                </p>
                <p>
                  Com formação diversificada que inclui programação, redes de dados e experiência em atendimento, 
                  trago uma perspectiva única ao desenvolvimento, sempre focando na experiência do usuário 
                  e na eficiência dos sistemas que construo.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">8+</div>
                  <div className="text-sm text-muted-foreground">Cursos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2024</div>
                  <div className="text-sm text-muted-foreground">Início</div>
                </div>
              </div>
            </div>

            {/* Courses Section */}
            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                📚 <span className="ml-2">Cursos e Certificações</span>
              </h4>
              <div className="grid gap-2 max-h-60 overflow-y-auto">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-sm font-medium">{course.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{course.year}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.status === "Em andamento" 
                          ? "bg-neon-purple/20 text-neon-purple" 
                          : "bg-green-500/20 text-green-400"
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              🗓️ Minha <span className="gradient-text">Trajetória</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-blue to-neon-purple"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 group">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-blue to-neon-purple rounded-full text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <Card className="ml-6 p-6 glass-effect glow-hover flex-1 group-hover:translate-x-2 transition-transform">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <span className="text-sm font-mono text-neon-purple bg-neon-purple/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
