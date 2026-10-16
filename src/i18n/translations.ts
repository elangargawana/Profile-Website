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
      role: 'Frontend Developer',
      tagline: 'Building thoughtful digital experiences through clean interfaces and practical engineering.',
      description:
        "I'm a web and mobile developer based in Semarang, Indonesia, working across frontend interfaces, backend systems, and API integrations.",
      cta_work: 'Selected Work',
      cta_contact: 'Get in touch',
      location: 'Semarang, Central Java, Indonesia',
      available: 'Available for new projects',
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
          description:
            'Developed three business applications for a hospitality company: a boarding-house management application, a cafe operations application, and a gym management application. Built to support day-to-day business operations across the company\'s service verticals.',
        },
        {
          name: 'KPR Jateng',
          category: 'Frontend Development',
          role: 'Frontend Developer',
          description:
            'Developed the KPR Jateng application using Next.js, in collaboration with BKK (Bursa Kerja Khusus). Built responsive user interfaces and integrated with backend services during the project engagement at PT Violet Global Indonesia.',
        },
        {
          name: 'Narativa X Automation',
          category: 'Fullstack Development',
          role: 'Frontend Developer',
          description:
            'Built the frontend for Narativa X Automation using Next.js, integrated with a FastAPI backend. The project focused on automation workflows and delivering a responsive, production-ready interface.',
        },
        {
          name: 'INAmikro',
          category: 'Mobile & API Development',
          role: 'Mobile Developer',
          description:
            'Developed the application API using Laravel and integrated it with a Flutter mobile client. Built the INAmikro PPOB dashboard to simplify transaction monitoring and management for micro-business operators.',
        },
        {
          name: 'E-Raport',
          category: 'Frontend Development',
          role: 'Frontend Developer',
          description:
            'Developed the user interface for the E-Raport system, integrated with the Kemdikbud (Ministry of Education) platform. Focused on building a clear, accessible interface for student report card management.',
        },
        {
          name: 'PCC Websites',
          category: 'Web Development',
          role: 'Contributor',
          description:
            'Contributed to multiple organizational websites as part of the Polytechnic Computer Club (UKM PCC), including the PCC 2024 Administrator Election site, the PCC 2024 website redesign, and the Techcomfest and PCC 2025 National Seminar websites.',
        },
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
    about: {
      heading: 'About',
      paragraphs: [
        "I'm Elang — a web and mobile developer with a background in Informatics Engineering from Semarang State Polytechnic. I build practical digital products: applications that are usable, maintainable, and honest about what they do.",
        "My work spans frontend interfaces, backend APIs, and mobile applications. I care about translating requirements into clear, functional experiences — and about understanding the engineering that makes that possible.",
        "I've worked across early-stage freelance projects, professional agency environments, and campus organizations. Each context has pushed me to be more structured, more communicative, and more deliberate in how I approach software development.",
        "I'm currently based in Semarang, Central Java, and open to opportunities in frontend development and fullstack engineering.",
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
        { name: 'Belajar Membuat Front-End Web untuk Pemula', year: '2024' },
        { name: 'Database Design', year: '2023' },
        { name: 'Belajar Dasar Pemrograman JavaScript', year: '2023' },
        { name: 'Belajar Dasar Pemrograman Web', year: '2023' },
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
      role: 'Frontend Developer',
      tagline: 'Membangun pengalaman digital yang bermakna melalui antarmuka bersih dan rekayasa yang praktis.',
      description:
        'Saya developer web dan mobile yang berbasis di Semarang, Indonesia — bekerja di ranah frontend, backend, dan integrasi API.',
      cta_work: 'Lihat Proyek',
      cta_contact: 'Hubungi saya',
      location: 'Semarang, Jawa Tengah, Indonesia',
      available: 'Tersedia untuk proyek baru',
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
          description:
            'Mengembangkan tiga aplikasi bisnis untuk perusahaan perhotelan: aplikasi manajemen kost, aplikasi operasional kafe, dan aplikasi manajemen gym — guna mendukung operasional bisnis sehari-hari.',
        },
        {
          name: 'KPR Jateng',
          category: 'Pengembangan Frontend',
          role: 'Frontend Developer',
          description:
            'Mengembangkan aplikasi KPR Jateng menggunakan Next.js, bekerja sama dengan BKK (Bursa Kerja Khusus). Membangun antarmuka responsif dan mengintegrasikannya dengan layanan backend.',
        },
        {
          name: 'Narativa X Automation',
          category: 'Pengembangan Fullstack',
          role: 'Frontend Developer',
          description:
            'Membangun frontend untuk Narativa X Automation menggunakan Next.js yang terintegrasi dengan backend FastAPI. Fokus pada alur otomatisasi dan penyampaian antarmuka yang responsif dan siap produksi.',
        },
        {
          name: 'INAmikro',
          category: 'Pengembangan Mobile & API',
          role: 'Mobile Developer',
          description:
            'Mengembangkan API aplikasi menggunakan Laravel dan mengintegrasikannya dengan klien mobile Flutter. Membangun dashboard PPOB INAmikro untuk menyederhanakan pemantauan dan pengelolaan transaksi.',
        },
        {
          name: 'E-Raport',
          category: 'Pengembangan Frontend',
          role: 'Frontend Developer',
          description:
            'Mengembangkan antarmuka pengguna untuk sistem E-Raport yang terintegrasi dengan platform Kemdikbud. Fokus pada tampilan yang jelas dan mudah diakses untuk pengelolaan rapor siswa.',
        },
        {
          name: 'Website PCC',
          category: 'Pengembangan Web',
          role: 'Kontributor',
          description:
            'Berkontribusi pada beberapa website organisasi sebagai bagian dari UKM PCC, termasuk situs Pemilihan Pengurus PCC 2024, redesain website PCC 2024, serta website Techcomfest dan Seminar Nasional PCC 2025.',
        },
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
    about: {
      heading: 'Tentang Saya',
      paragraphs: [
        'Saya Elang — developer web dan mobile dengan latar belakang Teknik Informatika dari Politeknik Negeri Semarang. Saya membangun produk digital yang praktis: aplikasi yang mudah digunakan, mudah dikelola, dan jujur tentang fungsinya.',
        'Pekerjaan saya mencakup antarmuka frontend, backend API, dan aplikasi mobile. Saya peduli tentang menerjemahkan kebutuhan menjadi pengalaman yang fungsional dan jelas — serta memahami rekayasa yang mendukungnya.',
        'Saya telah bekerja di berbagai konteks: proyek freelance tahap awal, lingkungan agensi profesional, dan organisasi kampus. Setiap konteks mendorong saya untuk menjadi lebih terstruktur, komunikatif, dan disiplin dalam pendekatan saya terhadap pengembangan perangkat lunak.',
        'Saat ini saya berbasis di Semarang, Jawa Tengah, dan terbuka untuk peluang di bidang pengembangan frontend dan fullstack engineering.',
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
        { name: 'Belajar Membuat Front-End Web untuk Pemula', year: '2024' },
        { name: 'Database Design', year: '2023' },
        { name: 'Belajar Dasar Pemrograman JavaScript', year: '2023' },
        { name: 'Belajar Dasar Pemrograman Web', year: '2023' },
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
      role: 'フロントエンド開発者',
      tagline: '明快なインターフェースと実践的なエンジニアリングで、思慮深いデジタル体験を構築します。',
      description:
        'インドネシア・スマランを拠点とするウェブ・モバイル開発者。フロントエンドからバックエンド、API連携まで幅広く担当しています。',
      cta_work: '制作実績を見る',
      cta_contact: 'お問い合わせ',
      location: 'インドネシア、中部ジャワ州スマラン',
      available: '新規プロジェクト受付中',
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
          description:
            '宿泊事業会社向けに、コスト（下宿）管理アプリ、カフェ運営アプリ、ジム管理アプリの3種類のビジネスアプリケーションを開発。各サービス部門の業務効率化を支援しました。',
        },
        {
          name: 'KPR Jateng',
          category: 'フロントエンド開発',
          role: 'フロントエンド開発者',
          description:
            'Next.jsを使用してKPR Jatengアプリケーションを開発。BKKとの協働のもと、レスポンシブなUIを構築し、バックエンドサービスと連携しました。',
        },
        {
          name: 'Narativa X Automation',
          category: 'フルスタック開発',
          role: 'フロントエンド開発者',
          description:
            'Next.jsとFastAPIバックエンドを組み合わせたNarativa X Automationのフロントエンドを開発。自動化ワークフローを支える、レスポンシブで本番対応済みのUIを構築しました。',
        },
        {
          name: 'INAmikro',
          category: 'モバイル・API開発',
          role: 'モバイル開発者',
          description:
            'LaravelでAPIを開発しFlutterクライアントと連携。小規模事業者向けのPPOBダッシュボードを構築し、取引の監視・管理を容易にしました。',
        },
        {
          name: 'E-Raport',
          category: 'フロントエンド開発',
          role: 'フロントエンド開発者',
          description:
            '文部科学省（Kemdikbud）プラットフォームに統合された成績管理システムE-Raportのユーザーインターフェースを開発。明快でアクセシブルな画面設計に注力しました。',
        },
        {
          name: 'PCCウェブサイト群',
          category: 'ウェブ開発',
          role: 'コントリビューター',
          description:
            'UKM PCCの一員として、PCC 2024役員選挙サイト、PCC 2024ウェブサイトのリデザイン、TechcomfestおよびPCC 2025全国セミナーサイトなど複数のサイト開発に貢献しました。',
        },
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
    about: {
      heading: '私について',
      paragraphs: [
        'スマラン国立ポリテクニクでの情報工学を背景に持つ、ウェブ・モバイル開発者のElangです。実用的なデジタルプロダクト——使いやすく、保守しやすく、目的に忠実なアプリケーション——の構築を追求しています。',
        'フロントエンドUI、バックエンドAPI、モバイルアプリと幅広く取り組んでいます。要件を明快な機能体験へと落とし込み、それを支えるエンジニアリングを深く理解することを大切にしています。',
        'フリーランスの初期プロジェクト、プロのエージェンシー環境、大学のサークル活動など、さまざまな場面で経験を積みました。それぞれの経験が、ソフトウェア開発への取り組みをより構造的・体系的なものにしてくれています。',
        '現在はインドネシア・中部ジャワ州スマランを拠点とし、フロントエンド開発やフルスタックエンジニアリングの機会を求めています。',
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
        { name: 'Belajar Membuat Front-End Web untuk Pemula', year: '2024' },
        { name: 'Database Design', year: '2023' },
        { name: 'Belajar Dasar Pemrograman JavaScript', year: '2023' },
        { name: 'Belajar Dasar Pemrograman Web', year: '2023' },
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
