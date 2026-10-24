import type { Translations } from './types';

export const translations: Record<'en' | 'id' | 'jp', Translations> = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Elang Argawana',
      role: 'Software Development',
      tagline: 'Building thoughtful digital experiences through clean interfaces and practical engineering.',
      description:
        "I'm a web and mobile developer based in Semarang, Indonesia, working across frontend interfaces, backend systems, and API integrations.",
      cta_work: 'Selected Work',
      cta_contact: 'Get in touch',
      location: 'Semarang, Central Java, Indonesia',
      available: 'Available for new projects',
    },
    specialty: {
      heading: 'What I Do',
      subheading: 'Services and capabilities across the software development lifecycle.',
      services: [
        {
          title: 'Frontend Development',
          description: 'Crafting responsive, accessible, and performant user interfaces using modern frameworks. From pixel-perfect layouts to smooth interactions.',
        },
        {
          title: 'Fullstack Development',
          description: 'End-to-end web application development — from database design and backend APIs to the user-facing interface. Reliable, maintainable systems.',
        },
        {
          title: 'Mobile Development',
          description: 'Cross-platform mobile applications using Flutter and Dart. Building practical apps that work smoothly on Android and iOS.',
        },
        {
          title: 'API Integration',
          description: 'Connecting services through RESTful APIs. Experienced in building and consuming APIs with Laravel, FastAPI, and Node.js.',
        },
      ],
    },
    about: {
      heading: 'About',
      photo_alt: 'Profile photo placeholder — replace with your actual photo',
      paragraphs: [
        "I'm Elang — a web and mobile developer with a background in Informatics Engineering from Semarang State Polytechnic. I build practical digital products: applications that are usable, maintainable, and honest about what they do.",
        "My work spans frontend interfaces, backend APIs, and mobile applications. I care about translating requirements into clear, functional experiences — and about understanding the engineering that makes that possible.",
        "I've worked across early-stage freelance projects, professional agency environments, and campus organizations. Each context has pushed me to be more structured, more communicative, and more deliberate in how I approach software development.",
        "I'm currently based in Semarang, Central Java, and open to opportunities in frontend development and fullstack engineering.",
      ],
    },
    capabilities: {
      heading: 'Capabilities',
      subheading: 'Technologies and tools I work with across the stack.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend & API',
        database: 'Database',
        mobile: 'Mobile',
        tools: 'Tools & Workflow',
      },
    },
    work: {
      heading: 'Selected Work',
      subheading: 'A curated selection of projects from freelance and professional engagements.',
      role_label: 'Role',
      tech_label: 'Technologies',
      view_project: 'View Project',
      projects: [
        {
          name: 'Arletta Prime Luxury',
          category: 'Fullstack Development',
          role: 'Freelance Fullstack Developer',
          description: 'Main portal and unified operations system for Arletta Prime Luxury, built with Laravel, Inertia.js, Vue.js, and PostgreSQL.',
        },
        {
          name: 'Arletta Gym',
          category: 'Fullstack Development',
          role: 'Freelance Fullstack Developer',
          description: 'Gym operations and membership management application for Arletta Prime Luxury, built with Laravel, Inertia.js, Vue.js, and PostgreSQL.',
        },
        {
          name: 'Arletta Kost',
          category: 'Fullstack Development',
          role: 'Freelance Fullstack Developer',
          description: 'Boarding-house management application for Arletta covering tenant workflows, billing, and room availability with Laravel, Inertia.js, Vue.js, and PostgreSQL.',
        },
        {
          name: 'Arletta Cafe',
          category: 'Fullstack Development',
          role: 'Freelance Fullstack Developer',
          description: 'Cafe operations and order management system with menus, orders, and reporting using Laravel, Inertia.js, Vue.js, and PostgreSQL.',
        },
        {
          name: 'Aksara Media Promosi',
          category: 'Fullstack Development',
          role: 'Fullstack Developer',
          description: 'Company website and administrative management dashboard for a digital advertising agency, built with Vue.js, Laravel (Inertia.js), and PostgreSQL.',
        },
        {
          name: 'Desa Wisata Pandansari',
          category: 'Fullstack Development',
          role: 'Fullstack Developer',
          description: 'Tourism village portal and content management dashboard for Desa Pandansari, built with Vue.js, Laravel (Inertia.js), and PostgreSQL.',
        },
        {
          name: 'Oemah Lestari',
          category: 'Frontend Development',
          role: 'Frontend Developer',
          description: 'Marketplace and housing credit (KPR) platform for residential properties and land in Central Java, developed in collaboration with PT BPR BKK Jateng and Disperakim using Next.js.',
        },
        {
          name: 'Sightway',
          category: 'Mobile & IoT Development',
          role: 'Frontend & IoT Developer',
          description: 'Assistive IoT and AI monitoring & emergency alert system for the visually impaired. Built with Flutter, FastAPI, and integrated IoT smart sensors for obstacle detection, voice recognition, and real-time GPS tracking.',
        },
      ],
    },
    experience: {
      heading: 'Experience',
      subheading: 'Professional roles and freelance engagements.',
      items: [
        {
          company: 'Arletta Prime Luxury',
          role: 'Freelance Fullstack Developer',
          location: 'Kabupaten Semarang, Indonesia',
          period: 'Dec 2025 – Present',
          descriptions: [
            'Developed three applications for company needs: a boarding-house management application, a cafe operations application, and a gym management application.',
          ],
        },
        {
          company: 'PT Violet Global Indonesia',
          role: 'Frontend Developer',
          location: 'Semarang, Indonesia',
          period: 'Oct 2025 – Mar 2026',
          descriptions: [
            'Developed the KPR Jateng application using Next.js in collaboration with BKK.',
            'Developed the Narativa X Automation application using Next.js and FastAPI.',
          ],
        },
        {
          company: 'INAmikro',
          role: 'Mobile Developer',
          location: 'Surakarta, Indonesia',
          period: 'Sep 2024 – Dec 2024',
          descriptions: [
            "Developed the application's API using Laravel and integrated it with Flutter.",
            'Developed the INAmikro PPOB dashboard to simplify transaction monitoring and management.',
          ],
        },
        {
          company: 'Vrasmedia IT Solution',
          role: 'Frontend Developer',
          location: 'Semarang, Indonesia',
          period: 'Aug 2024 – Sep 2024',
          descriptions: [
            'Developed the E-Raport user interface integrated with the Kemdikbud system.',
          ],
        },
        {
          company: 'Eventy.id',
          role: 'Video Editor',
          location: 'Semarang, Indonesia',
          period: 'Sep 2020 – Nov 2020',
          descriptions: [
            'Created promotional showreel videos and designed posters for virtual events.',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      institution: 'Semarang State Polytechnic',
      degree: 'Diploma in Informatics Engineering',
      period: 'Sep 2022 – Sep 2025',
      gpa: 'GPA 3.82 / 4.00',
      support: 'Supplemented by industry certifications in data analytics, network administration, and web development.',
    },
    organization: {
      heading: 'Organization',
      org_name: 'Polytechnic Computer Club (UKM PCC)',
      role: 'Software Department Staff',
      period: 'May 2024 – May 2025',
      contributions: [
        'Presented a session on creating parallax effects in Figma at Goes to Public.',
        'Presented a session on building RESTful APIs using Express.js at PCC Class.',
        'Contributed to the UKM PCC 2024 Administrator Election website.',
        'Contributed to the redesign of the PCC 2024 website.',
        'Contributed to the Techcomfest and PCC 2025 National Seminar websites.',
      ],
    },
    certifications: {
      heading: 'Certifications',
      items: [
        { name: 'Big Data Analyst Associate', year: '2025' },
        { name: 'Magang Bersertifikat Angkatan 7', year: '2024' },
        { name: 'MSIB INAmikro — Edukasi dan Digitalisasi UMKM & Pedagang Pasar Rakyat', year: '2024' },
        { name: 'MTCNA', year: '2025' },
        { name: 'Database Design', year: '2023' },
        { name: 'Database Programming with SQL', year: '2023' },
      ],
    },
    contact: {
      heading: "Let's Work Together",
      description:
        "I'm open to frontend and fullstack development opportunities, freelance projects, and professional collaborations. Feel free to reach out.",
      email_label: 'Email',
      phone_label: 'Phone',
      location_label: 'Location',
      cta: 'Send an email',
    },
    footer: {
      tagline: 'Designed and built with intention.',
      rights: '© 2026 Elang Argawana. All rights reserved.',
    },
  },

  id: {
    nav: {
      work: 'Proyek',
      about: 'Tentang',
      experience: 'Pengalaman',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Elang Argawana',
      role: 'Software Development',
      tagline: 'Membangun pengalaman digital yang bermakna melalui antarmuka bersih dan rekayasa yang praktis.',
      description:
        'Saya developer web dan mobile yang berbasis di Semarang, Indonesia — bekerja di ranah frontend, backend, dan integrasi API.',
      cta_work: 'Lihat Proyek',
      cta_contact: 'Hubungi saya',
      location: 'Semarang, Jawa Tengah, Indonesia',
      available: 'Tersedia untuk proyek baru',
    },
    specialty: {
      heading: 'Yang Saya Lakukan',
      subheading: 'Layanan dan kemampuan di seluruh siklus pengembangan perangkat lunak.',
      services: [
        {
          title: 'Pengembangan Frontend',
          description: 'Membangun antarmuka pengguna yang responsif, aksesibel, dan berkinerja tinggi menggunakan framework modern. Dari layout piksel sempurna hingga interaksi yang mulus.',
        },
        {
          title: 'Pengembangan Fullstack',
          description: 'Pengembangan aplikasi web end-to-end — dari desain database dan backend API hingga antarmuka pengguna. Sistem yang andal dan mudah dirawat.',
        },
        {
          title: 'Pengembangan Mobile',
          description: 'Aplikasi mobile lintas platform menggunakan Flutter dan Dart. Membangun aplikasi praktis yang berjalan lancar di Android dan iOS.',
        },
        {
          title: 'Integrasi API',
          description: 'Menghubungkan layanan melalui RESTful API. Berpengalaman membangun dan mengonsumsi API dengan Laravel, FastAPI, dan Node.js.',
        },
      ],
    },
    about: {
      heading: 'Tentang Saya',
      photo_alt: 'Placeholder foto profil — ganti dengan foto wajah Anda',
      paragraphs: [
        'Saya Elang — developer web dan mobile dengan latar belakang Teknik Informatika dari Politeknik Negeri Semarang. Saya membangun produk digital yang praktis: aplikasi yang mudah digunakan, mudah dikelola, dan jujur tentang fungsinya.',
        'Pekerjaan saya mencakup antarmuka frontend, backend API, dan aplikasi mobile. Saya peduli tentang menerjemahkan kebutuhan menjadi pengalaman yang fungsional dan jelas — serta memahami rekayasa yang mendukungnya.',
        'Saya telah bekerja di berbagai konteks: proyek freelance tahap awal, lingkungan agensi profesional, dan organisasi kampus. Setiap konteks mendorong saya untuk menjadi lebih terstruktur, komunikatif, dan disiplin dalam pendekatan saya terhadap pengembangan perangkat lunak.',
        'Saat ini saya berbasis di Semarang, Jawa Tengah, dan terbuka untuk peluang di bidang pengembangan frontend dan fullstack engineering.',
      ],
    },
    capabilities: {
      heading: 'Kemampuan',
      subheading: 'Teknologi dan alat yang saya gunakan di berbagai lapisan pengembangan.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend & API',
        database: 'Database',
        mobile: 'Mobile',
        tools: 'Alat & Workflow',
      },
    },
    work: {
      heading: 'Proyek Pilihan',
      subheading: 'Pilihan proyek dari pekerjaan lepas dan pengalaman profesional.',
      role_label: 'Peran',
      tech_label: 'Teknologi',
      view_project: 'Lihat Proyek',
      projects: [
        {
          name: 'Arletta Prime Luxury',
          category: 'Pengembangan Fullstack',
          role: 'Freelance Fullstack Developer',
          description: 'Portal utama dan sistem manajemen terpadu Arletta Prime Luxury, dibangun dengan Laravel, Inertia.js, Vue.js, dan PostgreSQL.',
        },
        {
          name: 'Arletta Gym',
          category: 'Pengembangan Fullstack',
          role: 'Freelance Fullstack Developer',
          description: 'Aplikasi manajemen operasional dan keanggotaan gym untuk Arletta Prime Luxury, dibangun dengan Laravel, Inertia.js, Vue.js, dan PostgreSQL.',
        },
        {
          name: 'Arletta Kost',
          category: 'Pengembangan Fullstack',
          role: 'Freelance Fullstack Developer',
          description: 'Aplikasi manajemen kost Arletta mencakup pengelolaan penyewa, penagihan, dan ketersediaan kamar dengan Laravel, Inertia.js, Vue.js, dan PostgreSQL.',
        },
        {
          name: 'Arletta Cafe',
          category: 'Pengembangan Fullstack',
          role: 'Freelance Fullstack Developer',
          description: 'Sistem operasional kafe dengan fitur menu, pesanan, dan pelaporan menggunakan Laravel, Inertia.js, Vue.js, dan PostgreSQL.',
        },
        {
          name: 'Aksara Media Promosi',
          category: 'Pengembangan Fullstack',
          role: 'Fullstack Developer',
          description: 'Website perusahaan dan dashboard manajemen agensi periklanan digital, dibangun dengan Vue.js, Laravel (Inertia.js), dan PostgreSQL.',
        },
        {
          name: 'Desa Wisata Pandansari',
          category: 'Pengembangan Fullstack',
          role: 'Fullstack Developer',
          description: 'Portal desa wisata dan dashboard manajemen konten untuk Desa Pandansari, dibangun dengan Vue.js, Laravel (Inertia.js), dan PostgreSQL.',
        },
        {
          name: 'Oemah Lestari',
          category: 'Pengembangan Frontend',
          role: 'Frontend Developer',
          description: 'Platform marketplace dan kredit perumahan (KPR) serta lahan hunian se-Jawa Tengah, dikembangkan bekerja sama dengan PT BPR BKK Jateng dan Disperakim menggunakan Next.js.',
        },
        {
          name: 'Sightway',
          category: 'Pengembangan Mobile & IoT',
          role: 'Frontend & IoT Developer',
          description: 'Sistem monitoring dan peringatan darurat berbasis IoT dan Artificial Intelligence bagi tunanetra. Dibangun dengan Flutter, FastAPI, dan integrasi sensor IoT cerdas untuk deteksi halangan, pengenalan suara, serta pelacakan GPS real-time.',
        },
      ],
    },
    experience: {
      heading: 'Pengalaman',
      subheading: 'Peran profesional dan pekerjaan lepas.',
      items: [
        {
          company: 'Arletta Prime Luxury',
          role: 'Freelance Fullstack Developer',
          location: 'Kabupaten Semarang, Indonesia',
          period: 'Des 2025 – Sekarang',
          descriptions: [
            'Mengembangkan tiga aplikasi untuk kebutuhan perusahaan: aplikasi manajemen kost, aplikasi kafe, dan aplikasi gym.',
          ],
        },
        {
          company: 'PT Violet Global Indonesia',
          role: 'Frontend Developer',
          location: 'Semarang, Indonesia',
          period: 'Okt 2025 – Mar 2026',
          descriptions: [
            'Mengembangkan aplikasi KPR Jateng menggunakan Next.js bekerja sama dengan BKK.',
            'Mengembangkan aplikasi Narativa X Automation menggunakan Next.js dan FastAPI.',
          ],
        },
        {
          company: 'INAmikro',
          role: 'Mobile Developer',
          location: 'Surakarta, Indonesia',
          period: 'Sep 2024 – Des 2024',
          descriptions: [
            'Mengembangkan API aplikasi menggunakan Laravel dan mengintegrasikannya dengan Flutter.',
            'Mengembangkan dashboard PPOB INAmikro untuk menyederhanakan pemantauan transaksi.',
          ],
        },
        {
          company: 'Vrasmedia IT Solution',
          role: 'Frontend Developer',
          location: 'Semarang, Indonesia',
          period: 'Agu 2024 – Sep 2024',
          descriptions: [
            'Mengembangkan antarmuka pengguna E-Raport yang terintegrasi dengan sistem Kemdikbud.',
          ],
        },
        {
          company: 'Eventy.id',
          role: 'Video Editor',
          location: 'Semarang, Indonesia',
          period: 'Sep 2020 – Nov 2020',
          descriptions: [
            'Membuat video showreel promosi dan mendesain poster untuk acara virtual.',
          ],
        },
      ],
    },
    education: {
      heading: 'Pendidikan',
      institution: 'Politeknik Negeri Semarang',
      degree: 'D3 Teknik Informatika',
      period: 'Sep 2022 – Sep 2025',
      gpa: 'IPK 3,82 / 4,00',
      support: 'Dilengkapi dengan sertifikasi industri di bidang analitik data, administrasi jaringan, dan pengembangan web.',
    },
    organization: {
      heading: 'Organisasi',
      org_name: 'Unit Kegiatan Mahasiswa PCC (UKM PCC)',
      role: 'Staff Divisi Software',
      period: 'Mei 2024 – Mei 2025',
      contributions: [
        'Mempresentasikan sesi tentang pembuatan efek parallax di Figma pada acara Goes to Public.',
        'Mempresentasikan sesi tentang membangun RESTful API menggunakan Express.js di PCC Class.',
        'Berkontribusi pada website Pemilihan Pengurus UKM PCC 2024.',
        'Berkontribusi pada redesain website PCC 2024.',
        'Berkontribusi pada website Techcomfest dan Seminar Nasional PCC 2025.',
      ],
    },
    certifications: {
      heading: 'Sertifikasi',
      items: [
        { name: 'Big Data Analyst Associate', year: '2025' },
        { name: 'Magang Bersertifikat Angkatan 7', year: '2024' },
        { name: 'MSIB INAmikro — Edukasi dan Digitalisasi UMKM & Pedagang Pasar Rakyat', year: '2024' },
        { name: 'MTCNA', year: '2025' },
        { name: 'Database Design', year: '2023' },
        { name: 'Database Programming with SQL', year: '2023' },
      ],
    },
    contact: {
      heading: 'Mari Berkolaborasi',
      description:
        'Saya terbuka untuk peluang pengembangan frontend dan fullstack, proyek freelance, dan kolaborasi profesional. Jangan ragu untuk menghubungi saya.',
      email_label: 'Email',
      phone_label: 'Telepon',
      location_label: 'Lokasi',
      cta: 'Kirim email',
    },
    footer: {
      tagline: 'Dirancang dan dibangun dengan penuh perhatian.',
      rights: '© 2026 Elang Argawana. Semua hak dilindungi.',
    },
  },

  jp: {
    nav: {
      work: '制作物',
      about: '私について',
      experience: '経歴',
      contact: '連絡先',
    },
    hero: {
      greeting: 'Elang Argawana',
      role: 'Software Development',
      tagline: '明快なインターフェースと実践的なエンジニアリングで、思慮深いデジタル体験を構築します。',
      description:
        'インドネシア・スマランを拠点とするウェブ・モバイル開発者。フロントエンドからバックエンド、API連携まで幅広く担当しています。',
      cta_work: '制作実績を見る',
      cta_contact: 'お問い合わせ',
      location: 'インドネシア、中部ジャワ州スマラン',
      available: '新規プロジェクト受付中',
    },
    specialty: {
      heading: 'できること',
      subheading: 'ソフトウェア開発ライフサイクル全体にわたるサービスと能力。',
      services: [
        {
          title: 'フロントエンド開発',
          description: 'モダンなフレームワークを使用した、レスポンシブ・アクセシブル・高パフォーマンスなUIの構築。レイアウトの精度からスムーズなインタラクションまで対応します。',
        },
        {
          title: 'フルスタック開発',
          description: 'データベース設計・バックエンドAPIからユーザーインターフェースまで、ウェブアプリケーションのエンドツーエンド開発。信頼性が高く保守しやすいシステムを構築します。',
        },
        {
          title: 'モバイル開発',
          description: 'FlutterとDartを使ったクロスプラットフォームモバイルアプリの開発。AndroidとiOSでスムーズに動作する実用的なアプリを構築します。',
        },
        {
          title: 'API連携',
          description: 'RESTful APIを通じたサービス間連携。Laravel、FastAPI、Node.jsでのAPI構築・利用の豊富な経験があります。',
        },
      ],
    },
    about: {
      heading: '私について',
      photo_alt: 'プロフィール写真プレースホルダー — 実際の写真に置き換えてください',
      paragraphs: [
        'スマラン国立ポリテクニクでの情報工学を背景に持つ、ウェブ・モバイル開発者のElangです。実用的なデジタルプロダクト——使いやすく、保守しやすく、目的に忠実なアプリケーション——の構築を追求しています。',
        'フロントエンドUI、バックエンドAPI、モバイルアプリと幅広く取り組んでいます。要件を明快な機能体験へと落とし込み、それを支えるエンジニアリングを深く理解することを大切にしています。',
        'フリーランスの初期プロジェクト、プロのエージェンシー環境、大学のサークル活動など、さまざまな場面で経験を積みました。それぞれの経験が、ソフトウェア開発への取り組みをより構造的・体系的なものにしてくれています。',
        '現在はインドネシア・中部ジャワ州スマランを拠点とし、フロントエンド開発やフルスタックエンジニアリングの機会を求めています。',
      ],
    },
    capabilities: {
      heading: 'スキル',
      subheading: '様々な開発領域で活用している技術とツール。',
      groups: {
        frontend: 'フロントエンド',
        backend: 'バックエンド & API',
        database: 'データベース',
        mobile: 'モバイル',
        tools: 'ツール & ワークフロー',
      },
    },
    work: {
      heading: '制作実績',
      subheading: 'フリーランスおよびプロとしての案件から厳選した作品をご紹介します。',
      role_label: '役割',
      tech_label: '技術スタック',
      view_project: 'プロジェクトを見る',
      projects: [
        {
          name: 'Arletta Prime Luxury',
          category: 'フルスタック開発',
          role: 'フリーランス フルスタック開発者',
          description: 'Laravel、Inertia.js、Vue.js、PostgreSQLで構築されたArletta Prime Luxuryのメインポータルおよび統合管理システム。',
        },
        {
          name: 'Arletta Gym',
          category: 'フルスタック開発',
          role: 'フリーランス フルスタック開発者',
          description: 'Laravel、Inertia.js、Vue.js、PostgreSQLで構築されたArletta Prime Luxury向けのジム管理・会員管理アプリ。',
        },
        {
          name: 'Arletta Kost',
          category: 'フルスタック開発',
          role: 'フリーランス フルスタック開発者',
          description: 'Laravel、Inertia.js、Vue.js、PostgreSQLで構築されたArletta Prime Luxury向けの下宿・入居者管理アプリ。',
        },
        {
          name: 'Arletta Cafe',
          category: 'フルスタック開発',
          role: 'フリーランス フルスタック開発者',
          description: 'Laravel、Inertia.js、Vue.js、PostgreSQLで構築されたArletta Prime Luxury向けのカフェ運営管理システム。',
        },
        {
          name: 'Aksara Media Promosi',
          category: 'フルスタック開発',
          role: 'フルスタック開発者',
          description: 'デジタル広告エージェンシーのコーポレートサイトおよび管理ダッシュボード。Vue.js、Laravel（Inertia.js）、PostgreSQLで構築。',
        },
        {
          name: 'Desa Wisata Pandansari',
          category: 'フルスタック開発',
          role: 'フルスタック開発者',
          description: 'パンダンサリ村のエコツーリズムポータルおよび管理ダッシュボード。Vue.js、Laravel（Inertia.js）、PostgreSQLで構築。',
        },
        {
          name: 'Oemah Lestari',
          category: 'フロントエンド開発',
          role: 'フロントエンド開発者',
          description: 'PT BPR BKK JatengおよびDisperakimと連携した、中部ジャワ州向けの住宅・土地ローン（KPR）および不動産マーケットプレイス。Next.jsで構築。',
        },
        {
          name: 'Sightway',
          category: 'モバイル・IoT開発',
          role: 'フロントエンド・IoT開発者',
          description: '視覚障がい者のためのIoT・AI緊急監視・警告システム。Flutter、FastAPI、IoTスマートセンサーを統合し、障害物検知・音声AI認識・リアルタイムGPS追跡を実現。',
        },
      ],
    },
    experience: {
      heading: '職歴',
      subheading: '専門的な役職とフリーランス案件。',
      items: [
        {
          company: 'Arletta Prime Luxury',
          role: 'フリーランス フルスタック開発者',
          location: 'インドネシア、スマラン県',
          period: '2025年12月 – 現在',
          descriptions: [
            'コスト（下宿）管理、カフェ運営、ジム管理の3種類のアプリケーションを開発。',
          ],
        },
        {
          company: 'PT Violet Global Indonesia',
          role: 'フロントエンド開発者',
          location: 'インドネシア、スマラン',
          period: '2025年10月 – 2026年3月',
          descriptions: [
            'BKKとの協働のもと、Next.jsを使用してKPR Jatengアプリケーションを開発。',
            'Next.jsとFastAPIを用いてNarativa X Automationアプリケーションを開発。',
          ],
        },
        {
          company: 'INAmikro',
          role: 'モバイル開発者',
          location: 'インドネシア、スラカルタ',
          period: '2024年9月 – 2024年12月',
          descriptions: [
            'LaravelでAPIを開発し、Flutterと連携。',
            'INAmikroのPPOBダッシュボードを開発し、取引管理を効率化。',
          ],
        },
        {
          company: 'Vrasmedia IT Solution',
          role: 'フロントエンド開発者',
          location: 'インドネシア、スマラン',
          period: '2024年8月 – 2024年9月',
          descriptions: [
            'Kemdikbudシステムと連携したE-RaportのUIを開発。',
          ],
        },
        {
          company: 'Eventy.id',
          role: 'ビデオエディター',
          location: 'インドネシア、スマラン',
          period: '2020年9月 – 2020年11月',
          descriptions: [
            'バーチャルイベント向けのプロモーション動画とポスターを制作。',
          ],
        },
      ],
    },
    education: {
      heading: '学歴',
      institution: 'スマラン国立ポリテクニク',
      degree: '情報工学 短期大学士（D3）',
      period: '2022年9月 – 2025年9月',
      gpa: 'GPA 3.82 / 4.00',
      support: 'データ分析、ネットワーク管理、ウェブ開発などの業界認定資格を取得。',
    },
    organization: {
      heading: '課外活動',
      org_name: 'ポリテクニク・コンピュータ・クラブ（UKM PCC）',
      role: 'ソフトウェア部門スタッフ',
      period: '2024年5月 – 2025年5月',
      contributions: [
        'Goes to PublicにてFigmaを使ったパララックス効果の作成について発表。',
        'PCC ClassにてExpress.jsを使ったRESTful API構築について発表。',
        'UKM PCC 2024役員選挙ウェブサイトの開発に貢献。',
        'PCC 2024ウェブサイトのリデザインに貢献。',
        'TechcomfestおよびPCC 2025全国セミナーウェブサイトの開発に貢献。',
      ],
    },
    certifications: {
      heading: '資格・修了証',
      items: [
        { name: 'Big Data Analyst Associate', year: '2025' },
        { name: 'Magang Bersertifikat Angkatan 7', year: '2024' },
        { name: 'MSIB INAmikro — Edukasi dan Digitalisasi UMKM & Pedagang Pasar Rakyat', year: '2024' },
        { name: 'MTCNA', year: '2025' },
        { name: 'Database Design', year: '2023' },
        { name: 'Database Programming with SQL', year: '2023' },
      ],
    },
    contact: {
      heading: 'お問い合わせ',
      description:
        'フロントエンド・フルスタック開発の機会、フリーランス案件、専門的な協業については、お気軽にご連絡ください。',
      email_label: 'メール',
      phone_label: '電話',
      location_label: '所在地',
      cta: 'メールを送る',
    },
    footer: {
      tagline: '意図を持って設計・構築されました。',
      rights: '© 2026 Elang Argawana. All rights reserved.',
    },
  },
};
