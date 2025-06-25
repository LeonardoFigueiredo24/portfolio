
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5591999810481?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="glass-effect bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 p-0 animate-glow shadow-2xl group"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">
          📱
        </span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale comigo no WhatsApp!
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
