
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Star, 
  ChevronDown, 
  ArrowRight,
  HelpCircle,
  FileText,
  AlertTriangle,
  Smartphone,
  Book,
  LayoutGrid,
  Monitor,
  Tablet,
  MessageSquare,
  BarChart,
  RefreshCw,
  PlusCircle
} from 'lucide-react';

// --- Constants & Types ---
const PLANO_BASICO_URL = "https://pay.cakto.com.br/33ftzrf_741304";
const PLANO_COMPLETO_URL = "https://pay.cakto.com.br/3awzdjr_741300";
const COMBO_APROVACAO_URL = "https://pay.cakto.com.br/9emxzxw";
const UPSELL_PLANO_ESSENCIAL_URL = "https://pay.cakto.com.br/r5nx6k2";
const UPSELL_COMBO_APROVACAO_URL = "https://pay.cakto.com.br/39jre8r";
const WHATSAPP_SUPPORT_URL = "https://wa.me/5541988420201";
const EDITORA_URL = "https://editoraeditalconcursos.vercel.app";

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

// Helper function to append current URL parameters to checkout links
const getCheckoutUrl = (baseUrl: string) => {
  const search = window.location.search;
  if (!search) return baseUrl;
  
  try {
    const url = new URL(baseUrl);
    const params = new URLSearchParams(search);
    
    // Merge existing params with current window params
    params.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    
    return url.toString();
  } catch (e) {
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${search.substring(1)}`;
  }
};

// --- Components ---

const Book3D = ({ cover, title, size = "normal", className = "" }: { cover: string, title: string, size?: "small" | "normal" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-[120px] h-[170px]",
    normal: "w-[250px] h-[350px]",
    large: "w-[300px] h-[420px]"
  };

  const spineWidth = size === "small" ? "25px" : "50px";
  const translateZ = size === "small" ? "12px" : "25px";

  return (
    <div className={`book-container ${className}`}>
      <div className={`book-3d ${sizeClasses[size]}`}>
        <div className="book-spine" style={{ width: spineWidth, transform: `rotateY(-90deg) translateZ(${translateZ})` }}>
          <span style={{ width: size === "small" ? "170px" : "350px" }}>{title}</span>
        </div>
        <div className="book-pages" style={{ transform: `translateZ(0)` }}></div>
        <div className="book-cover" style={{ backgroundImage: `url(${cover})`, transform: `translateZ(${translateZ})` }}></div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href={getCheckoutUrl(EDITORA_URL)} target="_blank" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 group-hover:border-blue-500 transition-colors">
          <img src={LOGO_EDITORIA} alt="Logo Editora" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-slate-100 hidden sm:block group-hover:text-blue-400 transition-colors">Editora Edital Concursos</span>
      </a>
    </div>
  </nav>
);

const Headline = () => (
  <header className="relative pt-12 pb-12 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-15">
      <img 
        src="https://i.ibb.co/6JcfKWtc/Guia-atualizado-sobre-afastamento-pelo-INSS.jpg" 
        alt="Background INSS" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-slate-900/40"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <div className="inline-block bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase border border-red-900/50">
        Últimas Vagas com Valor Promocional
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 max-w-4xl mx-auto italic">
        O edital do INSS não avisa quando vai sair. <span className="text-blue-500">Quem se prepara depois, fica para trás.</span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-400 font-bold mb-8 max-w-2xl mx-auto leading-tight italic">
        Estude com o edital organizado antes do edital ser publicado.
      </p>
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Não perca tempo com PDFs genéricos. Tenha em mãos o material mais organizado e focado no cargo de Técnico do Seguro Social para sair na frente da concorrência.
      </p>
      
      <div className="flex flex-col items-center gap-6">
        <a 
          href="#planos" 
          onClick={(e) => scrollToSection(e, 'planos')}
          className="group flex items-center gap-2 bg-[#0047AB] hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-xl font-bold shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
        >
          GARANTIR MEU MATERIAL AGORA
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight italic">
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
          <div className="mt-10">
            <a 
              href="#planos" 
              onClick={(e) => scrollToSection(e, 'planos')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-all"
            >
              GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl"></div>
          <Book3D 
            cover={COVER_IMG} 
            title="TÉCNICO DO SEGURO SOCIAL - INSS 2026" 
            size="normal"
          />
        </div>
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-20 bg-slate-950">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 italic">
        A diferença entre ser <span className="text-red-600">Reprovado</span> e <span className="text-green-600">Aprovado</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="p-8 bg-slate-950 border-r border-slate-800">
          <div className="flex items-center gap-2 mb-6 text-red-500 font-bold text-xl uppercase">
            <XCircle className="w-6 h-6" /> Estudar Sem Método
          </div>
          <ul className="space-y-4">
            {["PDFs genéricos e cansativos", "Conteúdo em excesso desnecessário", "Falta de direção clara", "Tempo desperdiçado com besteira", "Sensação constante de atraso"].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-500 line-through decoration-slate-700">
                <AlertTriangle className="w-5 h-5 text-red-900 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
            Recomendado
          </div>
          <div className="flex items-center gap-2 mb-6 text-green-500 font-bold text-xl uppercase">
            <CheckCircle2 className="w-6 h-6" /> Com Nossa Apostila
          </div>
          <ul className="space-y-4">
            {["Conteúdo organizado por matéria", "Foco total no que realmente cai", "Estudo 3x mais rápido e fluido", "Clareza total do caminho até a prova", "Menos ansiedade e mais controle"].map((item, i) => (
              <li key={i} className="flex gap-3 text-white font-semibold italic">
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
  const previews = [
    { img: PAGES_PREVIEW[0], label: "Direito Previdenciário" },
    { img: PAGES_PREVIEW[1], label: "Direito Administrativo" },
    { img: PAGES_PREVIEW[2], label: "Língua Portuguesa" },
    { img: PAGES_PREVIEW[3], label: "Mapas Mentais" }
  ];

  return (
    <section id="preview" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 italic uppercase tracking-tight">
              O que você vai <span className="text-blue-500">receber</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Material 100% alinhado ao último edital: Português, RLM, Informática, Ética, Direito Constitucional, Direito Administrativo e Seguridade Social.
            </p>
          </div>
          <div className="bg-blue-900/20 px-6 py-3 rounded-full border border-blue-800/50 font-bold flex items-center gap-2 text-blue-400">
             <FileText className="w-5 h-5" /> PDF com Acesso Vitalício
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {previews.map((item, i) => (
            <div key={i} className="space-y-4 group">
              <div className="aspect-[3/4] bg-slate-900 rounded-2xl border-2 border-slate-800 overflow-hidden shadow-xl group-hover:border-blue-500 transition-all">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="#planos" 
            onClick={(e) => scrollToSection(e, 'planos')}
            className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
          >
            GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const TargetAudienceSection = () => (
  <section className="py-20 bg-slate-950 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-6">
              Esse material é <span className="text-blue-500">para você se…</span>
            </h2>
            <p className="text-slate-400 text-lg">Identificou-se com algum desses pontos? Então você está no lugar certo.</p>
          </div>
          <div className="grid gap-4">
            {[
              "Quer se preparar com antecedência e bater o edital antes de todo mundo.",
              "Não tem tempo de organizar o conteúdo sozinho e quer tudo mastigado.",
              "Busca um material direto ao ponto, sem enrolação e focado no INSS.",
              "Precisa de um método que facilite a memorização e a prática de questões."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-slate-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pt-20 pb-10">
          {/* Creative 3D Showcase */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]"></div>
            
            {/* Bonus 1 - Left */}
            <div className="absolute left-[-50px] md:left-0 top-1/2 -translate-y-1/2 -rotate-[20deg] md:-rotate-[15deg] scale-[0.45] md:scale-75 opacity-60 hover:opacity-100 hover:scale-80 transition-all duration-500 z-10">
              <Book3D 
                cover="https://i.ibb.co/x8KzRmtB/2.png" 
                title="1.500 QUESTÕES INÉDITAS" 
                size="normal"
              />
            </div>

            {/* Bonus 2 - Right */}
            <div className="absolute right-[-50px] md:right-0 top-1/2 -translate-y-1/2 rotate-[20deg] md:rotate-[15deg] scale-[0.45] md:scale-75 opacity-60 hover:opacity-100 hover:scale-80 transition-all duration-500 z-10">
              <Book3D 
                cover="https://i.ibb.co/Q3T9pV1Y/C-pia-de-Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo-4.png" 
                title="MAPAS MENTAIS EXCLUSIVOS" 
                size="normal"
              />
            </div>

            {/* Main Material - Center */}
            <div className="relative z-20 transform scale-[0.75] md:scale-100 hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs md:text-sm font-black italic tracking-widest shadow-xl animate-bounce whitespace-nowrap">
                MATERIAL PRINCIPAL
              </div>
              <Book3D 
                cover={COVER_IMG} 
                title="TÉCNICO DO SEGURO SOCIAL - INSS 2026" 
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BonusSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic uppercase tracking-tighter">
          Bônus <span className="text-blue-500">Exclusivos</span>
        </h2>
        <p className="text-slate-400 font-medium">Tudo isso será seu <span className="text-green-500 font-bold">GRATUITAMENTE</span> ao garantir o Plano Completo hoje.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {[
          {
            title: "1.500 Questões Inéditas",
            desc: "Pratique com o nível real da prova e comentários detalhados.",
            price: "R$ 29,90",
            cover: "https://i.ibb.co/x8KzRmtB/2.png",
            spine: "1.500 QUESTÕES INÉDITAS"
          },
          {
            title: "Mapas Mentais",
            desc: "Memorize em segundos o que demoraria horas de leitura cansativa.",
            price: "R$ 26,90",
            cover: "https://i.ibb.co/Q3T9pV1Y/C-pia-de-Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo-4.png",
            spine: "MAPAS MENTAIS EXCLUSIVOS"
          }
        ].map((bonus, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-10 transform group-hover:-translate-y-4 transition-transform duration-500">
              <Book3D 
                cover={bonus.cover} 
                title={bonus.spine} 
                size="normal"
              />
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border-2 border-slate-700 shadow-xl shadow-blue-900/10 relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase">Grátis</div>
              <h4 className="text-2xl font-bold text-white mb-3">{bonus.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{bonus.desc}</p>
              <div className="pt-4 border-t border-slate-700">
                <span className="text-slate-500 line-through text-sm font-medium">Valor Original: {bonus.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <p className="text-blue-100 font-bold uppercase tracking-widest mb-2">Economia Total de R$ 56,80</p>
        <h3 className="text-2xl md:text-3xl font-black text-white italic">VOCÊ NÃO PAGA NADA POR ESSES BÔNUS HOJE!</h3>
      </div>
    </div>
  </section>
);

const StudyAreaSection = () => (
  <section className="py-24 bg-[#050510] relative overflow-hidden">
    {/* Atmospheric Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 italic uppercase">
          Muito mais que um PDF: <span className="text-indigo-400">Sua Área de Estudos</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Ao adquirir nosso material, você ganha acesso a uma plataforma moderna, organizada e 100% focada na sua produtividade, projetada para que não perca um segundo sequer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-8">
          <div className="flex gap-6 items-start p-6 bg-indigo-950/30 rounded-3xl border border-indigo-900/30 hover:border-indigo-500/50 transition-colors group">
            <div className="w-14 h-14 bg-indigo-900/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <LayoutGrid className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Organização Inteligente</h4>
              <p className="text-slate-400">Todo o conteúdo é separado por módulos e tópicos do edital, facilitando a navegação e o foco no que realmente importa.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start p-6 bg-indigo-950/30 rounded-3xl border border-indigo-900/30 hover:border-indigo-500/50 transition-colors group">
            <div className="w-14 h-14 bg-indigo-900/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <div className="flex gap-1">
                <Smartphone className="w-5 h-5 text-indigo-400" />
                <Monitor className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Acesso de Qualquer Lugar</h4>
              <p className="text-slate-400">Estude pelo celular, tablet ou computador. Sua preparação acompanha seu ritmo, onde quer que você esteja.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="bg-slate-900 p-3 rounded-[2.5rem] border border-indigo-800/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="https://i.ibb.co/Z6wK8KKt/Whats-App-Image-2026-03-15-at-21-08-49.jpg" 
              alt="Plataforma de Estudos" 
              className="rounded-[2rem] w-full shadow-lg transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-3xl shadow-xl hidden md:block z-20">
              <p className="font-bold text-lg">100% Online</p>
              <p className="text-indigo-100 text-sm">Acesso Imediato</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: "Suporte ao Aluno",
            desc: "Dúvidas sobre o material ou sobre a plataforma? Nossa equipe está pronta para te ajudar dentro da área exclusiva.",
            icon: <MessageSquare className="w-6 h-6 text-indigo-400" />
          },
          {
            title: "Acompanhamento",
            desc: "Marque as aulas concluídas e tenha uma visão clara de quanto falta para você bater todo o edital do INSS.",
            icon: <BarChart className="w-6 h-6 text-indigo-400" />
          },
          {
            title: "Atualizações",
            desc: "Qualquer alteração no edital ou novidade legislativa é atualizada automaticamente na sua área de membros.",
            icon: <RefreshCw className="w-6 h-6 text-indigo-400" />
          },
          {
            title: "Material Extra",
            desc: "Além das apostilas, tenha acesso a bônus e materiais extras que são liberados periodicamente para os alunos.",
            icon: <PlusCircle className="w-6 h-6 text-indigo-400" />
          }
        ].map((item, i) => (
          <div key={i} className="bg-indigo-950/20 p-8 rounded-3xl border border-indigo-900/30 hover:bg-indigo-900/40 hover:border-indigo-500/50 transition-all group">
            <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h5 className="text-lg font-bold text-white mb-3">{item.title}</h5>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
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

        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-10 italic uppercase">Depoimentos de nossos alunos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "oEbvpN_Kx44",
              "6aY24_7rCJ8",
              "5CQtS6BZVhQ"
            ].map((id, i) => (
              <div key={i} className="aspect-[9/16] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <iframe 
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Depoimento ${i + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 italic uppercase">Nossos alunos que imprimiram o material</h3>
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

const BuyingCounter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const nextStep = (prev + 1) % 4;
        if (nextStep === 0) {
          setCount((c) => c + 4);
        } else {
          setCount((c) => c - 1);
        }
        return nextStep;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 mt-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      {count < 0 ? 0 : count} pessoas finalizando a compra agora
    </div>
  );
};

const UpsellPopup = ({ 
  isOpen, 
  onClose, 
  onContinueOriginal,
  config
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onContinueOriginal: () => void;
  config: {
    title: string;
    description: React.ReactNode;
    oldPrice: string;
    newPrice: string;
    upsellUrl: string;
    upsellButtonText: string;
    continueButtonText: string;
  }
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#10b981', '#ffffff']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl transform animate-in zoom-in-95 duration-300">
        <div className="p-6 md:p-8 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold mb-4">
            OFERTA EXCLUSIVA LIBERADA
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
            {config.title}
          </h2>
          
          <div className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
            {config.description}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <p className="text-slate-400 line-through text-sm font-bold mb-1">De {config.oldPrice}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-900 font-bold text-lg">Por apenas</span>
              <span className="text-4xl font-black text-green-600 tracking-tighter">{config.newPrice}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-bold mt-1 tracking-widest">(Pagamento único)</p>
          </div>

          <div className="space-y-4">
            <a 
              href={getCheckoutUrl(config.upsellUrl)}
              target="_blank"
              className="block w-full bg-green-600 hover:bg-green-500 text-white py-4 md:py-5 rounded-2xl font-black text-sm md:text-base transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
            >
              {config.upsellButtonText}
            </a>
            
            <button 
              onClick={onContinueOriginal}
              className="block w-full text-slate-400 hover:text-slate-600 text-xs md:text-sm font-bold underline transition-colors"
            >
              {config.continueButtonText}
            </button>
          </div>
        </div>
        
        <div className="bg-slate-900 py-3 text-center">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Acesso Imediato & Vitalício</p>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [upsellConfig, setUpsellConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: React.ReactNode;
    oldPrice: string;
    newPrice: string;
    upsellUrl: string;
    upsellButtonText: string;
    continueButtonText: string;
    originalUrl: string;
  }>({
    isOpen: false,
    title: "",
    description: "",
    oldPrice: "",
    newPrice: "",
    upsellUrl: "",
    upsellButtonText: "",
    continueButtonText: "",
    originalUrl: ""
  });

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setUpsellConfig({
      isOpen: true,
      title: "🎉 Espere! Antes de finalizar sua compra...",
      description: (
        <>
          Você está quase garantindo a versão básica. <br className="hidden md:block" />
          Mas neste momento foi liberada para você uma condição especial do <span className="font-bold text-slate-900">Plano Essencial INSS 2026</span>.
        </>
      ),
      oldPrice: "R$ 26,00",
      newPrice: "R$ 18,90",
      upsellUrl: UPSELL_PLANO_ESSENCIAL_URL,
      upsellButtonText: "Quero a promoção do Plano Essencial por R$ 18,90",
      continueButtonText: "Continuar apenas com a versão básica de R$ 10,00",
      originalUrl: PLANO_BASICO_URL
    });
  };

  const handleEssencialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setUpsellConfig({
      isOpen: true,
      title: "🎉 Espere! Antes de finalizar sua compra...",
      description: (
        <>
          Você está quase garantindo o Plano Essencial. <br className="hidden md:block" />
          Mas neste momento foi liberada para você uma condição especial do <span className="font-bold text-slate-900">Combo Aprovação INSS 2026</span>.
        </>
      ),
      oldPrice: "R$ 37,00",
      newPrice: "R$ 31,90",
      upsellUrl: UPSELL_COMBO_APROVACAO_URL,
      upsellButtonText: "Quero a promoção do Combo Aprovação por R$ 31,90",
      continueButtonText: "Continuar apenas com o Plano Essencial de R$ 26,00",
      originalUrl: PLANO_COMPLETO_URL
    });
  };

  const handleComboClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(getCheckoutUrl(COMBO_APROVACAO_URL), '_blank');
  };

  const handleContinueOriginal = () => {
    setUpsellConfig(prev => ({ ...prev, isOpen: false }));
    window.open(getCheckoutUrl(upsellConfig.originalUrl), '_blank');
  };

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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-950/30 text-orange-400 px-6 py-2 rounded-full font-bold text-sm mb-6 border border-orange-900/30">
             <Clock className="w-5 h-5 animate-pulse" /> A OFERTA EXPIRA EM: {formatTime(timeLeft)}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 italic">ESCOLHA SEU PLANO</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
            O valor cobrado é irrisório perto do salário de <span className="text-blue-400 font-bold">R$ 5.905,79</span> do cargo. 
            É um investimento na sua mudança de vida.
          </p>
          <p className="text-orange-500 font-black uppercase tracking-widest text-sm animate-pulse">
            ⚡ Preço promocional por tempo limitado — garanta antes que o edital saia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Plano Simples */}
          <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-6 flex flex-col hover:border-slate-700 transition-all opacity-80 hover:opacity-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-300 mb-1">Plano Simples</h3>
              <p className="text-slate-500 text-xs">Ideal para quem quer o básico</p>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex gap-2 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Material Teórico Completo
              </li>
            </ul>
            <div className="mb-6">
              <p className="text-slate-500 line-through text-xs">De R$ 57,00</p>
              <p className="text-3xl font-extrabold text-white">R$ 10,00</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Pagamento Único</p>
              <BuyingCounter initialCount={3} />
            </div>
            <button 
              onClick={handleBasicClick}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-4 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Plano Essencial */}
          <div className="bg-slate-900 border-2 border-slate-800 rounded-[2.5rem] p-6 flex flex-col relative shadow-xl opacity-90 hover:opacity-100 transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Plano Essencial</h3>
              <p className="text-blue-400 text-xs font-semibold">O essencial para sua aprovação</p>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Material Teórico Completo",
                "Questões Gabaritadas Inéditas",
                "Mapas Mentais Esquematizados Exclusivos",
                "Plataforma de Estudos Personalizada"
              ].map((f, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="mb-6">
              <p className="text-slate-500 line-through text-xs">De R$ 105,70</p>
              <div className="flex items-baseline gap-2">
                 <p className="text-3xl font-extrabold text-white">R$ 26,00</p>
                 <span className="text-[10px] font-bold text-blue-400 uppercase">Vitalício</span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Economia de R$ 79,70</p>
              <BuyingCounter initialCount={15} />
            </div>
            <button 
              onClick={handleEssencialClick}
              className="w-full bg-blue-900/40 hover:bg-blue-800 text-white py-4 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2 border border-blue-700"
            >
              GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Combo Aprovação */}
          <div className="bg-slate-900 border-4 border-blue-600 rounded-[2.5rem] p-6 flex flex-col relative transform md:scale-105 shadow-[0_0_50px_-12px_rgba(37,99,235,0.4)] z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full font-black text-[10px] shadow-xl whitespace-nowrap animate-pulse uppercase tracking-wider">
               O MAIS ESCOLHIDO
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-1 italic tracking-tight">COMBO APROVAÇÃO</h3>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">A experiência completa e definitiva</p>
            </div>
            <ul className="space-y-2 mb-8 flex-grow">
              {[
                "Material Teórico Completo",
                "Questões Gabaritadas Inéditas",
                "Mapas Mentais Esquematizados Exclusivos",
                "Plataforma de Estudos Personalizada",
                "Simulados Esquematizados",
                "Revisão Completa",
                "Redação Discursiva",
                "Como Estudar com PDFs",
                "Disciplina de Ferro",
                "Controle Emocional",
                "Acesso Imediato"
              ].map((f, i) => (
                <li key={i} className="flex gap-2 text-white font-bold italic text-[11px] group">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mb-6 bg-blue-950/30 p-4 rounded-2xl border border-blue-900/30">
              <p className="text-slate-500 line-through text-xs">De R$ 197,00</p>
              <div className="flex items-baseline gap-2">
                 <p className="text-4xl font-black text-white tracking-tighter">R$ 37,00</p>
                 <span className="text-[10px] font-black text-blue-400 uppercase">Vitalício</span>
              </div>
              <BuyingCounter initialCount={24} />
            </div>
            <button 
              onClick={handleComboClick}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-5 rounded-xl text-center font-black text-lg transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-900/40 hover:-translate-y-1"
            >
              GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <UpsellPopup 
        isOpen={upsellConfig.isOpen} 
        onClose={() => setUpsellConfig(prev => ({ ...prev, isOpen: false }))} 
        onContinueOriginal={handleContinueOriginal} 
        config={upsellConfig}
      />
    </section>
  );
};

const Guarantee = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-16 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
         {/* Decorative elements */}
         <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
         <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
         
         <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="shrink-0 relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
               <div className="relative w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full border-4 border-blue-600/30 flex items-center justify-center shadow-2xl">
                  <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-blue-500" />
               </div>
               <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-xl md:text-2xl shadow-lg border-4 border-slate-900">
                  7
               </div>
            </div>
            
            <div className="text-center md:text-left">
               <h2 className="text-3xl md:text-5xl font-black mb-6 italic text-white tracking-tight uppercase">
                  Risco Zero: <span className="text-blue-500">Garantia Blindada</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
                 Você tem 7 dias para acessar o material, baixar a apostila e testar os bônus. Se por qualquer motivo você achar que não é para você, <span className="font-black text-white underline decoration-blue-500 underline-offset-4">devolvemos 100% do seu investimento</span>. 
               </p>
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 text-xs font-bold text-slate-300 uppercase tracking-wider">
                     <CheckCircle2 className="w-4 h-4 text-green-500" /> Sem Perguntas
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 text-xs font-bold text-slate-300 uppercase tracking-wider">
                     <CheckCircle2 className="w-4 h-4 text-green-500" /> Sem Burocracia
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 text-xs font-bold text-slate-300 uppercase tracking-wider">
                     <CheckCircle2 className="w-4 h-4 text-green-500" /> Reembolso Imediato
                  </div>
               </div>
            </div>
         </div>
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
        <a href={getCheckoutUrl(EDITORA_URL)} target="_blank" className="flex items-center gap-3 text-2xl font-bold group">
           <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500 transition-colors">
              <img src={LOGO_EDITORIA} alt="Logo Editora" className="w-full h-full object-cover" />
           </div>
           <span className="group-hover:text-blue-400 transition-colors">Editora Edital Concursos</span>
        </a>
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
           <a href={getCheckoutUrl(WHATSAPP_SUPPORT_URL)} target="_blank" className="flex items-center gap-2 justify-center hover:text-green-400 transition-colors">
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
           GARANTIR MEU MATERIAL AGORA <ChevronRight className="w-8 h-8" />
        </a>
     </div>
  </section>
);

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('planos');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50 animate-in fade-in slide-in-from-bottom-10 duration-500">
       <a 
          href="#planos" 
          onClick={(e) => scrollToSection(e, 'planos')}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-2xl animate-pulse"
        >
          GARANTIR MEU MATERIAL AGORA <ArrowRight className="w-5 h-5" />
       </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
      <Headline />
      <PainSection />
      <SolutionSection />
      <ComparisonTable />
      <PreviewSection />
      <BonusSection />
      <TargetAudienceSection />
      <StudyAreaSection />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
