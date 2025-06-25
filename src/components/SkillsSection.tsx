
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95, description: "Hooks customizados e Context API" },
        { name: "TypeScript", level: 90, description: "Tipagem avançada e generics" },
        { name: "Tailwind CSS", level: 92, description: "Design systems e componentes" },
        { name: "Next.js", level: 88, description: "SSG, SSR e otimizações" },
        { name: "Vue.js", level: 75, description: "Composition API e Pinia" }
      ]
    },
    {
      title: "Back-End",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 93, description: "APIs RESTful e GraphQL" },
        { name: "Python", level: 85, description: "FastAPI e Django" },
        { name: "PostgreSQL", level: 87, description: "Otimização de queries" },
        { name: "MongoDB", level: 82, description: "Modelagem de dados NoSQL" },
        { name: "Redis", level: 78, description: "Cache e sessões" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Docker", level: 85, description: "Containerização e orquestração" },
        { name: "AWS", level: 80, description: "EC2, S3, Lambda e RDS" },
        { name: "Git", level: 95, description: "Workflows avançados e Git Flow" },
        { name: "Jest", level: 88, description: "Testes unitários e integração" },
        { name: "CI/CD", level: 82, description: "GitHub Actions e pipelines" }
      ]
    }
  ];

  const tools = [
    "⚛️ React", "📝 TypeScript", "🎨 Tailwind", "🚀 Next.js", "⚡ Vite",
    "🔧 Node.js", "🐍 Python", "🗄️ PostgreSQL", "🍃 MongoDB", "☁️ AWS",
    "🐳 Docker", "📊 Redis", "🧪 Jest", "📱 React Native", "🎯 Vue.js"
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent to-white/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tecnologias e ferramentas que domino para criar soluções eficientes e escaláveis
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect glow-hover p-6 reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-neon-purple rounded-xl flex items-center justify-center text-2xl mr-4 animate-float">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium group-hover:text-neon-purple transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 mb-1 group-hover:scale-105 transition-transform"
                    />
                    <p className="text-xs text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="glass-effect p-8 rounded-2xl reveal">
          <h3 className="text-2xl font-bold text-center mb-8">
            🌟 Tecnologias em <span className="gradient-text">Destaque</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="glass-effect px-4 py-2 rounded-full text-sm font-medium glow-hover cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats Placeholder */}
        <div className="mt-16 text-center reveal">
          <h3 className="text-2xl font-bold mb-8">
            📊 Estatísticas <span className="gradient-text">GitHub</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-effect glow-hover p-6">
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <div className="text-muted-foreground">Repositórios</div>
            </Card>
            <Card className="glass-effect glow-hover p-6">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Commits</div>
            </Card>
            <Card className="glass-effect glow-hover p-6">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Estrelas</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
