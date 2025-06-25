
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedor Full Stack | Criador de Experiências Digitais";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: '1s' }}
    ></div>
  </div>

  <div className="container-custom relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="text-center lg:text-left space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold">
            <span className="block">Leonardo</span>
            <span className="block gradient-text">Figueiredo</span>
          </h1>

          <div className="h-8 lg:h-10">
            <p className="text-xl lg:text-2xl text-muted-foreground font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          <em>"Código elegante, soluções eficientes — transformando conceitos em realidade digital."</em>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="/curriculo.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-md glass-effect glow-hover group"
          >
            📄 Currículo
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <Button 
            variant="outline" 
            size="lg" 
            className="glass-effect glow-hover"
            onClick={() => window.open("https://www.linkedin.com/in/leonardo-moura-083486332/", "_blank")}
          >
            💼 LinkedIn
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            className="glass-effect glow-hover"
            onClick={() => window.open("https://github.com/LeonardoFigueiredo24", "_blank")}
          >
            👨‍💻 GitHub
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 lg:pt-20">
          <div className="animate-bounce cursor-pointer">
            <ArrowDown className="h-6 w-6 mx-auto text-neon-purple" />
            <p className="text-sm text-muted-foreground mt-2">Scroll para explorar</p>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-blue to-neon-purple p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>

            {/* Profile photo */}
            <div className="absolute inset-2 rounded-full overflow-hidden animate-float">
              <img 
                src="/lovable-uploads/2c0e5cf8-15c7-45e5-bfe1-332ff71d629f.png" 
                alt="Leonardo Figueiredo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center text-2xl float-1">
              ⚡
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-royal-blue/20 rounded-full flex items-center justify-center text-2xl float-2">
              🚀
            </div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-neon-purple/30 rounded-full flex items-center justify-center text-lg float-3">
              ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
