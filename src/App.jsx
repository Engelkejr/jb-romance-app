import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Calendar, BookOpen, IceCream, UtensilsCrossed, Play, Pause } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);
const Badge = ({ children }) => (<span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium">{children}</span>);
function Card({ children, className = "" }) { return <div className={`rounded-3xl border shadow-sm bg-white ${className}`}>{children}</div>; }
const CardHeader = ({ children, className = "" }) => <div className={`p-5 border-b ${className}`}>{children}</div>;
const CardTitle = ({ children, className = "" }) => <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
const CardContent = ({ children, className = "" }) => <div className={`p-5 ${className}`}>{children}</div>;

const timeline = [
  { when:"17/08/2024", title:"A primeira foto", text:"O registro que começou tudo." },
  { when:"24/08/2024", title:"Nosso date sem querer", text:"Quando a gente nem planejou, mas o destino planejou pela gente." },
  { when:"14/09/2024", title:"Foto que nos assumimos", text:"Deu clique no coração e a gente disse pro mundo." },
  { when:"20/09/2024", title:"Primeiro date de verdade", text:"Olhares, risadas e o começo de uma rotina a dois." },
  { when:"21/09/2024", title:"Primeiro show juntos", text:"Música alta, abraço forte e memórias que ficaram." },
  { when:"05/10/2024", title:"Pedido de namoro (Nosso Dia 05!)", text:"Dois corações, um amor — oficial." },
  { when:"17/11/2024", title:"Nosso feriado/piquenique", text:"Pé na grama, céu aberto e a certeza de que é ao seu lado." },
  { when:"18/12/2024", title:"Minha formatura", text:"Orgulho nos olhos e você do meu lado em mais uma conquista." },
  { when:"24/12/2024", title:"Nosso primeiro natal", text:"Nosso jeitinho, nossas tradições começando." },
  { when:"31/12/2024", title:"Nosso primeiro Ano Novo", text:" Fogos, esperança e planos para o futuro." },
  { when:"22/02/2025", title:"Primeiro jogo do Mengão no Maraca", text:"Camisas rubro-negras, grito na garganta e beijo de gol." },
  { when:"04/03/2025", title:"Carnaval", text:"Brilho, bloquinho e nós dois no mesmo passo." },
  { when:"05/04/2025", title:"Aniversário de 6 meses", text:"Seis meses que passaram voando — e a vontade de viver tudo ao seu lado." },
  { when:"10/05/2025", title:"Formatura dela", text:"Te ver realizando sonhos me faz te admirar ainda mais." },
  { when:"16/05/2025", title:"Nossa primeira trilha", text:"Subida, vento no rosto e mãos dadas o caminho inteiro." },
  { when:"12/06/2025", title:"Primeiro Dia dos Namorados", text:"Nosso amor comemorado em todo detalhe." },
  { when:"23/06/2025", title:"Show do Matuê", text:"Grudados no refrão, coração pulando no beat." },
  { when:"10/07/2025", title:"Aniversário dela (1)", text:"Sorriso de festa e olhos brilhando." },
  { when:"10/07/2025", title:"Aniversário dela (2)", text:"Dois cliques, dois sorrisos, um só amor." },
  { when:"17/07/2025", title:"Viagem pra Búzios (meu aniversário)", text:"Mar, pôr do sol e a certeza de que encontrei meu lugar favorito: ao seu lado." },
  { when:"02/08/2025", title:"Date na Hamburgueria do Rafa", text:"Coca gelada, hambúrguer caprichado e papo que não acaba." },
  { when:"28/09/2025", title:"Praia Seca", text:"Pé na areia e coração tranquilo." },
];

const album = [
  "2024-08-17-primeira-foto.jpg",
  "2024-08-24-date-sem-querer.jpg",
  "2024-09-14-assumimos.jpg",
  "2024-09-20-primeiro-date.webp",
  "2024-09-21-primeiro-show.jpg",
  "2024-10-05-pedido-namoro.webp",
  "2024-11-17-piquenique.jpg",
  "2024-12-18-formatura.jpg",
  "2024-12-24-primeiro-natal.jpg",
  "2024-12-31-virada.jpg",
  "2025-02-22-maracana.jpg",
  "2025-03-04-carnaval.webp",
  "2025-04-05-6-meses.webp",
  "2025-05-10-formatura-dela.webp",
  "2025-05-16-primeira-trilha.webp",
  "2025-06-12-dia-dos-namorados.webp",
  "2025-06-23-show-matue.jpg",
  "2025-07-10-aniversario-dela-1.jpg",
  "2025-07-10-aniversario-dela-2.webp",
  "2025-07-17-buzios-aniversario.webp",
  "2025-08-02-hamburgueria-rafa.jpg",
  "2025-09-28-praia-seca.jpg"
];

export default function App() {
  const [playing, setPlaying] = useState(true);
  const [showDecl, setShowDecl] = useState(false);
  const [url, setUrl] = useState("/musica.mp3");
  const audioRef = useRef(null);

useEffect(() => {
  const el = audioRef.current;
  if (!el) return;

  el.muted = true;
  el.play().catch(() => {
  });

  const unlock = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = false;
    audioRef.current.play().catch(() => {});
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("touchstart", unlock);
  };

  window.addEventListener("pointerdown", unlock);
  window.addEventListener("keydown", unlock);
  window.addEventListener("touchstart", unlock);

  return () => {
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("touchstart", unlock);
  };
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-foreground">
      <header className="relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent" />
        <Section className="pt-12 pb-10">
          <div className="flex flex-col items-center text-center">
            <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 backdrop-blur">
              <img src="/icons/icon-192.png" className="h-5 w-5 rounded-full" />
              <span className="text-sm">J&B — Presente interativo</span>
            </motion.div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight">J&amp;B</h1>
            <p className="mt-3 max-w-2xl text-balance text-slate-600">
              Um app para celebrar nossa história, nosso menu do dia especial e tudo que ainda vamos viver.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#menu" className="no-underline"><button className="rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90"><UtensilsCrossed className="mr-2 h-5 w-5" /> Ver Menu</button></a>
              <a href="#historia" className="no-underline"><button className="rounded-2xl border px-5 py-3 text-sm hover:bg-gray-50"><BookOpen className="mr-2 h-5 w-5" /> Nossa História</button></a>
            </div>
          </div>
        </Section>
      </header>

      <Section id="menu" className="py-10">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-rose-500" />
          <h2 className="text-2xl sm:text-3xl font-serif">Menu – Aniversário de Namoro</h2>
          <Heart className="h-5 w-5 text-rose-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Entrada</CardTitle>
              <div className="flex gap-2 mt-2"><Badge>Palavras do Coração</Badge></div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">Clique abaixo para ler a declaração.</p>
              <button onClick={() => setShowDecl(true)} className="w-full rounded-2xl bg-black text-white px-4 py-2 text-sm hover:opacity-90">Ler declaração</button>
              <AnimatePresence>
                {showDecl && (
                  <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                    className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setShowDecl(false)}>
                    <div
                      className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl bg-white p-6 text-left"
                      onClick={e => e.stopPropagation()}
                    >
                      <h4 className="text-lg font-semibold mb-2">Palavras do Coração</h4>
                      <p className="leading-relaxed text-slate-700 whitespace-pre-wrap">
                        Olá, meu amor.{"\n"}
                        Um ano se passou... Pois é, foi rápido, né? Apesar de querer, eu não imaginava tudo o que viveríamos.{"\n\n"}
                        Desde o dia em que te vi pela primeira vez, não consegui mais tirar você da minha cabeça.{"\n"}
                        Ficava pensando quando teria a chance de te ver de novo. Tentei que te chamassem, mas nunca aconteceu.{"\n\n"}
                        E então, naquele dia em que eu nem iria sair de casa, por uma simples fala, a Mafer me mandou o seu número.{"\n"}
                        Foi ali que você cuidou de mim. Depois disso, no dia 21/08/2024, você postou algo direcionado a mim e, a partir dali, passei quase dois meses te vendo todos os dias.{"\n"}
                        Foi tão natural que eu só percebi que estava te amando quando vi que você já tinha se tornado parte de mim.{"\n"}
                        Já tinha conhecido minha família e tudo estava tão bom… até a notícia de que eu iria me mudar.{"\n"}
                        Mesmo que fosse apenas a alguns minutos de distância, eu fiquei desesperado com a ideia de perder a melhor parte dos meus dias: você.{"\n\n"}
                        Não foi fácil, mas era necessário. E nós superamos cada briga, cada obstáculo que apareceu.{"\n"}
                        Não nos largamos nas dificuldades, mas também estávamos juntos em cada pequena vitória.{"\n"}
                        E é isso que eu sempre sonhei: ter uma companheira assim!{"\n\n"}
                        Meu amor, você é linda. Tem um coração gigante, mesmo que não admita. Você é corajosa, uma excelente profissional e uma namorada incrível.{"\n"}
                        Todos os momentos com você se tornaram especiais: seja uma tarde chuvosa ou um dia ensolarado, tudo é melhor ao seu lado.{"\n"}
                        Minhas melhores risadas são com você. Minhas melhores lembranças são você.{"\n\n"}
                        Você conseguiu me fazer ter um bom aniversário depois de sete anos. Eu fui feliz.{"\n"}
                        Foi o melhor aniversário em muito tempo — e tudo isso porque você estava lá.{"\n\n"}
                        Eu te amo. Eu te amo hoje, eu te amei ontem e vou te amar em todos os amanhãs.{"\n"}
                        Você está destinada a ser minha esposa e a mãe dos meus filhos.{"\n"}
                        E eu farei de tudo para chegarmos a isso. Que esse seja o primeiro de muitos anos juntos,{"\n"}
                        e que em breve tenhamos nosso lar, nosso casamento e nossos filhos.{"\n\n"}
                        Meu amor, eu te amo. Feliz um ano para a gente.{"\n"}
                        Comigo, você sempre terá alguém para te apoiar e para te levantar se cair.{"\n\n"}
                        Com todo o amor,{"\n"}
                        João Rafael Engelke Santos
                      </p>
                      <div className="mt-4 text-right">
                        <button
                          className="rounded-2xl border px-4 py-2 text-sm"
                          onClick={() => setShowDecl(false)}
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Prato Principal</CardTitle>
              <div className="flex gap-2 mt-2"><Badge>2 Corações, 1 Amor</Badge></div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">
                Fettuccine ao molho de queijos e pasta de tomate, acompanhado de carne dois sabores que se encontram e viram um só, assim como nós dois.
              </p>
              <div className="text-sm text-slate-600"><strong>Nosso Dia 05!</strong> 05/10/2024</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Sobremesa</CardTitle>
              <div className="flex gap-2 mt-2"><Badge>Para Sempre Nós</Badge></div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">Brownie quentinho com sorvete gelado: intensidade e delicadeza, o jeito único de como você completa a minha vida.</p>
              <div className="flex items-center gap-2 text-sm text-slate-500"><IceCream className="h-4 w-4" /> Final perfeito, nosso final feliz.</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="historia" className="py-12">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Calendar className="h-5 w-5" /><h2 className="text-2xl sm:text-3xl font-serif">Nossa História</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((t) => (<TimelineCard key={t.when + t.title} when={t.when} title={t.title} text={t.text} />))}
        </div>

        <div className="mt-10">
          <h3 className="mb-3 font-serif text-xl">Álbum</h3>
          <p className="text-sm text-slate-600 mb-4">Suas fotos já estão aqui. Pode adicionar mais em <code>/public/fotos</code>.</p>

          {/* Masonry que respeita o formato das fotos */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {album.map((src) => (
              <div key={src} className="mb-4 break-inside-avoid">
                <img
                  src={`/fotos/${src}`}
                  alt="J&B"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-sm ring-1 ring-black/5"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <footer className="mt-12 border-t">
        <Section className="py-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-600">Feito com <Heart className="inline h-4 w-4 text-rose-500" /> por JTR para Brunna.</p>
         <div className="w-full max-w-md rounded-2xl border p-4">
  <div className="flex items-center justify-between gap-3">
    <div>
      <p className="font-medium">Trilha Sonora</p>
      <p className="text-xs text-slate-500">O arquivo <code>/public/musica.mp3</code> já está incluído.</p>
    </div>
    <button
      className={`rounded-2xl px-4 py-2 text-sm ${playing ? "bg-red-600 text-white" : "bg-black text-white"}`}
      onClick={() => {
        const el = audioRef.current;
        if (!el) return;
        if (playing) el.pause(); else el.play().catch(()=>{});
        setPlaying(v => !v);
      }}
    >
      {playing ? <><Pause className="mr-2 h-4 w-4" />Pausar</> : <><Play className="mr-2 h-4 w-4" />Tocar</>}
    </button>
  </div>

  {/* Áudio fixo, inicia mutado e toca em loop; desmuta na 1ª interação */}
  <audio
    ref={audioRef}
    src="/musica.mp3"
    autoPlay
    loop
    preload="auto"
    playsInline
    muted   // importante para o autoplay inicial
    className="hidden"
  />
</div>


        </Section>
      </footer>
    </div>
  );
}

function TimelineCard({ when, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }}>
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="h-4 w-4" /> {when}</div>
          <CardTitle className="font-serif text-lg mt-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0"><p className="text-sm text-slate-600 leading-relaxed">{text}</p></CardContent>
      </Card>
    </motion.div>
  );
}
