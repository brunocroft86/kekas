import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Droplets, Heart, ChevronDown } from 'lucide-react';

const App = () => {
  // Configurações de Contato
  const zapNumber = "5521965537455";
  const zapLink = `https://wa.me/${zapNumber}?text=Olá! Gostaria de agendar um horário no Kekas Banho e Tosa.`;
  
  // Link do Instagram
  const instaLink = "https://www.instagram.com/kekas_dog/";

  // Dados da página
  const services = [
    { title: "Banho Relaxante", icon: <Droplets size={32} />, desc: "Produtos premium e água na temperatura ideal." },
    { title: "Tosa Estilizada", icon: <Scissors size={32} />, desc: "Tosa na máquina ou tesoura, respeitando a raça." },
    { title: "Hidratação", icon: <Heart size={32} />, desc: "Pelagem macia, brilhante e cheirosa por mais tempo." }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80"
  ];

  const faqs = [
    { q: "Vocês buscam o pet em casa?", a: "No momento, os tutores precisam trazer os pets até nós. Assim, você conhece nosso espaço limpo e preparado para o seu melhor amigo!" },
    { q: "Quais produtos vocês usam no banho?", a: "Utilizamos apenas linhas profissionais e hipoalergênicas, garantindo a saúde da pele e um pelo brilhante e cheiroso por muito mais tempo." },
    { q: "Preciso agendar com antecedência?", a: "Recomendamos agendar com pelo menos 24h de antecedência pelo nosso WhatsApp para garantirmos o melhor horário para você." }
  ];

  // Estado para controlar o Acordeão (FAQ)
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative overflow-x-hidden">
      
      {/* Botão Flutuante do WhatsApp (Reposicionado levemente no mobile) */}
      <motion.a 
        href={zapLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </motion.a>

      {/* Hero Section Focado em Mobile (Paddings menores, botão Full-width) */}
      <header className="bg-white py-10 md:py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Lado Esquerdo: Textos e Botão */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight text-slate-800">
              Kekas Banho e Tosa
            </h1>
            <p className="text-lg md:text-2xl mb-8 font-medium text-slate-600 leading-relaxed">
              O cuidado que o seu melhor amigo merece, com o carinho que ele ama.
            </p>
            {/* Botão estilo Aplicativo: block w-full no celular, auto no desktop */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={zapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:inline-block md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-colors text-lg"
            >
              Agendar Horário Agora
            </motion.a>
          </motion.div>

          {/* Lado Direito: Imagem reduzida no mobile para focar na conversão */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center z-10"
          >
            <img 
              src="/imagem.png" 
              alt="Logotipo oficial do Petshop Kekas Banho e Tosa" 
              className="w-full max-w-[220px] md:max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </header>

      {/* Serviços Section */}
      <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Gap reduzido no celular para leitura contínua */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center"
            >
              <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria de Focinhos */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Galeria de Focinhos</h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg">Um pouco do nosso trabalho e de clientes super satisfeitos!</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Imagens mais coladas no celular estilo galeria de foto nativa */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-sm cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Cachorrinho cliente do Kekas Banho e Tosa número ${index + 1}`} 
                  className="w-full h-40 md:h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Dúvidas Frequentes) */}
      <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Dúvidas Frequentes</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left font-semibold text-slate-700 active:bg-slate-50 transition-colors"
              >
                <span className="text-base md:text-lg pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }}>
                  <ChevronDown size={24} className="text-orange-500 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 leading-relaxed text-sm md:text-base"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Footer com Redes Sociais */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center pb-24 md:pb-12">
        <div className="flex justify-center items-center mb-6">
          <motion.a 
            href={instaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="text-slate-400 flex flex-col items-center transition-colors active:text-pink-500"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="mt-2 text-sm font-medium">Siga no Instagram</span>
          </motion.a>
        </div>
        <div className="w-16 h-px bg-slate-700 mx-auto mb-6"></div>
        <p className="text-sm">&copy; 2026 Kekas Banho e Tosa. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs opacity-70">Desenvolvido com dedicação.</p>
      </footer>

    </div>
  );
};

export default App;