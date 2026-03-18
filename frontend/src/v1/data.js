const waMessage = encodeURIComponent("Halo Admin Tentrem Residence, saya melihat informasi dari website. Saya tertarik dan ingin mendapat info lebih lanjut mengenai promo dan ketersediaan unitnya.");
const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

export const siteData = {
  global: {
    brandName: "Tentrem Residence",
    waLink: waLink,
  },
  navbar: {
    logoText: "Tentrem Residence",
    menu: ["Beranda", "Promo", "Tipe Rumah", "Fasilitas", "Lokasi"],
    ctaText: "Hubungi Kami"
  },
  hero: {
    bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop", // Drone view of elegant neighborhood/trees
    title: "Kawasan hunian yang asri, nyaman & menentramkan.",
    subtitle: "Tentrem tinggalnya, tentrem juga cicilannya. Wujudkan impian keluarga punya rumah hijau di Wonogiri tanpa harus menguras tabungan.",
    btnPrimary: "Lihat Tipe Rumah",
    btnSecondary: "Tonton Video"
  },
  promo: {
    text: "Promo Spesial Bulan Ini: DP 0%, Free Kanopi & Bebas Biaya BPHTB!",
    countdown: "Promo Berakhir Dalam: 05 Hari : 12 Jam : 30 Menit",
    ctaText: "Klaim Promo Sekarang"
  },
  houseTypes: {
    title: "Temukan Hunian Impian Anda di Tentrem Residence",
    items: [
      {
        id: 1,
        name: "Tipe Akasia (36/72)",
        cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        price: "Mulai dari Rp 250 Juta",
        stock: "Sisa 3 Unit",
        specs: { bed: 2, bath: 1, lt: 72, lb: 36 },
        materials: ["Pondasi Batu Kali", "Dinding Bata Merah (Plester & Aci)", "Rangka Atap Baja Ringan", "Lantai Granit 60x60"],
        description: "Hunian ideal untuk keluarga muda. Tipe Akasia menawarkan tata ruang yang efisien dengan sisa lahan di belakang yang bisa dikembangkan menjadi taman atau area bersantai.",
        sliderImages: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", // Facade
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", // Interior
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"  // Floor plan dummy
        ]
      },
      {
        id: 2,
        name: "Tipe Mahoni (45/90)",
        cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        price: "Mulai dari Rp 350 Juta",
        stock: "Sisa 5 Unit",
        specs: { bed: 2, bath: 1, lt: 90, lb: 45 },
        materials: ["Pondasi Batu Kali", "Dinding Bata Merah", "Rangka Atap Baja Ringan", "Closet Duduk Toto"],
        description: "Dengan dimensi lahan yang lebih luas, Tipe Mahoni memberikan keleluasaan sirkulasi udara dan cahaya natural, menciptakan harmoni sempurna untuk hunian tropis.",
        sliderImages: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598928506311-c55dd58025cb?q=80&w=2070&auto=format&fit=crop"
        ]
      },
      {
        id: 3,
        name: "Tipe Jati (60/120)",
        cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        price: "Mulai dari Rp 500 Juta",
        stock: "Sisa 1 Unit",
        specs: { bed: 3, bath: 2, lt: 120, lb: 60 },
        materials: ["Pondasi Cakar Ayam", "Dinding Bata Merah", "Rangka Atap Baja Ringan", "Smart Door Lock"],
        description: "Varian premium di Tentrem Residence. Menghadirkan desain yang megah, kamar tidur ekstra, dan *carport* luas. Pilihan tepat untuk keluarga yang mendambakan ruang ekstra.",
        sliderImages: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600566752229-250dece065b2?q=80&w=2070&auto=format&fit=crop"
        ]
      }
    ]
  },
  features: {
    title: "Kenapa Memilih Kami",
    items: [
      { id: 1, icon: "lock", title: "Keamanan 24 Jam", desc: "One gate system dengan penjagaan security penuh." },
      { id: 2, icon: "tree", title: "Lingkungan Asri", desc: "Dikelilingi area hijau dan taman bermain anak." },
      { id: 3, icon: "road", title: "Akses Lebar", desc: "Jalan paving block lebar 8 meter untuk 2 mobil." },
      { id: 4, icon: "droplet", title: "Bebas Banjir", desc: "Berada di dataran tinggi Wonogiri yang aman." }
    ]
  },
  location: {
    title: "Lokasi Strategis",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126432.1856980004!2d110.84478168289456!3d-7.842774900138258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2e8c17b0d911%3A0x4027a76e352e850!2sWonogiri%2C%20Wonogiri%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1711204856711!5m2!1sen!2sid",
    points: [
      { icon: "car", text: "5 Menit ke Alun-Alun Wonogiri" },
      { icon: "bus", text: "10 Menit ke Terminal Induk" },
      { icon: "hospital", text: "5 Menit ke RSUD Wonogiri" },
      { icon: "shopping", text: "15 Menit ke Pusat Perbelanjaan" }
    ]
  },
  progress: {
    title: "Bukti Komitmen Kami",
    items: [
      { id: 1, image: "https://images.unsplash.com/photo-1541888086225-f674ce88ecad?q=80&w=2080&auto=format&fit=crop", caption: "Pengecoran Jalan Utama" },
      { id: 2, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop", caption: "Pembangunan Fasad Blok A" },
      { id: 3, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", caption: "Instalasi Atap Rangka Baja" },
      { id: 4, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", caption: "Persiapan Lahan Blok B" }
    ]
  },
  faq: {
    bannerText: "Punya Pertanyaan Seputar Tentrem Residence?",
    btnText: "Lihat FAQ",
    items: [
      { question: "Apakah sertifikatnya sudah SHM?", answer: "Ya, seluruh unit di Tentrem Residence sudah bersertifikat Hak Milik (SHM) dan sudah di-split per kavling." },
      { question: "Berapa Booking Fee untuk mengamankan unit?", answer: "Booking Fee cukup Rp 2.000.000. Nominal ini sudah termasuk ke dalam perhitungan harga jual." },
      { question: "Apakah bisa KPR? Bank apa saja yang bekerja sama?", answer: "Sangat bisa. Kami bekerja sama dengan Bank BTN, Mandiri, dan BNI dengan penawaran bunga khusus." },
      { question: "Bagaimana jika KPR ditolak bank?", answer: "Jika KPR ditolak oleh bank, maka Booking Fee akan dikembalikan 100% tanpa potongan." }
    ]
  },
  footer: {
    about: "Tentrem Residence menghadirkan konsep hunian tropis modern yang menyatu dengan alam. Memberikan kenyamanan dan ketentraman bagi keluarga Anda.",
    address: "Jl. Raya Wonogiri - Ponorogo KM 5, Wonogiri, Jawa Tengah.",
    quickLinks: ["Beranda", "Tipe Rumah", "Fasilitas", "Promo", "Lokasi"],
    contacts: {
      wa: "+62 812 3456 7890",
      email: "info@tentremresidence.com",
      ig: "@tentremresidence"
    },
    copyright: "Copyright © 2026 Tentrem Residence. All rights reserved."
  }
};