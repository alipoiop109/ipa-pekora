import { FaDiscord, FaTiktok } from "react-icons/fa";

const games = [
  {
    nameAr: "بيكورا 2017",
    file: "Pekora2017.ipa",
    image: "/images/pekora2017.jpg",
  },
  {
    nameAr: "بيكورا 2020",
    file: "Pekora2020.ipa",
    image: "/images/pekora2020.jpg",
  },
  {
    nameAr: "بيكورا 2021",
    file: "KoroneTwentyOne2.ipa",
    image: "/images/pekora2021.jpg",
  },
];

const signingApps = [
  { name: "Scarlet", url: "https://usescarlet.com" },
  { name: "Ksgin", url: "https://api.khoindvn.io.vn/a71JoP" },
];

const socials = [
  {
    name: "Discord",
    url: "https://discord.gg/koronearabs",
    icon: <FaDiscord size={32} />,
    color: "#5865F2",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@1_pesto?_r=1&_t=ZS-96WkaRATbk4",
    icon: <FaTiktok size={32} />,
    color: "#ffffff",
  },
];

function IconGamepad() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="4"/>
      <path d="M8 12h4m-2-2v4"/>
      <circle cx="17" cy="11" r="1" fill="currentColor" stroke="none"/>
      <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function IconDownload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function GameCard({ game }: { game: (typeof games)[0] }) {
  return (
    <div className="game-card">
      <a href={`/ipa/${game.file}`} download={game.file} className="game-image-link">
        <img src={game.image} alt={game.nameAr} className="game-image" />
        <div className="download-overlay">
          <IconDownload />
          <span>تحميل</span>
        </div>
      </a>
      <p className="game-name">{game.nameAr}</p>
    </div>
  );
}

export default function App() {
  return (
    <div dir="rtl" className="app">
      <header className="site-header">
        <div className="header-inner">
          <h1 className="site-title">بيكورا IPA</h1>
          <p className="site-subtitle">تحميل ألعاب iOS</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">
            <span className="title-icon"><IconGamepad /></span>
            الألعاب
          </h2>
          <div className="games-grid">
            {games.map((game) => (
              <GameCard key={game.file} game={game} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="title-icon"><IconPen /></span>
            تطبيقات التوقيع
          </h2>
          <div className="signing-list">
            {signingApps.map((app) => (
              <div key={app.name} className="signing-item">
                <span className="signing-name">{app.name}</span>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signing-btn"
                >
                  اضغط هنا
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="title-icon"><IconChat /></span>
            الدعم والمساعدة
          </h2>
          <div className="support-box">
            <a
              href="https://discord.gg/koronearabs"
              target="_blank"
              rel="noopener noreferrer"
              className="support-link"
            >
              كل شروحات بيكورا موجودة في سيرفرنا على الديسكورد
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="section follow-section">
          <h2 className="section-title" style={{ justifyContent: "center" }}>
            <span className="title-icon"><IconGlobe /></span>
            تابعنا
          </h2>
          <div className="socials-row">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ color: s.color }}
              >
                {s.icon}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </section>
        <p className="footer-copy">© 2024 بيكورا IPA — جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
