/**
 * ====================================================================
 * CONFIGURATION FILE - ANNIVERSARY WEBSITE
 * ====================================================================
 * Kamu bisa dengan mudah mengubah data nama, tanggal, musik,
 * daftar foto & video, serta pesan cinta di bawah ini.
 */

const ANNIVERSARY_CONFIG = {
  // Informasi Pasangan
  couple: {
    partnerName: "Sayang", // Nama panggilan pasangan
    yourName: "Aku",      // Nama kamu
    title: "Happy Anniversary", // Judul utama
    subtitle: "Every moment with you is my favorite memory",
    startDate: "2023-08-21T00:00:00", // Format: YYYY-MM-DDTHH:mm:ss (Tanggal jadian / pernikahan)
  },

  // Pengaturan Musik Latar
  music: {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    // Gunakan URL audio mp3 online atau path file lokal seperti "audio/lagu.mp3"
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-love-112199.mp3",
    autoplayOnUnlock: true, // Otomatis putar lagu saat tombol buka diklik
  },

  // Pengaturan Slideshow
  slideshow: {
    defaultDuration: 6000, // Durasi tiap foto dalam milidetik (6000ms = 6 detik)
    autoPlay: true,        // Slideshow berganti otomatis
    kenBurnsEffect: true,  // Efek zoom sinematik bergerak pada foto
  },

  // Daftar Slide Kenangan (Bisa FOTO atau VIDEO)
  // type: 'image' | 'video'
  slides: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920&auto=format&fit=crop",
      date: "Pertama Kali Bertemu",
      location: "Awal Cerita Indah",
      title: "Hari Dimana Semuanya Dimulai ✨",
      caption: "Dari sekadar tatapan mata biasa, siapa sangka kamu akan menjadi orang yang paling berharga dan tak tergantikan di setiap langkah hidupku.",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1920&auto=format&fit=crop",
      date: "Kencan Pertama",
      location: "Tempat Favorit Kita",
      title: "Canda & Tawa yang Selalu Kurindukan ☕",
      caption: "Mengingat obrolan sederhana kita yang tak pernah habis sampai larut malam. Bersamamu, waktu selalu terasa berjalan terlalu cepat.",
    },
    {
      type: "video",
      // Video MP4 romantis sinematik
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop",
      date: "Momen Spesial",
      location: "Petualangan Bersama",
      title: "Rekaman Setiap Senyuman Indahmu 🎬",
      caption: "Setiap senyuman dan tawamu adalah melodi paling indah yang selalu menghangatkan hatiku di kala lelah.",
      duration: 8000, // durasi slide video dalam ms
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1920&auto=format&fit=crop",
      date: "Menikmati Senja",
      location: "Pantai & Deburan Ombak",
      title: "Di Bawah Langit Senja 🌅",
      caption: "Seperti matahari yang selalu setia kembali terbit, begitulah janjiku untuk selalu mencintai dan menemanimu di setiap musim.",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
      date: "Anniversary Hari Ini",
      location: "Di Hati Kita Selamanya",
      title: "Untuk Hari Ini, Esok, & Seterusnya 💍",
      caption: "Terima kasih telah menjadi teman terbaik, tempat pulang ternyaman, dan cinta terindah dalam hidupku. Selamat hari jadi kita!",
    }
  ],

  // Surat Cinta / Pesan Khusus (Bisa dibuka melalui tombol surat cinta)
  letter: {
    title: "Surat Kecil Untukmu, Cinta ❤️",
    salutation: "Hai Sayangku,",
    content: `Selamat hari jadi yang tak terhingga indahnya! 

Terima kasih sudah berjalan sejauh ini bersamaku. Terima kasih atas setiap pelukan hangat di saat duniaku terasa dingin, setiap tawa yang kau bagikan, dan setiap sabar yang kau beri di kala aku tak sempurna.

Setiap hari bersamamu adalah berkah terindah yang selalu ku syukuri. Aku berdoa semoga cinta kita senantiasa dikelilingi kebahagiaan, kedamaian, dan keberkahan hingga menua bersama.

Aku mencintaimu lebih dari kata-kata yang bisa kutuliskan di sini.`,
    closing: "Selamanya milikmu,",
    authorName: "Aku yang Selalu Mencintaimu"
  },

  // Daftar Pesan Cinta Cepat saat mengklik tombol Hati
  loveQuotes: [
    "You are my today and all of my tomorrows. ❤️",
    "Aku mencintaimu lebih dari kemarin, tapi tak sebanyak besok! 🥰",
    "Terima kasih telah memilih untuk bersamaku! 💖",
    "Bersamamu adalah tempat ternyaman di seluruh dunia. ✨",
    "Happy Anniversary sayangku! Love you to the moon and back! 🌙💫"
  ]
};

// Export to global window object
window.ANNIVERSARY_CONFIG = ANNIVERSARY_CONFIG;
