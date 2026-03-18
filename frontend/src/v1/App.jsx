import React, { useState, useEffect } from 'react';
import { siteData } from './data.js';
import './index.css';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar data={siteData.navbar} waLink={siteData.global.waLink} />
      <div id="Beranda"><Hero data={siteData.hero} /></div>
      <div id="Promo"><Promo data={siteData.promo} waLink={siteData.global.waLink} /></div>
      <div id="Tipe Rumah"><HouseTypes data={siteData.houseTypes} waLink={siteData.global.waLink} /></div>
      <div id="Fasilitas"><Features data={siteData.features} /></div>
      <div id="Lokasi"><Location data={siteData.location} /></div>
      <Progress data={siteData.progress} />
      
      {/* SIMULASI KPR SECTION - DRAFT / HIDDEN AS REQUESTED */}
      {/* <SimulasiKPR /> */}

      <FAQ data={siteData.faq} />
      <Footer data={siteData.footer} />
      <FAB waLink={siteData.global.waLink} />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Navbar({ data, waLink }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-warm-beige shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-emerald-main' : 'text-white'}`}>
          {data.logoText}
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}>
          {data.menu.map((item, idx) => (
            <a key={idx} href={`#${item}`} className="hover:text-terracotta transition-colors">{item}</a>
          ))}
        </div>

        <a href={waLink} target="_blank" rel="noreferrer" className="hidden md:inline-block bg-terracotta hover:bg-terracotta-hover text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-lg">
          {data.ctaText}
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${isScrolled ? 'text-emerald-main' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-beige shadow-lg absolute w-full left-0 top-full flex flex-col items-center py-4 space-y-4">
          {data.menu.map((item, idx) => (
             <a key={idx} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium">{item}</a>
          ))}
          <a href={waLink} target="_blank" rel="noreferrer" className="bg-terracotta text-white px-6 py-2 rounded-full font-semibold">{data.ctaText}</a>
        </div>
      )}
    </nav>
  );
}

function Hero({ data }) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0">
        <img src={data.bgImage} alt="Hero Tentrem Residence" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">{data.title}</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 drop-shadow-md">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#Tipe Rumah" className="bg-terracotta hover:bg-terracotta-hover text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors shadow-lg">
            {data.btnPrimary}
          </a>
          <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-main px-8 py-3.5 rounded-full font-semibold text-lg transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            {data.btnSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}

function Promo({ data, waLink }) {
  return (
    <section className="py-12 bg-warm-beige container mx-auto px-4 sm:px-6">
      <div className="bg-amber-700/90 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.text}</h2>
          <div className="inline-block bg-black/20 px-4 py-2 rounded-lg font-mono text-lg font-semibold tracking-wider">
            {data.countdown}
          </div>
        </div>
        <a href={waLink} target="_blank" rel="noreferrer" className="shrink-0 bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-md transition-transform hover:scale-105">
          {data.ctaText}
        </a>
      </div>
    </section>
  );
}

function HouseTypes({ data, waLink }) {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-main mb-12">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((house) => (
            <div key={house.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg aspect-[4/3]" onClick={() => setSelectedHouse(house)}>
              <img src={house.cover} alt={house.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{house.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* House Modal */}
      {selectedHouse && (
        <HouseModal house={selectedHouse} onClose={() => setSelectedHouse(null)} waLink={waLink} />
      )}
    </section>
  );
}

function HouseModal({ house, onClose, waLink }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev === house.sliderImages.length - 1 ? 0 : prev + 1));
  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? house.sliderImages.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-warm-beige w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 relative bg-gray-200 aspect-[4/3] md:aspect-auto">
          <img src={house.sliderImages[currentImg]} alt="Slider" className="w-full h-full object-cover" />
          <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
          <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-bold text-emerald-main">{house.name}</h2>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">{house.stock}</span>
          </div>
          <p className="text-xl font-bold text-terracotta mb-6">{house.price}</p>
          
          <div className="flex gap-4 mb-6 border-y border-gray-200 py-4">
            <div className="flex flex-col items-center"><span className="text-sm text-gray-500">K.Tidur</span><span className="font-bold">{house.specs.bed}</span></div>
            <div className="flex flex-col items-center"><span className="text-sm text-gray-500">K.Mandi</span><span className="font-bold">{house.specs.bath}</span></div>
            <div className="flex flex-col items-center"><span className="text-sm text-gray-500">L.Tanah</span><span className="font-bold">{house.specs.lt}m²</span></div>
            <div className="flex flex-col items-center"><span className="text-sm text-gray-500">L.Bangunan</span><span className="font-bold">{house.specs.lb}m²</span></div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{house.description}</p>
          
          <h4 className="font-bold text-gray-800 mb-2">Spesifikasi Material:</h4>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1 text-sm">
            {house.materials.map((mat, i) => <li key={i}>{mat}</li>)}
          </ul>

          <a href={waLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-emerald-main hover:bg-emerald-light text-white py-3.5 rounded-xl font-bold transition-colors">
            Booking Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

function Features({ data }) {
  const renderIcon = (type) => {
    switch(type) {
      case 'lock': return <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
      case 'tree': return <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; // Substitute with image icon conceptually
      case 'road': return <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v8l9-11h-7z" /></svg>; // Lightning icon for access conceptually
      case 'droplet': return <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>; // Cloud/Droplet
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-main mb-12">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.items.map((item, idx) => (
            <div key={item.id} className={`animate-fade-in-up stagger-${idx+1} bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4`}>
              <div className="bg-orange-50 p-3 rounded-xl">{renderIcon(item.icon)}</div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location({ data }) {
  const renderIcon = (type) => {
    if (type === 'car') return <svg className="w-5 h-5 text-emerald-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
    if (type === 'bus') return <svg className="w-5 h-5 text-emerald-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    if (type === 'hospital') return <svg className="w-5 h-5 text-emerald-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
    return <svg className="w-5 h-5 text-emerald-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src={data.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maps Location"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-main mb-8">{data.title}</h2>
            <div className="space-y-4">
              {data.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-warm-beige p-4 rounded-xl">
                  <div className="bg-white p-2 rounded-full shadow-sm">{renderIcon(pt.icon)}</div>
                  <span className="text-gray-700 font-medium">{pt.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Progress({ data }) {
  return (
    <section className="py-20 bg-warm-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-emerald-main mb-10">{data.title}</h2>
        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {data.items.map((item) => (
            <div key={item.id} className="min-w-[280px] md:min-w-[350px] snap-center bg-white p-3 rounded-2xl shadow-sm">
              <img src={item.image} alt={item.caption} className="w-full h-48 object-cover rounded-xl mb-3" />
              <p className="text-center text-sm font-medium text-gray-700">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   SIMULASI KPR SECTION - HIDDEN AS REQUESTED 
   ========================================== */
/*
function SimulasiKPR() {
  const [price, setPrice] = useState(350000000);
  const [dpPercent, setDpPercent] = useState(10);
  const [tenor, setTenor] = useState(15);
  const [interest, setInterest] = useState(5);

  const dpAmount = price * (dpPercent / 100);
  const principal = price - dpAmount;
  const monthlyInterestRate = (interest / 100) / 12;
  const totalMonths = tenor * 12;
  
  // Rumus Anuitas
  const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return (
    <section className="py-20 bg-emerald-main text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Simulasi KPR</h2>
        <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Harga Rumah (Rp)</label>
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-emerald-main focus:border-emerald-main" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Uang Muka / DP ({dpPercent}%)</label>
              <input type="range" min="0" max="50" value={dpPercent} onChange={(e) => setDpPercent(Number(e.target.value))} className="w-full accent-terracotta" />
              <p className="text-sm text-gray-500 mt-1">{formatRp(dpAmount)}</p>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-600 mb-2">Tenor (Tahun)</label>
                <select value={tenor} onChange={(e) => setTenor(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-xl bg-white">
                  <option value={5}>5 Tahun</option>
                  <option value={10}>10 Tahun</option>
                  <option value={15}>15 Tahun</option>
                  <option value={20}>20 Tahun</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-600 mb-2">Bunga (%)</label>
                <input type="number" step="0.1" value={interest} onChange={(e) => setInterest(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-xl" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-warm-beige p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <p className="text-gray-500 font-medium mb-2">Estimasi Cicilan per Bulan</p>
            <p className="text-3xl font-bold text-terracotta mb-4">{formatRp(monthlyPayment)}</p>
            <p className="text-xs text-gray-400">*Estimasi ini hanya simulasi perhitungan dasar. Bunga bank dapat berubah sewaktu-waktu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

function FAQ({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-warm-beige rounded-2xl p-8 text-center shadow-sm border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-emerald-main mb-6">{data.bannerText}</h3>
          <button onClick={() => setIsOpen(true)} className="bg-terracotta hover:bg-terracotta-hover text-white px-8 py-3 rounded-full font-bold transition-colors">
            {data.btnText}
          </button>
        </div>
      </div>

      {isOpen && <FAQModal data={data.items} onClose={() => setIsOpen(false)} />}
    </section>
  );
}

function FAQModal({ data, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-emerald-main">Tanya Jawab (FAQ)</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-800">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {data.map((item, idx) => (
            <div key={idx} className="mb-4 border border-gray-100 rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full text-left p-4 bg-warm-beige font-semibold text-gray-800 flex justify-between items-center"
              >
                {item.question}
                <svg className={`w-5 h-5 transform transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeIndex === idx && (
                <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer({ data }) {
  return (
    <footer className="bg-emerald-main text-emerald-50 pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Tentrem Residence</h2>
            <p className="text-emerald-100/80 mb-4 text-sm leading-relaxed">{data.about}</p>
            <p className="text-emerald-100/80 text-sm flex items-start gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {data.address}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {data.quickLinks.map((link, idx) => (
                <li key={idx}><a href={`#${link}`} className="text-emerald-100/80 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Hubungi Kami</h3>
            <div className="space-y-4">
              <a href={`https://wa.me/${data.contacts.wa.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-emerald-100/80 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {data.contacts.wa}
              </a>
              <p className="flex items-center gap-3 text-emerald-100/80">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {data.contacts.email}
              </p>
              <p className="flex items-center gap-3 text-emerald-100/80">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {data.contacts.ig}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-6 text-center text-sm text-emerald-200/60">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}

function FAB({ waLink }) {
  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-colors animate-pulse-slow flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      {/* Tooltip Hover */}
      <span className="absolute right-14 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat Admin
      </span>
    </a>
  );
}