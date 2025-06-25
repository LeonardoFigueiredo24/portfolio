
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso! 🎉",
        description: "Obrigado pelo contato! Responderei em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "leonardodemouraf.santos@email.com",
      action: "Enviar Email",
      link: "mailto:leonardodemouraf.santos@email.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "/in/leonardo-figueiredo",
      action: "Conectar",
      link: "https://linkedin.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      description: "+55 (91) 99981-0481",
      action: "Chamar",
      link: "https://wa.me/5591999810481"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tem um projeto em mente? Vamos transformar suas ideias em realidade digital!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-effect glow-hover p-8 reveal">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              📝 Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-effect border-white/20 focus:border-neon-purple transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-effect border-white/20 focus:border-neon-purple transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="glass-effect border-white/20 focus:border-neon-purple transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full glass-effect glow-hover bg-gradient-to-r from-royal-blue to-neon-purple hover:from-royal-blue/80 hover:to-neon-purple/80"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "🚀 Enviar Mensagem"}
              </Button>
            </form>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">
              📞 Outras Formas de <span className="gradient-text">Contato</span>
            </h3>

            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-effect glow-hover p-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-neon-purple rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-neon-purple transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="glass-effect">
                    {method.action}
                  </Button>
                </div>
              </Card>
            ))}

            {/* Response Time */}
            <Card className="glass-effect p-6 border-neon-purple/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium">Tempo de Resposta</p>
                  <p className="text-sm text-muted-foreground">
                    Geralmente respondo em até 24 horas
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4 text-center">
                🌐 Conecte-se Comigo
              </h4>
              <div className="flex justify-center space-x-4">
                {["💼", "👨‍💻", "📸", "🐦"].map((icon, index) => (
                  <div key={index} className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl glow-hover cursor-pointer hover:scale-110 transition-transform">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
