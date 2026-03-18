import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ShieldCheck, Trees, Route, FileCheck, Zap, Droplets, TreePine, Handshake,
  MapPin, Bus, Hospital, School, ShoppingBag, Fuel,
  ChevronDown, Play, X, ChevronLeft, ChevronRight, MessageCircle, Menu, Mail, Instagram, ArrowRight
} from 'lucide-react';
import { SITE_DATA } from './data.js';

// --- HELPERS ---
const ICON_MAP = {
  ShieldCheck, Trees, Route, FileCheck, Zap, Droplets, TreePine, HandshakeIcon: Handshake, 
  MapPin, Bus, Hospital, School, ShoppingBag, Fuel
};

const getIcon = (name, props = {}) => {
  const Icon = ICON_MAP[name];
  return Icon ? <Icon {...props} /> : null;
};

const generateWaUrl = (phone, msg) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
const GLOBAL_WA_URL = generateWaUrl(SITE_DATA.brand.phoneRaw, SITE_DATA.brand.waMessage);


// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="antialiased selection:bg-terracotta selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PromoSection />
        <HouseTypesSection />
        <AdvantagesSection />
        <LocationSection />
        <ProgressSection />
        <FAQSection />
        {/* KPR_START — Sembunyikan sementara
        <section id="kpr" className="py-20 bg-forest">
          KPR Simulator Code Here
        </section>
        KPR_END */}
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

// --- SUBCOMPONENTS ---

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-bg)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)] py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        <a href="#beranda" className={`flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-xl transition-colors ${scrolled ? 'text-forest' : 'text-white'}`}>
          <TreePine size={24} />
          {SITE_DATA.brand.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className={`flex items-center gap-6 text-sm font-medium transition-colors ${scrolled ? 'text-text-primary' : 'text-white/90'}`}>
            {SITE_DATA.nav.links.map((link) => (
              <li key={link.label} className="relative group">
                <a href={link.href} className="hover:text-terracotta transition-colors">{link.label}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="bg-terracotta text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-terracotta-h hover:-translate-y-0.5 transition-all shadow-md">
            Hubungi Kami
          </a>
        </div>

        <button className={`md:hidden ${scrolled ? 'text-text-primary' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 w-full bg-[var(--color-bg)] shadow-lg md:hidden flex flex-col items-center py-6 gap-6 border-t border-black/5"
          >
            {SITE_DATA.nav.links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-text-primary font-medium w-full text-center py-2 hover:bg-black/5">
                {link.label}
              </a>
            ))}
            <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="bg-terracotta text-white rounded-full px-8 py-3 text-sm font-semibold mt-2">
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="beranda" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0">
      <img src={SITE_DATA.hero.imageUrl} alt={SITE_DATA.hero.imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none"></div>
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">
        
        <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm rounded-full px-4 py-1.5 border border-white/20 mb-5 md:mb-6">
          {SITE_DATA.hero.badgeText}
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6">
          {SITE_DATA.hero.heading}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl leading-relaxed">
          {SITE_DATA.hero.subheading}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a href={SITE_DATA.hero.ctaPrimary.href} className="w-full sm:w-auto bg-terracotta text-white rounded-full px-8 py-3.5 font-semibold hover:bg-terracotta-h hover:-translate-y-0.5 transition-all text-center text-sm md:text-base shadow-lg">
            {SITE_DATA.hero.ctaPrimary.label}
          </a>
          <a href={SITE_DATA.hero.ctaSecondary.href} className="w-full sm:w-auto border-2 border-white/80 text-white bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:border-white rounded-full px-8 py-3.5 font-semibold flex items-center justify-center gap-2 transition-all text-sm md:text-base shadow-lg">
            <Play size={18} fill="currentColor" /> {SITE_DATA.hero.ctaSecondary.label}
          </a>
        </motion.div>

      </motion.div>

      {/* Chevron disembunyikan di mobile (hidden md:flex) agar tidak mengganggu, dan posisinya di PC lebih aman */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-chevron-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

function PromoSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    const target = new Date(SITE_DATA.promo.deadline).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section id="promo" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="bg-forest bg-diagonal-stripe rounded-[var(--radius-xl)] p-6 md:p-12 shadow-[var(--shadow-hover)] text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
            
            {/* Bagian Teks & Tombol */}
            <div className="md:col-span-1 text-center md:text-left">
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-5 md:mb-6">{SITE_DATA.promo.heading}</h2>
              <ul className="space-y-3 mb-8 inline-block md:block text-left w-fit mx-auto md:mx-0">
                {SITE_DATA.promo.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-terracotta rounded-full p-1 shrink-0"><ShieldCheck size={14} className="text-white" /></div>
                    <span className="text-white/90 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="inline-block bg-white text-forest rounded-full px-6 py-3 text-sm md:text-base font-semibold hover:bg-surface-alt transition-colors shadow-md w-full sm:w-auto text-center cursor-pointer">
                  {SITE_DATA.promo.ctaLabel}
                </a>
              </div>
            </div>

            {/* Bagian Countdown Timer */}
            <div className="md:col-span-2 flex justify-center md:justify-end mt-2 md:mt-0">
              <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
                {timeBlocks.map((block, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 sm:flex-none">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl w-full max-w-[72px] aspect-square sm:w-20 sm:h-20 flex items-center justify-center font-[family-name:var(--font-mono)] text-xl sm:text-3xl font-bold text-white border border-white/20 mb-2 shadow-inner">
                      {block.value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] sm:text-sm text-white/70 uppercase tracking-wider">{block.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HouseTypesSection() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (selectedHouse) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, [selectedHouse]);

  const scroll = (offset) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="tipe-rumah" className="py-20 px-4 bg-surface overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-text-primary">Pilihan Tipe Rumah</h2>
            <p className="text-text-body max-w-2xl">Dirancang untuk tumbuh bersama keluarga Anda. Pilih tipe yang paling sesuai dengan kebutuhan ruang dan rencana masa depan.</p>
          </div>
          
          {/* Tombol Panah untuk Desktop */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-340)} className="p-3 rounded-full bg-surface border border-black/5 shadow-sm hover:bg-surface-alt transition-colors cursor-pointer"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll(340)} className="p-3 rounded-full bg-surface border border-black/5 shadow-sm hover:bg-surface-alt transition-colors cursor-pointer"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Indikator UX Mobile: Teks Animasi Swipe */}
        <div className="md:hidden flex items-center justify-end mb-3">
          <p className="text-xs font-semibold text-terracotta flex items-center gap-1 animate-pulse">
            Geser untuk melihat lainnya <ArrowRight size={14} />
          </p>
        </div>

        {/* Horizontal Scroll / Carousel untuk Card Rumah */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-snap-type-x-mandatory scrollbar-hide pb-8 pt-2" style={{ scrollSnapType: 'x mandatory' }}>
            {SITE_DATA.houseTypes.map(house => (
              <div key={house.id} style={{ scrollSnapAlign: 'start' }} className="flex-none w-[80vw] md:w-[340px]">
                <HouseCard house={house} onSelect={() => setSelectedHouse(house)} />
              </div>
            ))}
          </div>
          
          {/* Fade-out Gradient: Sekarang aktif di semua ukuran layar untuk menutupi potongan card dengan halus */}
          <div className="absolute right-0 top-0 bottom-8 w-12 md:w-16 bg-gradient-to-l from-[var(--color-surface)] to-transparent pointer-events-none"></div>
        </div>

      </div>

      <AnimatePresence>
        {selectedHouse && <HouseModal house={selectedHouse} onClose={() => setSelectedHouse(null)} />}
      </AnimatePresence>
    </section>
  );
}

// Catatan: Fungsi HouseCard() biarkan SAMA seperti sebelumnya. Tidak perlu diubah.
function HouseModal({ house, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const thumbRef = useRef(null); // Tambahkan ref untuk container thumbnail

  const nextImg = () => setActiveImg((prev) => (prev + 1) % house.images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + house.images.length) % house.images.length);

  // Fungsi untuk mengubah scroll wheel vertikal (mouse PC) menjadi scroll horizontal
  const handleThumbnailScroll = (e) => {
    if (thumbRef.current) {
      // Menggeser posisi horizontal berdasarkan putaran roda mouse vertikal
      thumbRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 16 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.95, y: 16 }} 
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="bg-surface md:rounded-[var(--radius-xl)] shadow-[var(--shadow-modal)] w-full max-w-5xl h-[100dvh] md:h-[90vh] flex flex-col md:flex-row relative z-10 overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-2 rounded-full transition-colors shadow-sm cursor-pointer md:bg-surface-alt md:text-text-primary md:hover:bg-black/10">
          <X size={20} />
        </button>
        
        {/* KIRI: Area Gambar */}
        <div className="w-full md:w-1/2 flex flex-col h-[45vh] md:h-full flex-shrink-0 border-b md:border-b-0 md:border-r border-black/5 bg-surface-alt/50">
          
          <div className="relative flex-1 bg-black/5 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img key={activeImg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} src={house.images[activeImg].url} alt={house.images[activeImg].alt} className="w-full h-full object-cover" />
            </AnimatePresence>
            <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all cursor-pointer opacity-0 group-hover:opacity-100"><ChevronLeft size={20} /></button>
            <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all cursor-pointer opacity-0 group-hover:opacity-100"><ChevronRight size={20} /></button>
          </div>
          
          {/* Implementasi ref dan onWheel di container ini */}
          <div 
            ref={thumbRef}
            onWheel={handleThumbnailScroll}
            className="flex gap-3 p-4 overflow-x-auto scrollbar-hide h-24 md:h-28 flex-shrink-0"
          >
            {house.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImg(idx)} className={`flex-shrink-0 w-20 md:w-24 h-full rounded-md overflow-hidden transition-all cursor-pointer ${activeImg === idx ? 'ring-2 ring-terracotta ring-offset-2 scale-95' : 'opacity-60 hover:opacity-100'}`}>
                <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* KANAN: Area Detail */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto scrollbar-hide flex flex-col h-[55vh] md:h-full">
          <div className="mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2 text-text-primary">{house.name}</h2>
            <p className="text-terracotta font-bold text-2xl">Rp {house.startPrice}</p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-text-body mb-6 border-y border-black/5 py-4">
            <div className="flex flex-col"><span className="text-text-muted text-xs">Luas Bangunan</span><span className="font-semibold">{house.buildArea} m²</span></div>
            <div className="w-px h-8 bg-black/10"></div>
            <div className="flex flex-col"><span className="text-text-muted text-xs">Luas Tanah</span><span className="font-semibold">{house.landArea} m²</span></div>
          </div>

          <p className="text-text-body text-sm leading-relaxed mb-8">{house.marketingCopy}</p>

          <h4 className="font-semibold text-text-primary mb-4 border-b border-black/5 pb-2">Spesifikasi Material</h4>
          <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm mb-10">
            {house.materials.map((mat, idx) => (
              <div key={idx}>
                <dt className="text-text-muted text-xs mb-1">{mat.label}</dt>
                <dd className="font-medium text-text-primary">{mat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto pt-6 border-t border-black/5 relative md:sticky md:bottom-0 bg-surface pb-12 md:pb-0 flex flex-col md:block items-start">
            <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="w-fit md:w-full inline-flex justify-center items-center gap-2 bg-terracotta text-white rounded-full py-3 px-6 md:py-4 text-sm md:text-base font-semibold hover:bg-terracotta-h hover:-translate-y-0.5 transition-all shadow-md cursor-pointer">
              Tanya Detail / Booking Unit
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}


function HouseCard({ house, onSelect }) {
  const isAlmostSoldOut = house.stockLeft <= 2;
  const isLimited = house.stockLeft <= 5 && house.stockLeft > 2;
  
  const badgeClass = isAlmostSoldOut ? 'bg-red-100 text-red-700' : isLimited ? 'bg-amber-100 text-amber-700' : 'bg-[var(--color-forest-muted)] text-forest';
  const badgeText = isAlmostSoldOut ? 'Hampir Habis!' : isLimited ? `Tersisa ${house.stockLeft} Unit` : `Tersedia ${house.stockLeft} Unit`;

  return (
    <motion.div whileHover={{ y: -4 }} className="group bg-surface rounded-[var(--radius-lg)] border border-black/5 shadow-[var(--shadow-card)] overflow-hidden flex flex-col cursor-pointer" onClick={onSelect}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[var(--radius-lg)]">
        <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} src={house.images[0].url} alt={house.images[0].alt} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Lihat Spesifikasi Lengkap &rarr;</p>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${badgeClass}`}>{badgeText}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-1 text-text-primary">{house.name}</h3>
        <p className="text-sm text-text-muted mb-4 line-clamp-2">{house.tagline}</p>
        
        <div className="flex items-center gap-4 text-sm text-text-body mb-6 border-y border-black/5 py-3">
          <div className="flex flex-col"><span className="text-text-muted text-xs">LB/LT</span><span className="font-semibold">{house.buildArea}/{house.landArea} m²</span></div>
          <div className="w-px h-6 bg-black/10"></div>
          <div className="flex flex-col"><span className="text-text-muted text-xs">K. Tidur</span><span className="font-semibold">{house.bedrooms}</span></div>
          <div className="w-px h-6 bg-black/10"></div>
          <div className="flex flex-col"><span className="text-text-muted text-xs">K. Mandi</span><span className="font-semibold">{house.bathrooms}</span></div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">Mulai dari</p>
            <p className="text-terracotta font-bold text-lg">Rp {house.startPriceShort}</p>
          </div>
          <button className="text-sm font-semibold text-forest hover:text-terracotta transition-colors">Detail Unit</button>
        </div>
      </div>
    </motion.div>
  );
}

function AdvantagesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="fasilitas" className="py-20 px-4 bg-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Tentrem?</h2>
          <p className="text-text-body max-w-2xl mx-auto">Kami tidak sekadar membangun dinding dan atap. Kami membangun lingkungan yang mendukung ketenangan keluarga Anda.</p>
        </div>

        <motion.div ref={containerRef} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.advantages.map((adv, idx) => (
            <motion.div key={idx} variants={itemVariants} className="p-6 rounded-[var(--radius-lg)] border border-black/5 bg-surface hover:bg-[var(--color-forest-muted)] hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-md group">
              {getIcon(adv.iconName, { size: 36, className: 'text-forest mb-5 group-hover:scale-110 transition-transform' })}
              <h3 className="font-bold text-lg mb-2 text-text-primary">{adv.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function LocationSection() {
  return (
    <section id="lokasi" className="py-20 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">{SITE_DATA.location.heading}</h2>
            <p className="text-text-body mb-8 leading-relaxed">{SITE_DATA.location.subtext}</p>
            
            <div className="space-y-1">
              {SITE_DATA.location.landmarks.map((mark, idx) => (
                <div key={idx} className="flex items-center gap-4 py-3.5 border-b border-dashed border-black/10 last:border-0">
                  <div className="bg-surface-alt p-2 rounded-lg text-forest">{getIcon(mark.iconName, { size: 20 })}</div>
                  <span className="font-medium text-text-primary">{mark.label}</span>
                  <span className="ml-auto text-xs font-semibold bg-[var(--color-forest-muted)] text-forest rounded-full px-3 py-1">{mark.distance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] lg:aspect-square bg-surface-alt relative border border-black/5">
            <iframe src={SITE_DATA.location.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Tentrem Residence" className="absolute inset-0"></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}


function ProgressSection() {
  const scrollRef = useRef(null);
  
  const scroll = (offset) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-bg overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">Progres Pembangunan</h2>
            <p className="text-text-body">Transparansi adalah kunci. Pantau terus perkembangan hunian Anda.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll(-340)} className="p-3 rounded-full bg-surface border border-black/5 shadow-sm hover:bg-surface-alt transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll(340)} className="p-3 rounded-full bg-surface border border-black/5 shadow-sm hover:bg-surface-alt transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-snap-type-x-mandatory scrollbar-hide pb-8 pt-2" style={{ scrollSnapType: 'x mandatory' }}>
            {SITE_DATA.progress.map((item, idx) => (
              <div key={idx} style={{ scrollSnapAlign: 'start' }} className="flex-none w-[min(320px,85vw)] group">
                <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-sm aspect-[4/3] mb-4 bg-surface-alt">
                  <img src={item.imageUrl} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">{item.caption}</h4>
                <p className="text-xs font-mono text-text-muted">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none hidden sm:block"></div>
        </div>

      </div>
    </section>
  );
}


function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="container mx-auto max-w-3xl">
        
        <div className="bg-terracotta bg-diagonal-stripe py-16 px-8 text-center rounded-[var(--radius-xl)] shadow-lg mb-16 text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Kami mengumpulkan pertanyaan yang sering ditujukan calon penghuni kepada kami. Jika belum terjawab, jangan ragu hubungi admin.</p>
          <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-terracotta rounded-full px-8 py-3.5 font-bold hover:shadow-lg hover:-translate-y-1 transition-all">
            <MessageCircle size={20} /> Chat WhatsApp Admin
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6 text-center text-text-primary">FAQ (Tanya Jawab)</h3>
          {SITE_DATA.faq.map((item, idx) => (
            <div key={idx} className="border-b border-black/10 last:border-0 overflow-hidden">
              <button onClick={() => toggleFAQ(idx)} className="w-full flex justify-between items-center py-5 text-left font-semibold text-text-primary hover:text-terracotta transition-colors">
                <span className="pr-8">{item.question}</span>
                <motion.span animate={{ rotate: openIndex === idx ? 180 : 0 }} className="text-text-muted flex-shrink-0">
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <p className="pb-6 text-text-body text-sm leading-relaxed pr-4">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="bg-forest text-[var(--color-text-inverse)] pt-16 pb-8 px-4 border-t-4 border-terracotta">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-2xl mb-4">
              <TreePine size={28} className="text-terracotta" />
              {SITE_DATA.brand.name}
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">{SITE_DATA.footer.description}</p>
            <div className="flex gap-4">
              <a href={GLOBAL_WA_URL} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-terracotta transition-colors"><MessageCircle size={18} /></a>
              <a href={`mailto:${SITE_DATA.brand.email}`} className="p-2.5 bg-white/10 rounded-full hover:bg-terracotta transition-colors"><Mail size={18} /></a>
              <a href={`https://instagram.com/${SITE_DATA.brand.instagram.replace('@','')}`} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-terracotta transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 tracking-wide">Navigasi Singkat</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {SITE_DATA.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white hover:translate-x-1 inline-block transition-transform">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-4 tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                <span>{SITE_DATA.brand.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-terracotta flex-shrink-0" />
                <span>{SITE_DATA.brand.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>{SITE_DATA.footer.copyright}</p>
          <p>{SITE_DATA.footer.taglineBottom}</p>
        </div>
      </div>
    </footer>
  );
}


function FloatingWA() {
  return (
    <a href={GLOBAL_WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Tentrem Residence" className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-wa-pulse hover:scale-110 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}