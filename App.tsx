
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  ChevronDown, 
  ArrowRight,
  HelpCircle,
  FileText,
  AlertTriangle,
  Smartphone,
  Book
} from 'lucide-react';

// --- Constants & Types ---
const PLANO_BASICO_URL = "https://pay.wiapy.com/5IlInHQBCa";
const PLANO_COMPLETO_URL = "https://pay.wiapy.com/d_zoKyeLA7";
const WHATSAPP_SUPPORT_URL = "https://w.app/editoraeditalconcursos";

const COVER_IMG = "https://i.ibb.co/k6Wnfq6g/Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo-1.png"; 
const PAGES_PREVIEW = [
  "https://i.ibb.co/zWb6hM7B/6.png",
  "https://i.ibb.co/Kc7T3LDX/13.png",
  "https://i.ibb.co/Zz5d5BN2/31.png",
  "https://i.ibb.co/Q3jNSLm2/40.png",
  "https://i.ibb.co/r2gBD4F4/57.png",
  "https://i.ibb.co/mVX5BX3F/85.png"
];
const LOGO_EDITORIA = "https://i.ibb.co/b5yk2bpW/1000112350.webp";

// Helper function for smooth scrolling
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={LOGO_EDITORIA} alt="Logo Editora" className="w-10 h-10 object-contain rounded-md" />
        <span className="font-bold text-slate-100 hidden sm:block">Editora Edital Concursos</span>
      </div>
    </div>
  </nav>
);

const Headline = () => (
  <header className="pt-12 pb-12 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="inline-block bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase border border-red-900/50">
        Últimas Vagas com Valor Promocional
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
        O edital do INSS não avisa quando vai sair. <span className="text-blue-500">Quem se prepara depois, fica para trás.</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Não perca tempo com PDFs genéricos. Tenha em mãos o material mais organizado e focado no cargo de Técnico do Seguro Social para sair na frente da concorrência.
      </p>
      
      <div className="flex flex-col items-center gap-6">
        <a 
          href="#planos" 
          onClick={(e) => scrollToSection(e, 'planos')}
          className="group flex items-center gap-2 bg-[#0047AB] hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-xl font-bold shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
        >
          QUERO COMEÇAR DO JEITO CERTO
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="flex items-center gap-2 text-sm text-slate-500 font-medium">
          <ShieldCheck className="w-5 h-5 text-green-500" /> Acesso imediato após o pagamento
        </p>
      </div>
    </div>
  </header>
);

const PainSection = () => (
  <section className="py-20 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Cansado de estudar muito e <span className="text-red-500 underline">sentir que não evolui?</span>
        </h2>
        <p className="text-xl text-slate-400">Se você já tentou estudar para concurso e se sentiu perdido no meio de tanto conteúdo, essa página é para você.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          "Começa a estudar e se perde no conteúdo sem saber por onde seguir.",
          "Fica pulando de PDF em PDF, gastando horas e não terminando nada.",
          "Estuda o dia todo, mas na hora de fazer questões, esquece tudo.",
          "Não faz ideia do que é realmente prioridade para o INSS.",
          "Vive com o medo constante de estar perdendo tempo estudando errado."
        ].map((pain, i) => (
          <div key={i} className="flex gap-4 items-start p-6 bg-red-950/20 rounded-2xl border border-red-900/30">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
            <p className="text-slate-200 font-medium">{pain}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-center text-white shadow-xl shadow-blue-900/20">
        <h3 className="text-2xl font-bold mb-4">Você não precisa de mais material. Você precisa de MÉTODO.</h3>
        <p className="text-blue-100 text-lg">O problema não é sua inteligência. É a falta de organização do seu estudo.</p>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Não vendemos milagres. <br/>Vendemos o <span className="text-blue-500">atalho organizado.</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg">100% Focado no Cargo</h4>
                <p className="text-slate-400">Conteúdo direto ao ponto para Técnico do Seguro Social, sem firulas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg">Organização por Disciplina</h4>
                <p className="text-slate-400">Material estruturado para você saber exatamente o que estudar hoje.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg">Linguagem Clara</h4>
                <p className="text-slate-400">Teoria explicada de forma simples, focada em quem tem pouco tempo.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-center">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl"></div>
          <img src={COVER_IMG} alt="Capa da Apostila INSS" className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl rotate-2" />
        </div>
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-20 bg-slate-950">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
        A diferença entre ser <span className="text-red-600">Reprovado</span> e <span className="text-green-600">Aprovado</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border-2 border-red-900/20 rounded-3xl p-8 bg-red-950/10">
          <div className="flex items-center gap-2 mb-6 text-red-500 font-bold text-xl uppercase">
            <XCircle className="w-6 h-6" /> Estudar Sem Método
          </div>
          <ul className="space-y-4">
            {["PDFs genéricos e cansativos", "Conteúdo em excesso desnecessário", "Falta de direção clara", "Tempo desperdiçado com besteira", "Sensação constante de atraso"].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-500 line-through decoration-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-green-900/30 rounded-3xl p-8 bg-green-950/10 shadow-xl shadow-green-900/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
            Recomendado
          </div>
          <div className="flex items-center gap-2 mb-6 text-green-500 font-bold text-xl uppercase">
            <CheckCircle2 className="w-6 h-6" /> Com Nossa Apostila
          </div>
          <ul className="space-y-4">
            {["Conteúdo organizado por matéria", "Foco total no que realmente cai", "Estudo 3x mais rápido e fluido", "Clareza total do caminho até a prova", "Menos ansiedade e mais controle"].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-200 font-semibold italic">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const PreviewSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="preview" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-4 italic">O que você vai receber</h2>
            <p className="text-gray-400 max-w-xl">
              Material 100% alinhado ao último edital: Português, RLM, Informática, Ética, Direito Constitucional, Direito Administrativo e Seguridade Social.
            </p>
          </div>
          <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold flex items-center gap-2">
             <FileText className="w-5 h-5" /> PDF com Acesso Vitalício
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          className={`animate-marquee gap-8 py-4 ${isPaused ? '[animation-play-state:paused]' : ''}`}
          onClick={() => setIsPaused(!isPaused)}
        >
          {[...PAGES_PREVIEW, ...PAGES_PREVIEW].map((src, i) => (
            <div key={i} className="w-64 md:w-80 h-auto bg-white rounded-lg shadow-2xl transform hover:scale-105 transition-transform overflow-hidden cursor-pointer">
               <img src={src} alt={`Preview ${i}`} className="w-full h-auto object-cover pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" /> Clique em uma página para pausar e ler
          </p>
        </div>
      </div>
    </section>
  );
};

const BonusSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic uppercase tracking-tighter">
          Bônus <span className="text-blue-500">Exclusivos</span>
        </h2>
        <p className="text-slate-400 font-medium">Tudo isso será seu <span className="text-green-500 font-bold">GRATUITAMENTE</span> ao garantir o Plano Completo hoje.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "1.500 Questões Inéditas",
            desc: "Pratique com o nível real da prova e comentários detalhados.",
            price: "R$ 29,90",
            icon: <HelpCircle className="w-8 h-8 text-blue-400" />
          },
          {
            title: "Mapas Mentais",
            desc: "Memorize em segundos o que demoraria horas de leitura cansativa.",
            price: "R$ 26,90",
            icon: <Book className="w-8 h-8 text-blue-400" />
          },
          {
            title: "Planilha de Estudos",
            desc: "Sua organização diária pronta para usar, do zero à aprovação.",
            price: "R$ 12,90",
            icon: <Clock className="w-8 h-8 text-blue-400" />
          }
        ].map((bonus, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-3xl border-2 border-slate-700 shadow-xl shadow-blue-900/10 relative overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase">Grátis</div>
            <div className="mb-6 bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {bonus.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{bonus.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{bonus.desc}</p>
            <div className="pt-4 border-t border-slate-700">
              <span className="text-slate-500 line-through text-sm font-medium">Valor Original: {bonus.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <p className="text-blue-100 font-bold uppercase tracking-widest mb-2">Economia Total de R$ 69,70</p>
        <h3 className="text-2xl md:text-3xl font-black text-white italic">VOCÊ NÃO PAGA NADA POR ESSES BÔNUS HOJE!</h3>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Carlos Oliveira", text: "Eu tava mto perdido msm e agr sei exatamente o que estudar pra prova. O material é mto direto e ajuda mto msm.", avatar: "https://i.ibb.co/mCMNKY6d/Whats-App-Image-2026-02-02-at-2.jpg" },
    { name: "Mariana Silva", text: "Parecia q eu estudava mto e n saía do lugar. Esse material organizou tudo de um jeito que a gente n se perde.", avatar: "https://i.ibb.co/zHsKQzXq/Whats-App-Image-2026-02-02-at-22-12-01.jpg" },
    { name: "Fernanda Costa", text: "Finalmente encontrei um material direto, sem enrolação. Gosto pq vai direto ao q importa pra prova do inss.", avatar: "https://i.ibb.co/Fkg8d2qq/Whats-App-Image-2026-02-02-at-22-12-01bzfdeb.jpg" },
    { name: "Pedro Mendes", text: "O edital ja ja ta ai e eu tava só pulando de pdf em pdf. Essa apostila aq salvou dmais!", avatar: "https://i.ibb.co/zHD2dVFK/Whats-App-Image-2026-02-02-at-22-12-02rv.jpg" },
    { name: "Lucas Santos", text: "Material top. Bem organizado por matéria, as questões comentadas tbm ajudam pra caramba na hr d praticar.", avatar: "https://i.ibb.co/23P4B9nD/Whats-App-Image-2026-02-02-at-22-12-02g-dfb.jpg" },
    { name: "Juliana Rocha", text: "Achei mto bom, a parte de seguridade social ta bem explicada. To estudando bem mais rápido agr.", avatar: "https://i.ibb.co/mVGRHC2w/Whats-App-Image-2026-02-02-at-22-12-02vv.jpg" },
    { name: "Ricardo Almeida", text: "Comprei o completo e os mapas mentais sao show. Facilitou dmais a revisao d direito constitucional.", avatar: "https://i.ibb.co/5XBh90Xf/Whats-App-Image-2026-02-04-at-23-43-59.jpg" }
  ];

  const whatsappScreenshots = [
    "https://i.ibb.co/Kv1q6rC/35096dc8-4348-4977-be4b-35a69e832b62.png",
    "https://i.ibb.co/G3N3XvHb/567dfe6f-b705-440a-b591-b75c3ecd7b04.png",
    "https://i.ibb.co/KxmhMmRz/img-0136-4-Editado.png",
    "https://i.ibb.co/27DykJPS/img-0136-5-Editado.png"
  ];

  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-16 italic uppercase text-white">O que dizem nossos alunos</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" />
                <div>
                   <p className="font-bold text-white">{rev.name}</p>
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                   </div>
                </div>
              </div>
              <p className="text-slate-400 italic leading-relaxed text-sm">"{rev.text}"</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {whatsappScreenshots.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-slate-800 transform hover:scale-[1.02] transition-transform">
              <img src={src} alt={`Feedback WhatsApp ${i}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="planos" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-950/30 text-orange-400 px-6 py-2 rounded-full font-bold text-sm mb-6 border border-orange-900/30">
             <Clock className="w-5 h-5 animate-pulse" /> A OFERTA EXPIRA EM: {formatTime(timeLeft)}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 italic">ESCOLHA SEU PLANO</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            O valor cobrado é irrisório perto do salário de <span className="text-blue-400 font-bold">R$ 5.905,79</span> do cargo. 
            É um investimento na sua mudança de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          <div className="bg-slate-950 border-2 border-slate-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:border-blue-900 transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Plano Básico</h3>
              <p className="text-slate-500 text-sm">Focado 100% no Edital</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Apostila Completa INSS</li>
              <li className="flex gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Teoria Direta e Objetiva</li>
              <li className="flex gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Questões de Fixação</li>
              <li className="flex gap-3 text-slate-500"><XCircle className="w-5 h-5 shrink-0" /> Bônus de Questões Inéditas</li>
              <li className="flex gap-3 text-slate-500"><XCircle className="w-5 h-5 shrink-0" /> Mapas Mentais</li>
            </ul>
            <div className="mb-8">
              <p className="text-slate-500 line-through">De R$ 57,00</p>
              <p className="text-4xl font-extrabold text-white">R$ 14,90</p>
              <p className="text-sm text-slate-500">Pagamento Único</p>
            </div>
            <a href={PLANO_BASICO_URL} target="_blank" className="bg-slate-800 hover:bg-slate-700 text-slate-100 py-5 rounded-2xl text-center font-bold transition-all flex items-center justify-center gap-2">
              Assinar Plano Básico <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-slate-900 border-4 border-blue-600 rounded-[2.5rem] p-8 md:p-10 flex flex-col relative transform md:scale-105 shadow-2xl z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-2 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
               MAIS ESCOLHIDO & RECOMENDADO
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Plano Completo</h3>
              <p className="text-blue-400 text-sm font-semibold">Tudo o que você precisa para passar</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex gap-3 text-white font-bold italic"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Apostila Completa INSS</li>
              <li className="flex gap-3 text-slate-100"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> +1.500 Questões Inéditas</li>
              <li className="flex gap-3 text-slate-100"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Mapas Mentais Organizados</li>
              <li className="flex gap-3 text-slate-100"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Planilha de Estudo Completa</li>
              <li className="flex gap-3 text-slate-100"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Acesso Imediato & Vitalício</li>
            </ul>
            <div className="mb-8">
              <p className="text-red-500 text-sm font-bold uppercase mb-1">Mega Desconto Ativo</p>
              <p className="text-slate-500 line-through">De R$ 105,70</p>
              <div className="flex items-baseline gap-2">
                 <p className="text-5xl font-extrabold text-white">R$ 26,90</p>
                 <span className="text-sm font-bold text-blue-400">VITALÍCIO</span>
              </div>
              <p className="text-sm text-slate-500">Economia real de R$ 78,80</p>
            </div>
            <a href={PLANO_COMPLETO_URL} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-center font-extrabold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 animate-bounce-slow">
              GARANTIR MEU ACESSO AGORA <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => (
  <section className="py-20 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="bg-slate-900 p-12 rounded-[3rem] border-2 border-dashed border-slate-800">
         <div className="inline-block w-24 h-24 bg-blue-900/30 rounded-full flex items-center justify-center mb-8">
            <ShieldCheck className="w-12 h-12 text-blue-400" />
         </div>
         <h2 className="text-3xl font-extrabold mb-6 italic text-white">GARANTIA DE 7 DIAS</h2>
         <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
           Você tem 7 dias para acessar o material, baixar a apostila e testar os bônus. Se não fizer sentido para você ou se achar que não é o que esperava, <span className="font-bold text-white">devolvemos 100% do seu dinheiro</span>. Sem perguntas, sem burocracia.
         </p>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questions = [
    { q: "O acesso ao material é vitalício?", a: "Sim! Ao adquirir qualquer plano hoje, você terá acesso por tempo indeterminado, podendo revisar sempre que precisar até o dia da sua prova." },
    { q: "O material é um resumo ou conteúdo completo?", a: "É o conteúdo completo e atualizado de acordo com o último edital, organizado de forma que você não perca tempo com o que não cai." },
    { q: "Em que formato recebo o material?", a: "Tudo em PDF de alta qualidade, pronto para ler no celular, tablet, computador ou imprimir se preferir." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento. Você receberá um e-mail com os links de download." },
    { q: "Tenho suporte para dúvidas?", a: "Sim, temos um canal de suporte via WhatsApp e e-mail para te ajudar com qualquer problema técnico no acesso." }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 italic text-white">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-white">{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 bg-slate-950 border-t border-slate-800 text-slate-400 leading-relaxed">
                   {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0b0e14] text-white py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className="flex items-center gap-3 text-2xl font-bold">
           <img src={LOGO_EDITORIA} alt="Logo Editora" className="w-12 h-12 object-contain rounded-lg" />
           Editora Edital Concursos
        </div>
        <div className="flex gap-8 text-sm text-gray-400 font-medium">
           <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
           <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
           <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>

      <div className="border-t border-white/5 pt-12 space-y-6">
        <p className="text-sm text-gray-500">
          © 2026 Editora Edital Concursos. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-600 max-w-2xl mx-auto">
          Este site não é afiliado ao INSS ou ao Governo Federal. O material vendido é de produção própria, destinado exclusivamente para fins educacionais.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-gray-400 mt-8">
           <a href={WHATSAPP_SUPPORT_URL} target="_blank" className="flex items-center gap-2 justify-center hover:text-green-400 transition-colors">
              <Smartphone className="w-4 h-4" /> WhatsApp: 41 98842-0201
           </a>
           <div className="flex items-center gap-2 justify-center">
              <HelpCircle className="w-4 h-4" /> E-mail: editoraeditalconcursos@gmail.com
           </div>
        </div>
      </div>
    </div>
  </footer>
);

const FinalCTA = () => (
  <section className="py-20 bg-blue-700">
     <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 italic">NÃO ESPERE O EDITAL PARA COMEÇAR.</h2>
        <p className="text-xl text-blue-100 mb-10 font-medium">O tempo está correndo. Garanta sua vaga no INSS enquanto a maioria ainda está parada.</p>
        <a 
          href="#planos" 
          onClick={(e) => scrollToSection(e, 'planos')}
          className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:bg-blue-50 transition-all uppercase italic tracking-tight"
        >
           COMEÇAR MINHA PREPARAÇÃO AGORA <ChevronRight className="w-8 h-8" />
        </a>
     </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Headline />
      <PainSection />
      <SolutionSection />
      <ComparisonTable />
      <PreviewSection />
      <BonusSection />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />

      <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
         <a 
            href="#planos" 
            onClick={(e) => scrollToSection(e, 'planos')}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-2xl animate-pulse"
          >
            QUERO COMEÇAR AGORA <ArrowRight className="w-5 h-5" />
         </a>
      </div>
    </div>
  );
}
