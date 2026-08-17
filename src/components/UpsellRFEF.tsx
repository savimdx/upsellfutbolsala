import React, { useState, useEffect } from 'react';
import authorRfefImg from '../assets/images/author_rfef.webp';
import rfefLogoImg from '../assets/images/rfef_logo.webp';
import futsalActionImg from '../assets/images/futsal_action.webp';
import carlosMendozaImg from '../assets/images/carlos_mendoza.jpg';
import javierOrtegaImg from '../assets/images/javier_ortega.jpg';
import miguelGarridoImg from '../assets/images/miguel_garrido.jpg';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Check, 
  Sparkles, 
  Play, 
  Pause,
  RotateCcw, 
  Clock, 
  Download, 
  Star,
  Lock,
  ChevronRight,
  Shield,
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [tacticalStep, setTacticalStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(1540); // 25:40 timer

  // 25m 40s Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 1540; // Reset to 25m 40s
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hotmart Sales Funnel Widget script initialization
  useEffect(() => {
    const scriptId = 'hotmart-checkout-elements-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    const initWidget = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (e) {
          console.warn('Hotmart checkoutElements mount notice:', e);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto-play the tactical animation demo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTacticalStep((prev) => (prev + 1) % 4);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const tacticalPlays = [
    {
      title: "1. Rotación de Desmarque (Salida)",
      desc: "El Cierre (C) inicia la salida de balón y descarga hacia el Ala Izquierdo (AI) mientras el Pívot (P) realiza un movimiento de fijación de la defensa rival.",
      c: { left: "50%", top: "82%" },
      ai: { left: "22%", top: "62%" },
      ad: { left: "78%", top: "62%" },
      p: { left: "50%", top: "35%" },
      ball: { left: "26%", top: "64%" }
    },
    {
      title: "2. Creación de Espacio (Pase y Va)",
      desc: "El Ala Izquierdo atrae la presión y mete un pase en diagonal profunda para el desmarque en velocidad del Ala Derecho (AD) que corta por adentro.",
      c: { left: "42%", top: "75%" },
      ai: { left: "25%", top: "55%" },
      ad: { left: "58%", top: "48%" },
      p: { left: "38%", top: "28%" },
      ball: { left: "55%", top: "50%" }
    },
    {
      title: "3. Bloqueo y Transición Rápida",
      desc: "El Ala Derecho asiste de primera intención al Pívot (P) que pivotea de espaldas y deja el balón de frente para la llegada del Cierre (C).",
      c: { left: "50%", top: "48%" },
      ai: { left: "32%", top: "42%" },
      ad: { left: "68%", top: "42%" },
      p: { left: "50%", top: "25%" },
      ball: { left: "50%", top: "22%" }
    },
    {
      title: "4. Disparo y Gol Táctico",
      desc: "El Cierre (C) remata fuerte de bote pronto directo al ángulo superior, superando la estirada del guardameta rival. ¡Gol táctico perfecto!",
      c: { left: "50%", top: "38%" },
      ai: { left: "32%", top: "32%" },
      ad: { left: "68%", top: "32%" },
      p: { left: "45%", top: "20%" },
      ball: { left: "50%", top: "6%" }
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans pb-24">
      
      {/* Sport Field Grid overlay for the premium athletic feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Modern blue and yellow glowing backdrops */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HEADER SCARCITY TICKER (FIXED RED BANNER IDENTICAL TO IMAGE) ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#f02200] text-white py-2 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2 sm:gap-3.5 border-b border-red-700/30">
        <span className="text-lg sm:text-xl">🔥</span>
        <span className="text-[11px] sm:text-[15px] font-extrabold tracking-wide text-white uppercase select-none">
          ¡OFERTA VÁLIDA SOLO HOY!
        </span>
        <div className="flex items-center gap-1 bg-black/15 border border-white/10 rounded-xl px-2.5 py-1 text-xs sm:text-sm font-extrabold text-white font-mono shadow-inner">
          <Clock className="h-3.5 sm:h-4 sm:w-4 w-3.5 text-white shrink-0" />
          <span>{formatTimer(secondsLeft)}</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 space-y-16">
        
        {/* ================= HERO TEXT & HOOK ================= */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* High-Converting Creative Upsell Progress Bar placed above the title in ALL CAPS */}
          <div className="bg-slate-900/60 border border-white/10 py-3 px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left rounded-2xl max-w-3xl mx-auto shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-black text-slate-100 tracking-wider uppercase">
                PASO 2 DE 3: <span className="text-yellow-400 font-black">¡FALTA POCO PARA FINALIZAR!</span> TU PEDIDO PRINCIPAL YA ESTÁ RESERVADO
              </span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[210px]">
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-white/5 shadow-inner">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 h-full rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" style={{ width: '85%' }}></div>
              </div>
              <span className="text-[10px] font-mono font-black text-yellow-400 shrink-0 select-none">85% COMPLETADO</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white font-sans uppercase">
            Descubre las <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-yellow-300">Estrategias y Tácticas de Fútbol Sala</span> <br className="hidden sm:inline"/>
            impartidas por la <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-400">
              Real Federación Española de Fútbol
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Aprende los sistemas tácticos, principios de juego and metodologías utilizadas en la formación de entrenadores para organizar mejor tus entrenamientos y potenciar el rendimiento de tu equipo.
          </p>

          {/* Featured táctica image */}
          <div className="pt-4 flex flex-col items-center justify-center max-w-2xl mx-auto">
            <div className="relative group rounded-2xl bg-slate-900/60 p-2 sm:p-3 border border-slate-700/80 shadow-2xl transition-all duration-300 hover:border-yellow-400/50 w-full flex flex-col items-center justify-center overflow-hidden">
              <img 
                src="https://i.ibb.co/LXDCjFnZ/Chat-GPT-Image-10-de-ago-de-2026-12-43-40.png" 
                alt="Sistemas tácticos y metodologías RFEF" 
                className="w-full h-auto max-w-xl object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* ================= FEATURES ROW ================= */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col items-center">
          
          {/* Quick value features list */}
          <div className="w-full max-w-3xl space-y-6 flex flex-col justify-center items-center">
            <div className="space-y-2 text-center">
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest font-mono">ESTRUCTURA DE ALTO CONTENIDO</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                La Biblioteca Táctica Más Completa
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Todo el conocimiento metodológico consolidado en esquemas interactivos de fácil comprensión para que impulses el nivel de tu equipo inmediatamente.
              </p>
            </div>

            {/* Quick specifications list - 1 col on mobile, 2 cols on desktop/tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 w-full max-w-2xl">
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Ejercicios Prácticos</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Fórmula Ofensiva y Defensiva</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Transiciones y Contragolpe</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Entrenamiento Integrado</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Juegos Reducidos (Small-Sided)</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-200 font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-yellow-400/20 transition-all">
                <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>Sistemas 4-0 y 3-1 Pivot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structure Mockup Image */}
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto my-2">
          <div className="relative group rounded-3xl bg-slate-900/60 p-3 border border-slate-800/80 shadow-2xl transition-all duration-300 hover:border-yellow-400/50 w-full flex flex-col items-center justify-center overflow-hidden min-h-[220px]">
            <img 
              src="https://i.ibb.co/23rPgS2m/Chat-GPT-Image-10-de-ago-de-2026-12-49-08.png" 
              alt="Estructura de Contenido RFEF" 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* ================= INTERACTIVE TACTICAL BOARD SECTION ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest block">PIZARRA TÁCTICA INTERACTIVA</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Visualiza los Sistemas de Juego</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Simula las rotaciones y pases estratégicos de fútbol sala de la pizarra táctica en tiempo real para asimilar la metodología oficial de la RFEF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: The Virtual Court layout */}
            <div className="lg:col-span-7 bg-blue-950/60 border border-blue-900/40 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-2xl relative min-h-[380px] sm:min-h-[440px]">
              
              {/* Tactical court simulation */}
              <div className="relative w-full aspect-[4/3] bg-blue-900 border-4 border-slate-100 rounded-2xl overflow-hidden shadow-inner p-2 select-none flex-grow">
                
                {/* Court markings using absolute SVG lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer boundaries */}
                  <rect x="15" y="15" width="370" height="270" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2.5" />
                  
                  {/* Center line */}
                  <line x1="200" y1="15" x2="200" y2="285" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" />
                  
                  {/* Center circle */}
                  <circle cx="200" cy="150" r="45" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" />
                  <circle cx="200" cy="150" r="3" fill="rgba(255, 255, 255, 0.7)" />

                  {/* Penalty Areas semicircles */}
                  <path d="M 15 75 C 50 75, 75 105, 75 150 C 75 195, 50 225, 15 225" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" fill="none" />
                  <path d="M 385 75 C 350 75, 325 105, 325 150 C 325 195, 350 225, 385 225" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" fill="none" />
                  
                  {/* 10m Penalty Spots */}
                  <circle cx="115" cy="150" r="2" fill="rgba(255, 255, 255, 0.7)" />
                  <circle cx="285" cy="150" r="2" fill="rgba(255, 255, 255, 0.7)" />

                  {/* Goals */}
                  <rect x="3" y="120" width="12" height="60" stroke="#facc15" strokeWidth="2.5" fill="rgba(250, 204, 21, 0.1)" />
                  <rect x="385" y="120" width="12" height="60" stroke="#facc15" strokeWidth="2.5" fill="rgba(250, 204, 21, 0.1)" />
                </svg>

                {/* --- ANIMATED PLAYER TOKENS (Blue Attacking Team, Yellow highlight, Red Defense) --- */}
                
                {/* 1. Player C (Cierre) */}
                <div 
                  className="absolute h-8 w-8 rounded-full bg-blue-600 border-2 border-yellow-400 flex items-center justify-center font-bold text-xs text-white shadow-lg transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: tacticalPlays[tacticalStep].c.left, top: tacticalPlays[tacticalStep].c.top }}
                >
                  C
                </div>

                {/* 2. Player AI (Ala Izquierdo) */}
                <div 
                  className="absolute h-8 w-8 rounded-full bg-blue-600 border-2 border-yellow-400 flex items-center justify-center font-bold text-xs text-white shadow-lg transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: tacticalPlays[tacticalStep].ai.left, top: tacticalPlays[tacticalStep].ai.top }}
                >
                  AI
                </div>

                {/* 3. Player AD (Ala Derecho) */}
                <div 
                  className="absolute h-8 w-8 rounded-full bg-blue-600 border-2 border-yellow-400 flex items-center justify-center font-bold text-xs text-white shadow-lg transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: tacticalPlays[tacticalStep].ad.left, top: tacticalPlays[tacticalStep].ad.top }}
                >
                  AD
                </div>

                {/* 4. Player P (Pívot) */}
                <div 
                  className="absolute h-8 w-8 rounded-full bg-blue-600 border-2 border-yellow-400 flex items-center justify-center font-bold text-xs text-white shadow-lg transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: tacticalPlays[tacticalStep].p.left, top: tacticalPlays[tacticalStep].p.top }}
                >
                  P
                </div>

                {/* 5. Defending Player D (static for contextual obstruction) */}
                <div className="absolute h-7 w-7 rounded-full bg-red-600/80 border border-white flex items-center justify-center font-black text-[10px] text-white shadow-lg left-[48%] top-[55%]">
                  D
                </div>
                <div className="absolute h-7 w-7 rounded-full bg-red-600/80 border border-white flex items-center justify-center font-black text-[10px] text-white shadow-lg left-[30%] top-[25%]">
                  D
                </div>

                {/* 6. Futsal Ball (Yellow with black star markings) */}
                <div 
                  className="absolute h-4.5 w-4.5 rounded-full bg-yellow-400 border border-slate-900 flex items-center justify-center shadow-md transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: tacticalPlays[tacticalStep].ball.left, top: tacticalPlays[tacticalStep].ball.top }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-900"></div>
                </div>

              </div>

              {/* Player Board Control Bar */}
              <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-1.5 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
                  </button>
                  
                  <button 
                    onClick={() => { setTacticalStep(0); setIsPlaying(false); }}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
                    title="Reiniciar Simulación"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((step) => (
                    <button
                      key={step}
                      onClick={() => { setTacticalStep(step); setIsPlaying(false); }}
                      className={`h-7 w-7 rounded-lg text-xs font-mono font-bold transition-all ${tacticalStep === step ? 'bg-yellow-400 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
                    >
                      {step + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Step breakdown details list */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-center">
                <span className="text-[10px] font-bold font-mono tracking-wider text-yellow-400 uppercase bg-yellow-400/10 px-2.5 py-1 rounded-md self-start">
                  PASO {tacticalStep + 1} DE 4
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase leading-tight">
                  {tacticalPlays[tacticalStep].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tacticalPlays[tacticalStep].desc}
                </p>

                <div className="border-t border-slate-800/80 pt-4 mt-2 space-y-2.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Metodologías de Entrenamiento:</span>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      <span>Sincronización milimétrica de movimientos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      <span>Especial para transiciones y superioridad 3vs2</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mini CTA helper indicating value */}
              <div className="bg-gradient-to-r from-blue-950 to-slate-950 border border-blue-900/40 p-4 rounded-2xl flex items-center gap-3">
                <Award className="h-10 w-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-xs text-white uppercase tracking-wider">Metodología de Éxito Certificada</h5>
                  <p className="text-[11px] text-slate-400">Los mismos esquemas con los que España dominó el fútbol sala mundial.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ================= BENEFITS SECTION ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold font-mono text-yellow-400 uppercase tracking-widest block">BENEFICIOS EXTRAORDINARIOS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Mejora el Rendimiento del Equipo</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Implementar estas sesiones estructuradas te otorgará beneficios directos tanto en tu reputación como entrenador como en el marcador de tus partidos dominicales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl space-y-2.5 text-center transition-all hover:border-yellow-400/20">
              <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto font-bold font-mono text-sm">1</div>
              <h4 className="font-extrabold text-white text-sm">Ahorra Horas de Planificación</h4>
              <p className="text-slate-400 text-xs leading-relaxed">No pierdas tiempo pensando qué hacer. Solo escoge la sesión preestablecida y aplícala.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl space-y-2.5 text-center transition-all hover:border-yellow-400/20">
              <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto font-bold font-mono text-sm">2</div>
              <h4 className="font-extrabold text-white text-sm">Comprensión Táctica Superior</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Tus jugadores desarrollarán una asimilación intuitiva de los desmarques y rotaciones.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl space-y-2.5 text-center transition-all hover:border-yellow-400/20">
              <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto font-bold font-mono text-sm">3</div>
              <h4 className="font-extrabold text-white text-sm">Variabilidad de Ejercicios</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Mantén alta la motivación del grupo con dinámicas totalmente variadas e integradas.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl space-y-2.5 text-center transition-all hover:border-yellow-400/20">
              <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto font-bold font-mono text-sm">4</div>
              <h4 className="font-extrabold text-white text-sm">Aumento del Rendimiento</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Toma el control del partido mediante salidas limpias de presión y presión agresiva alta.</p>
            </div>

          </div>
        </div>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest block">CASOS DE ÉXITO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Entrenadores Satisfechos</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Testimonios breves de profesionales que ya implementan la metodología RFEF en sus equipos de fútbol sala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-3xl space-y-4 relative">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic">
                "Este manual cambió la forma en que entreno. Las salidas de presión explicadas paso a paso en el 4-0 son oro puro. Logramos ganar nuestra liga regional."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={carlosMendozaImg} 
                  alt="Carlos Mendoza" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-700 shadow-md shrink-0 bg-slate-800"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://i.imgur.com/8rnRpM4.jpeg';
                    }
                  }}
                />
                <div>
                  <h5 className="text-white font-extrabold text-xs uppercase tracking-wider">Carlos Mendoza</h5>
                  <span className="text-[10px] text-blue-400 font-medium">Entrenador Club Futsal Alcorcón</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-3xl space-y-4 relative">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic">
                "Sistemas tácticos listos para aplicar de inmediato. La organización en los entrenamientos es mucho mejor, y mis jugadores entienden mejor las transiciones."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={javierOrtegaImg} 
                  alt="Javier Ortega" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-700 shadow-md shrink-0 bg-slate-800"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://i.imgur.com/FBAiDW7.jpeg';
                    }
                  }}
                />
                <div>
                  <h5 className="text-white font-extrabold text-xs uppercase tracking-wider">Javier Ortega</h5>
                  <span className="text-[10px] text-blue-400 font-medium">Coordinador Deportivo Futsal Base</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-3xl space-y-4 relative">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic">
                "Ahorro más de 5 horas a la semana planificando las rutinas de ejercicios tácticos. Es la biblioteca indispensable de todo entrenador de fútbol sala."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={miguelGarridoImg} 
                  alt="Miguel S. Garrido" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-700 shadow-md shrink-0 bg-slate-800"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://i.imgur.com/9u4cZfF.jpeg';
                    }
                  }}
                />
                <div>
                  <h5 className="text-white font-extrabold text-xs uppercase tracking-wider">Miguel S. Garrido</h5>
                  <span className="text-[10px] text-blue-400 font-medium">Director Técnico de Futsal Escolar</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SPECIAL SINGLE OPPORTUNITY PRICE BLOCK ================= */}
        <div id="oferta-exclusiva" className="bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 border-2 border-yellow-400 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-[0_15px_50px_rgba(59,130,246,0.15)] space-y-6 max-w-4xl mx-auto">
          
          {/* Subtle decoration elements */}
          <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-3.5">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mx-auto">
              🔥 DESCUENTO ÚNICO ADICIONAL DEL 90%
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-none uppercase">
              Consigue la Biblioteca Completa Ahora
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Esta oferta especial con descuento de lanzamiento solo está disponible en esta página y desaparecerá de forma permanente cuando la cierres.
            </p>
          </div>

          {/* Pricing container */}
          <div className="max-w-md mx-auto py-6 border-y border-white/5 space-y-4">
            
            {/* Price anchors */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] min-[360px]:text-xs sm:text-sm font-semibold text-slate-400 whitespace-nowrap flex-nowrap">
              <span className="text-slate-400 flex items-center gap-1">Valor Oficial: <span className="line-through text-red-400 font-extrabold">U$97,00</span></span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 sm:px-2 rounded font-mono font-bold uppercase text-[9px] min-[360px]:text-[10px] tracking-wider shrink-0">
                Ahorras U$91,10
              </span>
            </div>

            {/* Price Callout */}
            <div className="flex flex-col items-center justify-center my-2 select-none whitespace-nowrap">
              <div className="flex items-center justify-center flex-nowrap gap-0.5 sm:gap-1">
                <span className="text-[3.75rem] min-[360px]:text-[4.75rem] sm:text-[8.5rem] md:text-[10.5rem] font-black text-yellow-400 tracking-tighter leading-none drop-shadow-md shrink-0">
                  U$5,90
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-emerald-400/90 mt-1 flex items-center justify-center gap-1.5 tracking-wide">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Puede pagar en su moneda local
              </span>
            </div>

            <p className="text-[10px] text-slate-500 leading-tight font-mono">
              PAGO ÚNICO • ACCESO DIGITAL COMPLETO • DESCARGA DE INMEDIATO
            </p>
          </div>

          {/* HOTMART - Sales Funnel Widget Container */}
          <div className="w-full max-w-md mx-auto my-4 min-h-[50px]">
            <div id="hotmart-sales-funnel"></div>
          </div>

          {/* SSL and security indicators */}
          <div className="flex justify-center items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-4 border-t border-white/5">
            <span className="flex items-center gap-1">🔒 Conexión SSL</span>
            <span className="flex items-center gap-1">🛡️ Garantía de 7 días</span>
            <span className="flex items-center gap-1">⚡ Acceso Inmediato</span>
          </div>

        </div>

        {/* ================= GUARANTEE SECTION ================= */}
        <div className="bg-gradient-to-br from-blue-950/40 to-slate-950/60 border border-blue-900/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 shadow-lg">
            <Shield className="h-10 sm:h-12 sm:w-12 stroke-[1.5]" />
          </div>
          <div className="space-y-2.5 text-center md:text-left">
            <span className="text-[10px] font-mono text-yellow-400 font-extrabold uppercase tracking-widest block">GARANTÍA DE SATISFACCIÓN INCONDICIONAL</span>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase">Garantía Incondicional de 7 Días</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Prueba los sistemas tácticos y ejercicios de entrenamiento de fútbol sala durante 7 días completos. Si consideras que no eleva el level táctico y de juego de tu equipo, solicítanos un reembolso inmediato del 100% de tu dinero. Sin preguntas ni complicaciones.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
