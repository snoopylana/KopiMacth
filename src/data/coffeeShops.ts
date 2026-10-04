import { CoffeeShop } from '../types';

export const COFFEE_SHOPS: CoffeeShop[] = [
  {
    id: 'kopi-senja',
    name: 'Kopi Senja',
    tagline: 'Quiet sanctuary with warm oak desks & dedicated study carrels',
    image: '/src/assets/images/coffee_senja_study_1791116299310.jpg',
    rating: 4.8,
    reviewCount: 342,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 28,
    location: 'Bogor Tengah',
    address: 'Jl. Malabar No. 18, Babakan, Bogor Tengah',
    latitude: -6.595,
    longitude: 106.804,
    openingHours: '08:00 – 22:30',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '85 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Quiet',
    seatingArea: 'Indoor',
    capacity: 80,
    meetingRoom: {
      available: true,
      capacity: 6,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp150.000 / 2 hours',
      notes: 'Kedap suara, dilengkapi stop kontak cabang 6 slot dan whiteboard magnetik.'
    },
    activities: {
      study: 5,
      work: 5,
      discussion: 4,
      project: 5,
      relax: 4
    },
    description: 'Coffee shop bernuansa hangat dengan meja kayu oak panjang dan pencahayaan meja warm white yang ramah untuk mata. Sangat dicintai mahasiswa karena suasananya hening, koneksi internet stabil 85 Mbps, dan stop kontak di hampir tiap kursi.',
    whyMatches: {
      study: [
        'Suasana tenang tanpa musik berisik, ideal untuk membaca & menghafal materi',
        'Stop kontak di setiap meja individu dan meja komunal',
        'Wi-Fi 85 Mbps tanpa disconnect, lancar buka e-journal & video kuliah',
        'Pencahayaan warm white tidak bikin mata cepat lelah'
      ],
      work: [
        'Meja kerja lapang dengan kursi ergonomis berketinggian pas',
        'Kopi single origin manual brew bikin konsentrasi terjaga sepanjang hari',
        'Area non-smoking indoor dengan pendingin ruangan sejuk merata',
        'Tersedia printer mandiri di area resepsionis'
      ],
      discussion: [
        'Meja komunal kayu solid bisa menampung 4 hingga 6 orang',
        'Pilihan minuman literan & platter sharing terjangkau',
        'Ruangan berjarak cukup sehingga obrolan tidak terdengar meja sebelah'
      ],
      project: [
        'Meeting room privat kapasitas 6 orang dengan pintu kaca kedap suara',
        'Whiteboard magnetik dan kabel HDMI/TV untuk display presentasi',
        'Banyak stop kontak cabang untuk colokan laptop seluruh anggota tim',
        'Bisa booking slot sebelum jadwal kerja kelompok'
      ],
      relax: [
        'Aroma kopi freshly roasted yang menenangkan jiwa sehabis ujian',
        'Pilihan artisan tea & artisan pastry hangat',
        'Playlist instrumental lofi santai'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Senja Gula Aren', price: 'Rp22.000' },
      { name: 'Cold Brew Citrus Tonic', price: 'Rp28.000' },
      { name: 'Matcha Latte Oatmilk', price: 'Rp32.000' },
      { name: 'Croissant Butter Almond', price: 'Rp25.000' }
    ]
  },
  {
    id: 'ruang-temu-kolektif',
    name: 'Ruang Temu & Kolektif',
    tagline: 'Collaborative hub with private glass meeting suites & screen presentation',
    image: '/src/assets/images/coffee_meeting_room_1791116317908.jpg',
    rating: 4.7,
    reviewCount: 289,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 32,
    location: 'Dramaga / IPB',
    address: 'Jl. Raya Dramaga No. 45, dekat Gerbang Utama IPB',
    latitude: -6.558,
    longitude: 106.726,
    openingHours: '09:00 – 23:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '120 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Moderate',
    seatingArea: 'Indoor',
    capacity: 95,
    meetingRoom: {
      available: true,
      capacity: 10,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp200.000 / 2 hours',
      notes: 'Private room dengan smart TV 43 inch, whiteboard lebar 2 meter, dan AC terpisah.'
    },
    activities: {
      study: 4,
      work: 5,
      discussion: 5,
      project: 5,
      relax: 3
    },
    description: 'Dirancang spesifik untuk mahasiswa yang sedang mengerjakan tugas kelompok, proposal skripsi, maupun pitching organisasi. Memiliki meeting room ber-AC lengkap dengan smart TV dan koneksi gigabit super kencang.',
    whyMatches: {
      study: [
        'Koneksi internet 120 Mbps tercepat di area kampus Dramaga',
        'Banyak stop kontak di dekat setiap meja kubikal',
        'Minuman kopi berkafein tinggi untuk begadang tugas'
      ],
      work: [
        'Kecepatan upload/download tinggi untuk render file dan submit tugas',
        'Meja berketinggian standar dengan colokan ganda',
        'Staf ramah dan bersahabat untuk kerja seharian'
      ],
      discussion: [
        'Suasana dinamis dan bebas bertukar ide tanpa takut dilarang berbicara',
        'Meja panjang format modular yang gampang disatukan',
        'Snack platter kentang & nugget porsi ramai-ramai'
      ],
      project: [
        'Ruang meeting berkapasitas hingga 10 orang dengan smart screen 43"',
        'Whiteboard besar lengkap dengan spidol & penghapus',
        'Kabel rol extension cord gratis dipinjamkan',
        'Sangat cocok untuk presentasi gladi resik dan bedah bab skripsi'
      ],
      relax: [
        'Tempat hangout seru bareng teman satu himpunan',
        'Pilihan iced mocktail segar pelepas penat'
      ]
    },
    popularMenu: [
      { name: 'Americano Double Shot', price: 'Rp24.000' },
      { name: 'Kolektif Creamy Latte', price: 'Rp26.000' },
      { name: 'Potato Platter with Garlic Mayo', price: 'Rp28.000' },
      { name: 'Cascara Berry Fizz', price: 'Rp25.000' }
    ]
  },
  {
    id: 'kopi-taman-kebun',
    name: 'Kopi Taman & Kebun',
    tagline: 'Lush botanical sanctuary for recharging, reading & unwinding',
    image: '/src/assets/images/coffee_garden_relax_1791116331978.jpg',
    rating: 4.6,
    reviewCount: 410,
    priceRange: 'Under 20K',
    priceLevel: '$',
    priceCategory: 'under20k',
    averagePrice: 18,
    location: 'Bogor Timur',
    address: 'Jl. Pajajaran Indah No. 12, Baranangsiang',
    latitude: -6.608,
    longitude: 106.816,
    openingHours: '07:30 – 22:00',
    facilities: ['Wi-Fi', 'Parking', 'Toilet', 'Outdoor Area', 'Prayer Room'],
    wifiSpeed: '35 Mbps',
    powerOutletCoverage: 'Limited (counter only)',
    atmosphere: 'Lively',
    seatingArea: 'Outdoor',
    capacity: 75,
    meetingRoom: {
      available: false,
      capacity: 0,
      type: null,
      notes: 'Fokus area terbuka hijau tanpa private meeting room.'
    },
    activities: {
      study: 3,
      work: 3,
      discussion: 4,
      project: 2,
      relax: 5
    },
    description: 'Halaman kebun rimbun bernuansa tropis dengan kanopi pepohonan rindang. Pilihan sempurna untuk melepas penat setelah minggu ujian, nongkrong santai sore, dan ngobrol santai bersama sahabat.',
    whyMatches: {
      study: [
        'Udara segar alami untuk membaca buku santai atau novel',
        'Harga sangat ramah di kantong mahasiswa (< Rp20K)'
      ],
      work: [
        'Suasana santai untuk cari inspirasi menulis atau brainstorming ide kreatif',
        'Tempat outdoor dengan semilir angin sepoi-sepoi'
      ],
      discussion: [
        'Bebas tertawa dan ngobrol seru di area outdoor tanpa mengganggu orang lain',
        'Porsi makanan hemat & minuman es kopi susu terjangkau'
      ],
      project: [
        'Cocok untuk obrolan awal ide proyek yang butuh suasana non-formal'
      ],
      relax: [
        'Taman hijau asri penuh tanaman hias dan pot gantung',
        'Kursi santai rotan dengan pencahayaan matahari sore (golden hour)',
        'Menu signature es kopi gula aren dan roti bakar keju lezat',
        'Harga sangat terjangkau di bawah 20 ribu'
      ]
    },
    popularMenu: [
      { name: 'Es Kopi Susu Kebun', price: 'Rp18.000' },
      { name: 'Roti Bakar Cokelat Keju', price: 'Rp16.000' },
      { name: 'Iced Lemon Mint Tea', price: 'Rp15.000' },
      { name: 'Pisang Goreng Wijen Madu', price: 'Rp17.000' }
    ]
  },
  {
    id: 'titik-fokus-lab',
    name: 'Titik Fokus Cafe & Lab',
    tagline: 'Quiet individual study cubicles with high-speed internet & desk lamps',
    image: '/src/assets/images/hero_coffee_study_1791116283465.jpg',
    rating: 4.9,
    reviewCount: 520,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 30,
    location: 'Bogor Tengah',
    address: 'Jl. Suryakencana No. 102, Bogor Tengah',
    latitude: -6.602,
    longitude: 106.801,
    openingHours: '08:00 – 24:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '100 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Quiet',
    seatingArea: 'Indoor',
    capacity: 110,
    meetingRoom: {
      available: true,
      capacity: 8,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp180.000 / 2 hours',
      notes: 'Ruang kaca peredam suara, display monitor LG 32 inci, papan kaca magnet.'
    },
    activities: {
      study: 5,
      work: 5,
      discussion: 3,
      project: 4,
      relax: 3
    },
    description: 'Surga bagi mahasiswa yang butuh fokus mendalam (deep work) dan belajar ujian. Memiliki zona "Silent Study Zone" dengan meja bersekat, lampu meja individu, dan colokan ganda di tiap kursi.',
    whyMatches: {
      study: [
        'Aturan zona tenang (Silent Zone) dilarang berisik dan terima telepon',
        'Meja bersekat individual dengan lampu baca fleksibel',
        '2 colokan listrik di setiap meja belajar',
        'Buka hingga tengah malam (jam 24:00) untuk sprint tugas'
      ],
      work: [
        'Koneksi Wi-Fi 100 Mbps berkecepatan simetris',
        'Kursi dengan sandaran punggung ergonomis untuk duduk berjam-jam',
        'Tersedia kopi pour over manual brew dengan biji kopi pilihan'
      ],
      discussion: [
        'Zona diskusi terpisah di lantai 2 agar tidak mengganggu lantai 1',
        'Tersedia meja bundar untuk 4 orang'
      ],
      project: [
        'Ruang meeting privat kedap suara kapasitas 8 orang',
        'Monitor display 32" untuk cek slide deck canva / figma',
        'Whiteboard kaca bersih'
      ],
      relax: [
        'Spot pojok sofa nyaman untuk rehat sejenak sambil minum teh panas'
      ]
    },
    popularMenu: [
      { name: 'V60 Single Origin Kerinci', price: 'Rp28.000' },
      { name: 'Fokus Iced Latte Gula Kelapa', price: 'Rp25.000' },
      { name: 'Earl Grey Milk Tea', price: 'Rp26.000' },
      { name: 'Choco Lava Cake', price: 'Rp24.000' }
    ]
  },
  {
    id: 'kopi-tepi-sawah',
    name: 'Kopi Tepi Kampus',
    tagline: 'Student budget favorite with open air breeze & great camaraderie',
    image: '/src/assets/images/coffee_garden_relax_1791116331978.jpg',
    rating: 4.5,
    reviewCount: 310,
    priceRange: 'Under 20K',
    priceLevel: '$',
    priceCategory: 'under20k',
    averagePrice: 17,
    location: 'Dramaga / IPB',
    address: 'Jl. Babakan Tengah No. 5, Dramaga, Bogor',
    latitude: -6.554,
    longitude: 106.731,
    openingHours: '10:00 – 23:30',
    facilities: ['Wi-Fi', 'Power Outlet', 'Parking', 'Toilet', 'Outdoor Area', 'Prayer Room'],
    wifiSpeed: '45 Mbps',
    powerOutletCoverage: '70% tables',
    atmosphere: 'Moderate',
    seatingArea: 'Both',
    capacity: 65,
    meetingRoom: {
      available: false,
      capacity: 0,
      type: null,
      notes: 'Tidak tersedia ruang meeting privat.'
    },
    activities: {
      study: 4,
      work: 4,
      discussion: 4,
      project: 3,
      relax: 5
    },
    description: 'Sangat populer di kalangan mahasiswa IPB karena harga menunya yang sangat bersahabat (mulai Rp15 ribuan) dengan porsi nasi mangkok kenyang dan colokan yang cukup banyak di tiap tiang gazebo.',
    whyMatches: {
      study: [
        'Harga sangat hemat, bisa pesan kopi dan snack tanpa bikin dompet tipis',
        'Suasana sore hari teduh dan rileks'
      ],
      work: [
        'Meja kayu kokoh dengan colokan di pilar-pilar utama',
        'Wi-Fi 45 Mbps cukup untuk browsing materi kuliah dan YouTube'
      ],
      discussion: [
        'Tempat favorit mahasiswa berkumpul seusai kelas praktikum',
        'Makanan porsi kenyang seperti Ricebowl Ayam Sambal Matah'
      ],
      project: [
        'Area semi-outdoor luas untuk tim yang santai'
      ],
      relax: [
        'Pemandangan senja terbuka dengan angin sepoi-sepoi',
        'Tempat asik untuk ngobrol ngalor-ngidul bareng teman'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Mahasiswa', price: 'Rp15.000' },
      { name: 'Ricebowl Ayam Sambal Matah', price: 'Rp22.000' },
      { name: 'Tahu Cabe Garam Gurih', price: 'Rp14.000' },
      { name: 'Es Cokelat Klasik', price: 'Rp16.000' }
    ]
  },
  {
    id: 'studio-kopi-pajajaran',
    name: 'Studio Kopi & Karya',
    tagline: 'Aesthetic modern workspace with semi-private discussion pods',
    image: '/src/assets/images/coffee_senja_study_1791116299310.jpg',
    rating: 4.7,
    reviewCount: 380,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 34,
    location: 'Pajajaran',
    address: 'Jl. Pajajaran No. 88, Bantarjati, Bogor Utara',
    latitude: -6.582,
    longitude: 106.809,
    openingHours: '08:30 – 23:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '90 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Moderate',
    seatingArea: 'Indoor',
    capacity: 90,
    meetingRoom: {
      available: true,
      capacity: 12,
      type: 'Semi-Private',
      hasWhiteboard: true,
      hasScreen: false,
      minBookingSpend: 'Rp150.000 total order',
      notes: 'Area semi-private dengan partisi kayu akustik, muat 10-12 orang untuk rapat organisasi.'
    },
    activities: {
      study: 4,
      work: 5,
      discussion: 5,
      project: 5,
      relax: 4
    },
    description: 'Coffee shop berkonsep urban studio dengan interior industrial modern. Menghadirkan pod diskusi semi-privat yang sangat digemari panitia kampus dan kelompok mahasiswa tingkat akhir.',
    whyMatches: {
      study: [
        'Desain meja lapang memungkinkan buka laptop sekaligus buku catatan tebal',
        'Penerangan indoor bersih dan AC dingin stabil'
      ],
      work: [
        'Stop kontak di tiap meja dan koneksi Wi-Fi 90 Mbps',
        'Kopi espresso based berkualitas dengan crema tebal'
      ],
      discussion: [
        'Ruang semi-private muat hingga 12 orang untuk rapat komite dan organisasi',
        'Tatanan meja modular mudah diatur sesuai jumlah orang'
      ],
      project: [
        'Kapasitas ruang kelompok hingga 12 orang',
        'Tersedia whiteboard portable yang bisa dipindah ke meja tim',
        'Banyak stop kontak di bawah bangku panjang'
      ],
      relax: [
        'Estetika interior industrial minimalis yang fotogenik',
        'Pastry freshly baked setiap pagi'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Pandan Wangi', price: 'Rp26.000' },
      { name: 'Caramel Macchiato', price: 'Rp32.000' },
      { name: 'Beef Teriyaki Rice', price: 'Rp35.000' },
      { name: 'Cinnamon Roll Glaze', price: 'Rp22.000' }
    ]
  },
  {
    id: 'ruang-ide-creative',
    name: 'Ruang Ide Creative Space',
    tagline: 'High-energy hub for startup project sprints, workshops & group brainstorming',
    image: '/src/assets/images/coffee_meeting_room_1791116317908.jpg',
    rating: 4.8,
    reviewCount: 460,
    priceRange: '40K–60K',
    priceLevel: '$$$',
    priceCategory: '40k-60k',
    averagePrice: 45,
    location: 'Bogor Tengah',
    address: 'Jl. Jalak Harupat No. 7, Sempur, Bogor Tengah',
    latitude: -6.591,
    longitude: 106.799,
    openingHours: '08:00 – 22:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '150 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Moderate',
    seatingArea: 'Indoor',
    capacity: 120,
    meetingRoom: {
      available: true,
      capacity: 16,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp300.000 / 2 hours',
      notes: 'Ruang rapat VIP dengan proyektor resolusi tinggi, whiteboard 3 meter, dan mic wireless.'
    },
    activities: {
      study: 4,
      work: 5,
      discussion: 5,
      project: 5,
      relax: 3
    },
    description: 'Pusat kolaborasi modern yang kerap jadi markas tim lomba business plan, hackathon, dan proyek akhir. Dilengkapi private workshop room berkapasitas besar dan internet serat optik 150 Mbps.',
    whyMatches: {
      study: [
        'Fasilitas premium dengan meja luas dan koneksi ultra-kencang',
        'Area lounge nyaman di lantai mezanin'
      ],
      work: [
        'Koneksi Wi-Fi 150 Mbps, super cepat untuk upload aset desain & code repo',
        'Kursi kantor dengan lumbar support',
        'Pilihan menu specialty pour over & single origin beans'
      ],
      discussion: [
        'Sangat kondusif untuk diskusi strategis tanpa gangguan suara kendaraan',
        'Peralatan presentasi lengkap dan siap pakai'
      ],
      project: [
        'Ruang meeting terbesar di kelasnya (kapasitas 16 orang)',
        'Lengkap dengan Smart Proyektor, pointer, dan Whiteboard raksasa',
        'Colokan listrik di tengah meja konferensi untuk semua anggota',
        'Paket booking meeting sudah termasuk kopi dan camilan tim'
      ],
      relax: [
        'Dekat dengan taman Sempur untuk jalan santai seusai sprint proyek'
      ]
    },
    popularMenu: [
      { name: 'Specialty Gesha Pour Over', price: 'Rp42.000' },
      { name: 'Dirty Latte Cold Brew', price: 'Rp38.000' },
      { name: 'Truffle Fries with Dip', price: 'Rp32.000' },
      { name: 'Smoked Beef Panini', price: 'Rp44.000' }
    ]
  },
  {
    id: 'kopi-ruma-hening',
    name: 'Ruma Hening Coffee',
    tagline: 'Intimate library cafe with zero distractions & acoustic insulation',
    image: '/src/assets/images/coffee_senja_study_1791116299310.jpg',
    rating: 4.9,
    reviewCount: 275,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 26,
    location: 'Sukasari',
    address: 'Jl. Sukasari I No. 14, Sukasari, Bogor Timur',
    latitude: -6.619,
    longitude: 106.812,
    openingHours: '09:00 – 21:30',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Toilet', 'Prayer Room'],
    wifiSpeed: '70 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Quiet',
    seatingArea: 'Indoor',
    capacity: 40,
    meetingRoom: {
      available: false,
      capacity: 0,
      type: null,
      notes: 'Seluruh area didedikasikan sebagai zona tenang tanpa ruang meeting.'
    },
    activities: {
      study: 5,
      work: 5,
      discussion: 2,
      project: 2,
      relax: 5
    },
    description: 'Cafe berkonsep perpustakaan kecil tersembunyi (hidden gem) yang mengutamakan ketenangan mutlak. Dinding dilapisi kayu dan panel peredam suara, membuat belajar terasa seperti di ruang baca pribadi.',
    whyMatches: {
      study: [
        'Tingkat ketenangan tertinggi (suara obrolan dibatasi bisikan pelan)',
        'Koleksi ratusan buku referensi dan literatur yang bisa dibaca gratis',
        'Colokan listrik di setiap meja sudut baca',
        'Pencahayaan warm konsisten yang tidak menyilaukan layar laptop'
      ],
      work: [
        'Sangat cocok untuk pekerjaan yang menuntut konsentrasi tinggi tanpa interupsi',
        'Koneksi Wi-Fi stabil dan tidak pernah overload'
      ],
      discussion: [
        'Tidak disarankan untuk diskusi kelompok karena mengutamakan suasana hening'
      ],
      project: [
        'Bagus untuk penyusunan laporan individu sebelum digabung ke kelompok'
      ],
      relax: [
        'Suasana slow living menenangkan, wangi seduhan kopi segar dan aroma kertas buku',
        'Pilihan teh chamomile dan camilan kue buatan rumahan'
      ]
    },
    popularMenu: [
      { name: 'Seduh Manual Flores Bajawa', price: 'Rp25.000' },
      { name: 'Kopi Susu Hening Brown Sugar', price: 'Rp23.000' },
      { name: 'Chamomile Mint Relaxation Tea', price: 'Rp22.000' },
      { name: 'Warm Banana Bread', price: 'Rp20.000' }
    ]
  },
  {
    id: 'kopi-pohon-rindang',
    name: 'Kopi Pohon Rindang',
    tagline: 'Cozy garden patio with spacious group tables & gentle chill music',
    image: '/src/assets/images/coffee_garden_relax_1791116331978.jpg',
    rating: 4.6,
    reviewCount: 360,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 27,
    location: 'Bogor Barat',
    address: 'Jl. Brigjen Saptadji Hadiprawira No. 29, Semplak',
    latitude: -6.567,
    longitude: 106.764,
    openingHours: '10:00 – 23:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'Parking', 'Toilet', 'Outdoor Area', 'Prayer Room'],
    wifiSpeed: '60 Mbps',
    powerOutletCoverage: '70% tables',
    atmosphere: 'Moderate',
    seatingArea: 'Both',
    capacity: 85,
    meetingRoom: {
      available: true,
      capacity: 8,
      type: 'Semi-Private',
      hasWhiteboard: true,
      hasScreen: false,
      minBookingSpend: 'Rp120.000 total order',
      notes: 'Gazebo bambu tertutup dengan kipas angin dan stop kontak.'
    },
    activities: {
      study: 3,
      work: 4,
      discussion: 5,
      project: 4,
      relax: 5
    },
    description: 'Perpaduan area indoor ber-AC dan halaman rumput terbuka di bawah pohon beringin tua yang asri. Pilihan favorit mahasiswa untuk berdiskusi santai di sore hari sambil ngemil dimsum dan tempe mendoan.',
    whyMatches: {
      study: [
        'Area indoor ber-AC cukup tenang untuk belajar siang hari',
        'Wi-Fi 60 Mbps lancar untuk download materi kuliah'
      ],
      work: [
        'Pilihan duduk di area outdoor semi-terbuka saat jenuh di kamar'
      ],
      discussion: [
        'Gazebo semi-private kapasitas 8 orang dengan suasana santai',
        'Bebas bertukar pendapat tanpa khawatir ditegur',
        'Menu sharing snack mendoan hangat & cireng bumbu rujak'
      ],
      project: [
        'Tersedia gazebo semi-privat dengan colokan di setiap tiang',
        'Tempat luas untuk meletakkan kertas kerja dan laptop bersama'
      ],
      relax: [
        'Angin sepoi-sepoi di bawah pohon rindang dengan lampu gantung hangat malam hari',
        'Pilihan es kopi susu gula aren legit dan mocktail buah segar'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Rindang Senja', price: 'Rp22.000' },
      { name: 'Tempe Mendoan Jumbo Sambal Kecap', price: 'Rp18.000' },
      { name: 'Iced Peach Blossom Tea', price: 'Rp24.000' },
      { name: 'Dimsum Ayam Jamur (4 pcs)', price: 'Rp20.000' }
    ]
  },
  {
    id: 'warkop-modern-dramaga',
    name: 'Warkop Modern Dramaga',
    tagline: 'Ultra-budget friendly with 24/7 snacks, charging sockets & fast Wi-Fi',
    image: '/src/assets/images/hero_coffee_study_1791116283465.jpg',
    rating: 4.4,
    reviewCount: 490,
    priceRange: 'Under 20K',
    priceLevel: '$',
    priceCategory: 'under20k',
    averagePrice: 15,
    location: 'Dramaga / IPB',
    address: 'Jl. Babakan Raya No. 11, Dramaga (Bara IPB)',
    latitude: -6.551,
    longitude: 106.729,
    openingHours: '24 Jam Penuh',
    facilities: ['Wi-Fi', 'Power Outlet', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '50 Mbps',
    powerOutletCoverage: '70% tables',
    atmosphere: 'Lively',
    seatingArea: 'Both',
    capacity: 70,
    meetingRoom: {
      available: false,
      capacity: 0,
      type: null,
      notes: 'Konsep warkop terbuka tanpa ruang meeting tertutup.'
    },
    activities: {
      study: 3,
      work: 4,
      discussion: 4,
      project: 3,
      relax: 4
    },
    description: 'Warkop naik kelas dengan sentuhan cafe modern tepat di jantung pemukiman mahasiswa Dramaga. Buka 24 jam dengan internet 50 Mbps dan colokan di banyak sisi, penyelamat deadline malam sebelum ujian.',
    whyMatches: {
      study: [
        'Buka 24 jam nonstop untuk mahasiswa yang perlu belajar dini hari',
        'Harga sangat murah di bawah 20 ribu rupiah',
        'Kopi tubruk dan kopi sachet premium tersedia kapan saja'
      ],
      work: [
        'Tersedia stop kontak di sepanjang dinding panjang',
        'Wi-Fi 50 Mbps tanpa sandi rumit'
      ],
      discussion: [
        'Tempat kumpul bebas santai tanpa beban reservasi',
        'Indomie rebus telur kornet dan roti bakar siap menemani obrolan'
      ],
      project: [
        'Bagus untuk konsolidasi tugas kilat di malam hari'
      ],
      relax: [
        'Tempat melepas penat bersama kawan seangkatan tengah malam'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Warkop Fresh', price: 'Rp14.000' },
      { name: 'Indomie Kuah Spesial Telur Kornet', price: 'Rp16.000' },
      { name: 'Roti Bakar Cokelat Keju Susu', price: 'Rp13.000' },
      { name: 'Es Teh Manis Jumbo', price: 'Rp7.000' }
    ]
  },
  {
    id: 'loft-coffee-roasters',
    name: 'Loft Coffee Roasters',
    tagline: 'High-end specialty cafe with premium sound acoustic & private boardroom',
    image: '/src/assets/images/coffee_meeting_room_1791116317908.jpg',
    rating: 4.8,
    reviewCount: 315,
    priceRange: 'Above 60K',
    priceLevel: '$$$',
    priceCategory: 'above60k',
    averagePrice: 65,
    location: 'Bogor Timur',
    address: 'Jl. Bina Marga No. 1, Baranangsiang, Bogor Timur',
    latitude: -6.603,
    longitude: 106.814,
    openingHours: '08:00 – 22:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '120 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Quiet',
    seatingArea: 'Indoor',
    capacity: 85,
    meetingRoom: {
      available: true,
      capacity: 8,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp400.000 / 2 hours (include drinks)',
      notes: 'Executive board room ber-AC dengan acoustic panel, TV Samsung 50", dan conference speaker.'
    },
    activities: {
      study: 4,
      work: 5,
      discussion: 4,
      project: 5,
      relax: 5
    },
    description: 'Specialty coffee shop premium dengan roastery mandiri di lantai satu dan co-working lounge mewah di lantai dua. Dilengkapi private board room lengkap dengan conference screen untuk rapat penting dan presentasi proposal prestisius.',
    whyMatches: {
      study: [
        'Atmosfer sangat eksklusif dan tenang, minim distraksi',
        'Kualitas kopi kelas dunia untuk menjaga kewaspadaan'
      ],
      work: [
        'Koneksi internet serat optik 120 Mbps terisolasi',
        'Meja marmer dan kayu walnut lebar dengan stop kontak tersembunyi'
      ],
      discussion: [
        'Sangat representatif untuk bertemu dosen pembimbing atau mitra lomba eksternal'
      ],
      project: [
        'Executive meeting room dengan TV 50" 4K untuk presentasi pitch deck',
        'Whiteboard magnetik dan conference speakerphone',
        'Pelayanan barista profesional langsung ke dalam ruang rapat'
      ],
      relax: [
        'Pengalaman menikmati biji kopi specialty peraih penghargaan internasional',
        'Pencahayaan natural mewah dari jendela kaca tinggi'
      ]
    },
    popularMenu: [
      { name: 'Signature Filter Panama Geisha', price: 'Rp68.000' },
      { name: 'Flat White with Fresh Barista Milk', price: 'Rp42.000' },
      { name: 'Smoked Salmon Croissant', price: 'Rp55.000' },
      { name: 'Tiramisu Klasik Mascarpone', price: 'Rp48.000' }
    ]
  },
  {
    id: 'kanopi-kopi-kreatif',
    name: 'Kanopi Kopi & Komunitas',
    tagline: 'Vibrant student meeting ground with outdoor amphitheater & big table clusters',
    image: '/src/assets/images/hero_coffee_study_1791116283465.jpg',
    rating: 4.6,
    reviewCount: 395,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 28,
    location: 'Bogor Tengah',
    address: 'Jl. Bangbarung Raya No. 42, Bantarjati',
    latitude: -6.578,
    longitude: 106.811,
    openingHours: '09:00 – 23:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Outdoor Area', 'Prayer Room'],
    wifiSpeed: '75 Mbps',
    powerOutletCoverage: '70% tables',
    atmosphere: 'Lively',
    seatingArea: 'Both',
    capacity: 105,
    meetingRoom: {
      available: true,
      capacity: 14,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp250.000 / 2 hours',
      notes: 'Ruang serbaguna komunitas dengan whiteboard, proyektor, dan AC ganda.'
    },
    activities: {
      study: 3,
      work: 4,
      discussion: 5,
      project: 5,
      relax: 4
    },
    description: 'Wadah berkumpulnya berbagai komunitas kampus dan organisasi mahasiswa. Memiliki meja-meja komunal raksasa serta ruang rapat komunitas yang fleksibel untuk diskusi proker dan koordinasi acara.',
    whyMatches: {
      study: [
        'Lantai 2 indoor ber-AC ramah untuk belajar mandiri di pagi hari'
      ],
      work: [
        'Wi-Fi 75 Mbps dan banyak stop kontak di dinding bata ekspos'
      ],
      discussion: [
        'Suasana sangat hidup dan ramah diskusi tanpa takut mengganggu orang lain',
        'Meja komunal panjang muat untuk 8 hingga 12 orang sekaligus'
      ],
      project: [
        'Ruang rapat komunitas kapasitas 14 orang dengan fasilitas proyektor',
        'Stop kontak melimpah untuk cas bareng beberapa laptop sekaligus',
        'Bisa booking ruang untuk workshop kecil atau rapat panitia'
      ],
      relax: [
        'Amphitheater outdoor untuk nongkrong malam sambil mendengarkan musik akustik'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Kanopi Gula Aren', price: 'Rp20.000' },
      { name: 'Cireng Krispi Bumbu Rujak', price: 'Rp18.000' },
      { name: 'Spaghetti Aglio Olio Tuna', price: 'Rp32.000' },
      { name: 'Iced Lychee Yakult', price: 'Rp22.000' }
    ]
  },
  {
    id: 'selasar-kopi-kampus',
    name: 'Selasar Kopi Kampus',
    tagline: 'Quiet veranda coffee corner right across university library',
    image: '/src/assets/images/coffee_senja_study_1791116299310.jpg',
    rating: 4.7,
    reviewCount: 330,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 24,
    location: 'Dramaga / IPB',
    address: 'Jl. Babakan Lio No. 8, Dramaga, Bogor',
    latitude: -6.559,
    longitude: 106.723,
    openingHours: '08:00 – 22:00',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Prayer Room'],
    wifiSpeed: '80 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Quiet',
    seatingArea: 'Indoor',
    capacity: 55,
    meetingRoom: {
      available: true,
      capacity: 6,
      type: 'Semi-Private',
      hasWhiteboard: true,
      hasScreen: false,
      minBookingSpend: 'Rp100.000 total order',
      notes: 'Bilik diskusi tertutup kaca separuh dengan whiteboard portabel.'
    },
    activities: {
      study: 5,
      work: 5,
      discussion: 4,
      project: 4,
      relax: 4
    },
    description: 'Terletak tepat di seberang area kampus, Selasar Kopi adalah tempat pelarian favorit mahasiswa yang ingin mengerjakan tugas dengan suasana tenang namun tetap ditemani seduhan kopi segar.',
    whyMatches: {
      study: [
        'Suasana tenang dan kondusif seperti perpanjangan perpustakaan kampus',
        'Meja kayu ergonomis dengan colokan listrik di setiap meja',
        'Wi-Fi 80 Mbps lancar untuk riset jurnal dan literatur online'
      ],
      work: [
        'Kopi robusta-arabika blend yang ramah lambung untuk teman kerja berjam-jam',
        'Pencahayaan terang merata dan temperatur AC stabil'
      ],
      discussion: [
        'Bilik semi-private untuk diskusi 4-6 orang'
      ],
      project: [
        'Tersedia whiteboard portabel untuk menulis alur dan pembagian tugas tim'
      ],
      relax: [
        'Teras depan berhias tanaman hijau untuk break santai sejenak'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Selasar Pandan', price: 'Rp21.000' },
      { name: 'V60 Gayo Arabica', price: 'Rp24.000' },
      { name: 'Donat Kampung Gula Halus (2 pcs)', price: 'Rp12.000' },
      { name: 'Matcha Espresso Fusion', price: 'Rp28.000' }
    ]
  },
  {
    id: 'teras-senja-co',
    name: 'Teras Senja Co-Living Cafe',
    tagline: 'Spacious multi-zone cafe with dedicated silent room, open garden & private suites',
    image: '/src/assets/images/coffee_garden_relax_1791116331978.jpg',
    rating: 4.8,
    reviewCount: 440,
    priceRange: '20K–40K',
    priceLevel: '$$',
    priceCategory: '20k-40k',
    averagePrice: 32,
    location: 'Pajajaran',
    address: 'Jl. Pajajaran Indah V No. 19, Baranangsiang',
    latitude: -6.611,
    longitude: 106.818,
    openingHours: '08:30 – 23:30',
    facilities: ['Wi-Fi', 'Power Outlet', 'AC', 'Parking', 'Toilet', 'Outdoor Area', 'Prayer Room'],
    wifiSpeed: '100 Mbps',
    powerOutletCoverage: 'Almost every table',
    atmosphere: 'Moderate',
    seatingArea: 'Both',
    capacity: 130,
    meetingRoom: {
      available: true,
      capacity: 10,
      type: 'Private',
      hasWhiteboard: true,
      hasScreen: true,
      minBookingSpend: 'Rp200.000 / 2 hours',
      notes: 'Meeting room ber-AC dengan TV 43 inch, meja konferensi kayu jati, dan stop kontak di lantai.'
    },
    activities: {
      study: 5,
      work: 5,
      discussion: 5,
      project: 5,
      relax: 5
    },
    description: 'Cafe berkonsep multi-zona dengan luas lebih dari 500m². Memiliki zona hening khusus belajar, taman terbuka untuk bersantai, serta ruang meeting privat kedap suara untuk kolaborasi tim.',
    whyMatches: {
      study: [
        'Ruang indoor hening khusus "Quiet Zone" tanpa musik untuk konsentrasi mutlak',
        'Stop kontak di tiap meja dan pencahayaan membaca optimal'
      ],
      work: [
        'Koneksi internet serat optik 100 Mbps berkecepatan simetris',
        'Kursi dengan bantalan empuk dan meja kokoh'
      ],
      discussion: [
        'Zona outdoor dan semi-outdoor luas untuk diskusi tanpa takut ditegur',
        'Pilihan menu makanan berat lezat dari nasi goreng hingga pasta'
      ],
      project: [
        'Meeting room privat kapasitas 10 orang dengan TV 43" dan kabel HDMI',
        'Whiteboard kaca magnetik dan colokan cabang untuk laptop tim'
      ],
      relax: [
        'Halaman taman belakang yang sejuk dengan gemericik air mancur',
        'Spot sunset teras senja yang sangat estetik untuk melepas stres'
      ]
    },
    popularMenu: [
      { name: 'Kopi Susu Teras Aren Signature', price: 'Rp24.000' },
      { name: 'Nasi Goreng Kecombrang Spesial', price: 'Rp36.000' },
      { name: 'Iced Cascara Lychee Sparkle', price: 'Rp26.000' },
      { name: 'Churros with Belgian Dark Chocolate', price: 'Rp28.000' }
    ]
  }
];

export const ACTIVITIES_CONFIG: {
  id: import('../types').ActivityType;
  label: string;
  emoji: string;
  shortDesc: string;
  longDesc: string;
  idealFor: string;
  tags: string[];
}[] = [
  {
    id: 'study',
    label: 'Study',
    emoji: '📚',
    shortDesc: 'Tempat tenang, colokan melimpah, Wi-Fi kencang',
    longDesc: 'Fokus belajar mandiri, membaca materi ujian, atau membedah jurnal ilmiah dalam suasana hening tanpa distraksi.',
    idealFor: 'Persiapan UTS/UAS, review materi skripsi, membaca buku',
    tags: ['Quiet Zone', 'High Wi-Fi', 'Power Outlet']
  },
  {
    id: 'work',
    label: 'Work',
    emoji: '💻',
    shortDesc: 'Meja kerja luas, kursi ergonomis, kopi berkafein',
    longDesc: 'Produktif mengerjakan tugas individu, koding, desain, atau remote freelance dengan kenyamanan berjam-jam.',
    idealFor: 'Nugas individu, remote work, drafting artikel & koding',
    tags: ['Ergonomic Seats', '100 Mbps Wi-Fi', 'AC Dingin']
  },
  {
    id: 'discussion',
    label: 'Discussion',
    emoji: '👥',
    shortDesc: 'Meja komunal, suara sedang, bebas bertukar pikiran',
    longDesc: 'Diskusi kelompok yang interaktif tanpa canggung ditegur, dengan meja besar dan camilan sharing nikmat.',
    idealFor: 'Diskusi tugas kuliah, rapat organisasi kampus, brainstorming',
    tags: ['Meja Komunal', 'Moderate Noise', 'Sharing Snacks']
  },
  {
    id: 'project',
    label: 'Project',
    emoji: '🚀',
    shortDesc: 'Meeting room privat, whiteboard, colokan barengan',
    longDesc: 'Kerja kelompok intensif, presentasi slide deck tim, atau workshop kecil dengan fasilitas ruangan privat.',
    idealFor: 'Tugas kelompok besar, simulasi presentasi, sprint proyek',
    tags: ['Private Room', 'Whiteboard / TV', 'Extension Cords']
  },
  {
    id: 'relax',
    label: 'Relax',
    emoji: '🌿',
    shortDesc: 'Suasana asri, sofa empuk, kopi nikmat & santai',
    longDesc: 'Melepas penat sehabis minggu praktikum yang padat, ngobrol ringan bersama teman, atau sekadar chill sore hari.',
    idealFor: 'Refreshing akhir pekan, hangout teman, slow living sore',
    tags: ['Green Patio', 'Chill Playlist', 'Dessert & Mocktail']
  }
];

export const LOCATIONS_LIST = [
  'All Locations',
  'Bogor Tengah',
  'Dramaga / IPB',
  'Bogor Timur',
  'Pajajaran',
  'Sukasari',
  'Bogor Barat'
];
