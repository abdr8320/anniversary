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
    startDate: "2024-09-01T00:00:00", // Format: YYYY-MM-DDTHH:mm:ss
  },

  // Pengaturan Musik Latar
  music: {
    title: "Kekasih Impian",
    artist: "Natta Reza",
    // Menggunakan file MP3 lokal di root folder
    url: "Kekasih Impian - Natta Reza.mp3",
    autoplayOnUnlock: true, // Otomatis putar lagu saat tombol buka diklik
  },

  // Pengaturan Slideshow (Pas untuk durasi lagu 4 menit 35 detik / 275 detik)
  slideshow: {
    defaultDuration: 7400, // Durasi tiap foto dalam milidetik (7400ms = 7.4 detik)
    autoPlay: true,        // Slideshow berganti otomatis
    kenBurnsEffect: true,  // Efek zoom sinematik bergerak pada foto
  },

  // Daftar 37 Slide Kenangan Terbaik (Kronologis & Storytelling sesuai Momen Foto)
  slides: [
    {
      type: "image",
      url: "images/ADT06864.JPG",
      date: "01 September 2024 • 07:31",
      location: "Pintu Masuk & Welcome Board",
      title: "Menyambut Hari yang Dinantikan ✨",
      caption: "Pintu gerbang menuju lembaran baru yang suci, menyambut para tamu dan keluarga di hari bersejarah kita."
    },
    {
      type: "image",
      url: "images/ADT06983.JPG",
      date: "01 September 2024 • 08:32",
      location: "Lorong Kedatangan / Iring-iringan Keluarga",
      title: "Langkah Kebersamaan Keluarga Besar 🤍",
      caption: "Keluarga besar beriringan melangkah dengan penuh sukacita dan kehangatan, mengantarkan kami menuju ikatan suci."
    },
    {
      type: "image",
      url: "images/ADT07064.JPG",
      date: "01 September 2024 • 09:20",
      location: "Prosesi Masuk / Dampingan Orang Tua Tercinta",
      title: "Bimbingan & Restu Orang Tua 👨‍👩‍👦",
      caption: "Melangkah dengan mantap dalam genggaman dan iringan doa tulus dari kedua orang tua tercinta."
    },
    {
      type: "image",
      url: "images/GMS08165.JPG",
      date: "01 September 2024 • 09:29",
      location: "Area Masuk Akad / Bersama Ayah & Ibu",
      title: "Kasih Sayang Tiada Batas Ayah & Ibu 🌿",
      caption: "Rasa syukur yang mendalam atas segala kasih sayang dan didikan orang tua yang mengantarkan sampai di titik ini."
    },
    {
      type: "image",
      url: "images/GMS08182.JPG",
      date: "01 September 2024 • 09:32",
      location: "Prosesi Hantaran / Penyerahan Seserahan",
      title: "Penyerahan Tanda Kasih & Mahar 🎁",
      caption: "Kerabat dan keluarga membawa hantaran seserahan sebagai simbol kesungguhan niat dan ketulusan cinta."
    },
    {
      type: "image",
      url: "images/ADT07171.JPG",
      date: "01 September 2024 • 09:37",
      location: "Meja Akad Nikah / Khidmat Menjelang Ijab Qabul",
      title: "Persiapan Kalimat Suci & Ijab Qabul 🤲",
      caption: "Suasana hening penuh khidmat di depan meja akad, merangkai niat suci di hadapan Allah SWT dan para saksi."
    },
    {
      type: "image",
      url: "images/GMS08290.JPG",
      date: "01 September 2024 • 09:52",
      location: "Panggung Akad / Silaturahmi & Serah Terima Hantaran",
      title: "Penyatuan Dua Keluarga Besar 🤝💐",
      caption: "Momen hangat serah terima hantaran seserahan, menyatukan dua keluarga besar dalam jalinan persaudaraan dan cinta."
    },
    {
      type: "video",
      url: "Akad Nikah.mp4",
      poster: "images/akad_nikah_poster.jpg",
      date: "01 September 2024 • 10:00",
      location: "Meja Akad Nikah / Momen Sakral Ijab Qabul",
      title: "Rekaman Momen Suci Ijab Qabul 🎬🕊️",
      caption: "Momen paling bergetar dan membahagiakan, mengucap ikrar suci di hadapan Allah SWT untuk menjagamu seutuhnya.",
      duration: 8600 // 8.6 detik (video 8.598s)
    },
    {
      type: "image",
      url: "images/ADT07312.JPG",
      date: "01 September 2024 • 10:05",
      location: "Meja Akad Nikah / Pengucapan Ijab Qabul",
      title: "Ikrar Janji Suci Telah Terucap 💍",
      caption: "Dengan satu tarikan napas dan niat tulus, kalimat suci terucap mantap menjadikan kita pasangan yang halal."
    },
    {
      type: "image",
      url: "images/ADT07350.JPG",
      date: "01 September 2024 • 10:08",
      location: "Lorong Akad / Kehadiran Sang Mempelai Wanita",
      title: "Kehadiran Sang Bidadari Impian 👰‍♀️✨",
      caption: "Langkah anggunmu mendekat dengan pesona dan kelembutan yang membuat hatiku bergetar penuh rasa kagum."
    },
    {
      type: "image",
      url: "images/GMS08362.JPG",
      date: "01 September 2024 • 10:09",
      location: "Meja Akad Nikah / Tatapan Penuh Syukur",
      title: "Menyambut Sang Belahan Jiwa 🕊️❤️",
      caption: "Melihatmu hadir di hadapanku dengan senyuman terindah, tiada kata selain syukur yang tak henti ku panjatkan."
    },
    {
      type: "image",
      url: "images/ADT07381.JPG",
      date: "01 September 2024 • 10:10",
      location: "Meja Akad Nikah / Senyum Pertama Pasangan Halal",
      title: "Resmi Bersanding Bahagia Berdua 🥰",
      caption: "Senyuman pertama kita sebagai suami istri, hati ini terasa begitu hangat dan lengkap di sampingmu."
    },
    {
      type: "image",
      url: "images/GMS08422.JPG",
      date: "01 September 2024 • 10:18",
      location: "Lorong Akad / Dampingan Saudara Tercinta",
      title: "Dukungan & Kasih Saudara Tercinta 💖",
      caption: "Ditemani saudara-saudara tercinta yang senantiasa memberi doa, kehangatan, dan cinta di hari bahagia ini."
    },
    {
      type: "image",
      url: "images/ADT07484.JPG",
      date: "01 September 2024 • 10:24",
      location: "Meja Akad Nikah / Simbol Ikatan Suci",
      title: "Buku Nikah & Simbol Ikatan Abadi 📜💎",
      caption: "Dua buku nikah dan mahar sebagai lambang cinta yang kini telah resmi dan sah di mata agama serta negara."
    },
    {
      type: "image",
      url: "images/GMS08492.JPG",
      date: "01 September 2024 • 10:28",
      location: "Meja Akad Nikah / Didampingi Para Ayah Tercinta",
      title: "Didampingi Para Ayah yang Kami Hormati 👨‍👧‍👦",
      caption: "Berdiri bersama para ayah teladan yang senantiasa membimbing kami dengan penuh keteladanan dan doa restu."
    },
    {
      type: "image",
      url: "images/GMS08562.JPG",
      date: "01 September 2024 • 10:55",
      location: "Pelaminan Akad / Bersama Kedua Pasang Orang Tua",
      title: "Rasa Syukur Bersama Kedua Orang Tua 🤍👨‍👩‍👧‍👦",
      caption: "Kebahagiaan kami takkan terwujud tanpa cinta, pengorbanan, dan doa tiada henti dari kedua pasang orang tua kami."
    },
    {
      type: "image",
      url: "images/GMS08577.JPG",
      date: "01 September 2024 • 10:58",
      location: "Pelaminan Akad / Momen Sungkeman Penuh Haru",
      title: "Sungkeman Haru & Doa Restu Ibu 🥺🤲",
      caption: "Air mata haru membasahi sujud kami, memohon rida dan doa dari ibu tercinta yang surga ada di bawah telapak kakinya."
    },
    {
      type: "image",
      url: "images/ADT07630.JPG",
      date: "01 September 2024 • 10:59",
      location: "Pelaminan Akad / Pelukan Hangat Keluarga",
      title: "Dekapan Penuh Cinta & Wejangan Keluarga 💐",
      caption: "Pelukan hangat dan bisikan doa dari keluarga yang mengalirkan ketenangan serta kekuatan untuk lembaran baru ini."
    },
    {
      type: "image",
      url: "images/GMS08618.JPG",
      date: "01 September 2024 • 11:02",
      location: "Pelaminan Akad / Sungkeman Khidmat kepada Ayah",
      title: "Bakti & Doa dari Ayahanda Tercinta 🕊️",
      caption: "Menunduk penuh hormat memohon doa restu dari ayahanda tercinta, sosok panutan dan pejuang keluarga."
    },
    {
      type: "image",
      url: "images/ADT07714.JPG",
      date: "01 September 2024 • 11:29",
      location: "Pelaminan Akad / Sukacita Keluarga Besar",
      title: "Hangatnya Kebersamaan Seluruh Keluarga 🎊👨‍👩‍👧‍👦",
      caption: "Senyum merekah dan tawa bahagia dari seluruh keluarga besar yang berkumpul memberikan cinta dan doa terbaik."
    },
    {
      type: "image",
      url: "images/ADT07807.JPG",
      date: "01 September 2024 • 11:49",
      location: "Area Luar Gedung / Sesi Santai Pengantin Baru",
      title: "Canda & Tawa Santai Kita Berdua ✌️😊",
      caption: "Melepas sejenak ketegangan dengan tawa renyah berdua, menikmati status baru sebagai sepasang suami istri."
    },
    {
      type: "image",
      url: "images/GMS08665.JPG",
      date: "01 September 2024 • 11:53",
      location: "Taman Rindang / Genggaman Cinta Abadi B&W",
      title: "Genggam Erat Tanganku Selamanya 🖤💍",
      caption: "Di bawah rindangnya pepohonan, ku genggam tanganmu erat sebagai janji untuk selalu melangkah beriringan selamanya."
    },
    {
      type: "image",
      url: "images/GMS08740.JPG",
      date: "01 September 2024 • 12:05",
      location: "Area Terbuka / Bersama Para Bridesmaids Tercinta",
      title: "Dikelilingi Sahabat & Bridesmaids Hebat 💙🌸",
      caption: "Keceriaan Afifah bersama sahabat-sahabat terbaik yang setia menemani dan mewarnai hari istimewa ini."
    },
    {
      type: "image",
      url: "images/ADT07969.JPG",
      date: "01 September 2024 • 13:14",
      location: "Lorong Resepsi / Kirab Kehormatan Orang Tua",
      title: "Langkah Kehormatan Orang Tua Kami 🤍",
      caption: "Langkah penuh wibawa kedua orang tua kami yang mengawali prosesi resepsi dengan doa dan senyuman bangga."
    },
    {
      type: "image",
      url: "images/ADT08061.JPG",
      date: "01 September 2024 • 13:21",
      location: "Pintu Masuk Resepsi / Grand Entrance Penuh Bunga",
      title: "Grand Entrance Bernuansa Biru Elegan 🌸👑",
      caption: "Melangkah bersama memasuki ruangan resepsi dengan taburan bunga dan sambutan hangat para tamu undangan."
    },
    {
      type: "image",
      url: "images/ADT08167.JPG",
      date: "01 September 2024 • 13:30",
      location: "Ruang Resepsi / Tawa & Sukacita Tamu Undangan",
      title: "Keceriaan & Doa Tamu Undangan 🎉🎈",
      caption: "Suasana meriah dan penuh sukacita, disambut senyum ceria para tamu dan anak-anak yang hadir menyemarakkan acara."
    },
    {
      type: "image",
      url: "images/GMS08831.JPG",
      date: "01 September 2024 • 13:35",
      location: "Pelaminan Resepsi / Bersama Kedua Orang Tua",
      title: "Restu Abadi Kedua Orang Tua 🤍👨‍👩‍👦",
      caption: "Berdiri bersama pilar hidup kami, bersyukur atas cinta dan bimbingan orang tua yang tiada tara hingga titik ini."
    },
    {
      type: "image",
      url: "images/GMS08855.JPG",
      date: "01 September 2024 • 13:37",
      location: "Pelaminan Resepsi / Bersama Keluarga Inti",
      title: "Keluarga Tercinta & Rumah Tempat Pulang 🏡💖",
      caption: "Keluarga adalah anugerah terindah tempat kami selalu menemukan rasa aman, cinta, dan dukungan tanpa henti."
    },
    {
      type: "image",
      url: "images/ADT08331.JPG",
      date: "01 September 2024 • 14:18",
      location: "Pelaminan Resepsi / Bersama Bridesmaids",
      title: "Pesona Sang Ratu & Sahabat Setia 💐✨",
      caption: "Afifah tampak begitu menawan dan anggun, disayangi sahabat-sahabat tercinta yang selalu ada dalam setiap fase perjalanan."
    },
    {
      type: "image",
      url: "images/ADT08504.JPG",
      date: "01 September 2024 • 15:34",
      location: "Pelaminan Resepsi / Potret Elegan Berdua",
      title: "Raja & Ratu Sehari Bernuansa Biru 👑💙",
      caption: "Duduk bersanding di pelaminan indah, menatap masa depan dengan senyuman penuh keyakinan dan cinta."
    },
    {
      type: "image",
      url: "images/GMS08977.JPG",
      date: "01 September 2024 • 15:36",
      location: "Pelaminan Resepsi / Panggung Utama",
      title: "Harmoni Cinta di Pelaminan 💍✨",
      caption: "Berdua di singgasana pelaminan, menyatukan dua hati dan dua keluarga dalam ikatan suci yang penuh berkah."
    },
    {
      type: "image",
      url: "images/GMS09013.JPG",
      date: "01 September 2024 • 15:47",
      location: "Pelaminan Resepsi / Sofa Utama",
      title: "Bersanding Bahagia Selamanya 💑",
      caption: "Duduk berdampingan di singgasana cinta, mengawali kisah baru yang akan kita ukir bersama seumur hidup."
    },
    {
      type: "image",
      url: "images/ADT08682.JPG",
      date: "01 September 2024 • 16:46",
      location: "Pelaminan Resepsi / Bersama Sahabat & Kerabat",
      title: "Solidaritas & Kehangatan Kerabat 🎉🤝",
      caption: "Dikelilingi para sahabat dan kerabat hebat yang penuh semangat menyemarakkan hari bahagia kami."
    },
    {
      type: "image",
      url: "images/ADT08785.JPG",
      date: "01 September 2024 • 17:03",
      location: "Area Luar Gedung / Potret Anggun Sang Istri",
      title: "Bidadari Tercantik di Hatiku 🌹👰‍♀️",
      caption: "Senyum manismu yang menenangkan, keanggunan paras dan ketulusan hatimu yang selalu membuatku jatuh cinta setiap hari."
    },
    {
      type: "image",
      url: "images/ADT08866.JPG",
      date: "01 September 2024 • 17:11",
      location: "Area Luar Gedung / Ceria Bersama Sahabat",
      title: "Senyum Lepas & Tawa Bahagia 🌸🥰",
      caption: "Momen penuh tawa riang bersama sahabat tercinta yang selalu memberi warna ceria di hari bahagia ini."
    },
    {
      type: "image",
      url: "images/GMS09080.JPG",
      date: "01 September 2024 • 17:14",
      location: "Area Luar Gedung / Keanggunan Abadi B&W",
      title: "Keanggunan yang Tak Lekang Waktu 🕊️🤍",
      caption: "Dalam setiap tatap dan heningmu terpancar ketulusan yang membuat hidupku semakin bermakna."
    },
    {
      type: "image",
      url: "images/ILV05971.JPG",
      date: "01 September 2024 • Hall Eyang Akung",
      location: "Detail Undangan / Hall Eyang Akung",
      title: "Awal Kisah Abadi Kita 💌🕊️",
      caption: "Setiap detail tertulis dengan cinta, merajut janji suci di Hall Eyang Akung untuk saling mencintai hingga ke jannah."
    }
  ],

  // Surat Cinta / Pesan Khusus (Bisa dibuka melalui tombol surat cinta)
  letter: {
    title: "Surat Kecil Untuk Kekasih Impianku ❤️",
    salutation: "Hai Ayangcuteku,",
    content: `Selamat hari jadi pernikahan kita yang kedua! 💍❤️

Terima kasih sudah berjalan sejauh ini bersamaku. Terima kasih atas setiap pelukan hangat di saat duniaku terasa dingin, setiap tawa yang kau bagikan, dan setiap sabar yang kau beri di kala aku tak sempurna.

Menikahimu adalah keputusan terbaik dan berkah terindah yang selalu ku syukuri dalam hidupku. Aku berdoa semoga rumah tangga kita senantiasa dikelilingi kebahagiaan, kedamaian, sakinah, mawaddah, wa rahmah hingga menua bersama.

Aku mencintaimu, kekasih impianku, lebih dari kata-kata yang bisa kutuliskan di sini.`,
    closing: "Selamanya milikmu,",
    authorName: "Ayangcutemu"
  },

  // Daftar Pesan Cinta Cepat saat mengklik tombol Hati
  loveQuotes: [
    "Kau adalah jawaban dari setiap doa-doa malamku. ❤️",
    "Terima kasih telah menjadi kekasih impian terindah dalam hidupku! 🥰",
    "Bersamamu adalah tempat ternyaman dan teraman di seluruh dunia. 💖",
    "Aku mencintaimu lebih dari kemarin, tapi tak sebanyak hari esok! ✨",
    "Happy Anniversary sayangku! Love you to the moon and back! 🌙💫"
  ]
};

// Export to global window object
window.ANNIVERSARY_CONFIG = ANNIVERSARY_CONFIG;
