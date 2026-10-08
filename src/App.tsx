import { useEffect, useState } from 'react'
import BunLogo from './components/BunLogo'
import BathArt from './components/BathArt'
import { ArrowRight, ArrowUpRight, CloseIcon, Globe, MenuIcon, Sparkle } from './components/Icons'

type Lang = 'en' | 'ko'

const i18n = {
  en: {
    navGames:'Our Game', navStudio:'The Studio', navContact:'Get in Touch', navMenu:'Open menu',
    pill:'INDEPENDENT GAME STUDIO', heroTop:'SMALL STUDIO.',heroAccent:'BIG PLAY.',
    heroDesc:'We build playful little worlds that stay with you long after you close the tab.',
    heroAction:'Explore our game', heroSecondary:'Meet the studio', scroll:'SCROLL TO EXPLORE',
    ticker:['MADE WITH CURIOSITY','BUILT FOR FUN','ONE GAME AT A TIME','IMAGINATION FIRST'],
    workEyebrow:'01 / WHAT WE MAKE', workTitle:'Meet the', workTitleEm:'playground.',
    workIntro:'Unexpected adventures. One very determined indie developer. And a little bit of chaos.',
    gameLabel:'OUR FIRST FEATURED PROJECT', gameType:'FREE BROWSER GAME', gameState:'IN DEVELOPMENT',
    gameTitle:'Bathtub Blastoff', gameNative:'날아라 욕조!',
    gameDesc:'Time your launch, soar through the air, fire up your steam boost and upgrade your ride. A delightfully ridiculous bathtub adventure built for quick bursts of fun.',
    feature1:'8 main stages', feature2:'12 languages', feature3:'Upgrades & challenges',
    gameNotice:'Project artwork on this page is illustrative, not an actual gameplay screenshot.',
    gameLink:'Game information & support', gamePolicy:'Privacy policy',
    studioEyebrow:'02 / WHO WE ARE', studioTitle:'Independent by choice.', studioTitleEm:'Playful by nature.',
    studioLead:'HOPPANGDEV is a one-person independent game development studio creating original games with personality.',
    studioCopy:'From the first sketch to the final polish, every detail is crafted with a simple goal: make playing feel wonderfully surprising. We start with browser games and keep experimenting with new ideas.',
    studioPoint1:'Original ideas', studioPoint1d:'Games that have a character of their own.',
    studioPoint2:'Small, thoughtful details', studioPoint2d:'Every interaction should feel good.',
    studioPoint3:'Made for players', studioPoint3d:'Accessible, approachable and fun.',
    contactEyebrow:'03 / SAY HELLO', contactTitle:'Have something', contactEm:'in mind?',
    contactDesc:'Questions about our games, feedback, or a collaboration idea? We would love to hear from you.',
    contactAction:'Send us an email', contactNote:'Business, support & friendly hellos',
    footerCaption:'Independent games with a playful twist.', footerNav:'NAVIGATE', footerConnect:'CONNECT', footerRights:'All rights reserved.',
    footerDisclaimer:'Game development studio brand operated by an independent developer.',
    policy:'Game privacy policy', support:'Game support', terms:'Game terms', langButton:'한국어',
    marqueeEnd:'KEEP PLAYING', mailLabel:'EMAIL US',
  },
  ko: {
    navGames:'게임 소개', navStudio:'스튜디오', navContact:'문의하기', navMenu:'메뉴 열기',
    pill:'1인 인디 게임 개발 스튜디오', heroTop:'작은 스튜디오.',heroAccent:'커다란 재미.',
    heroDesc:'화면을 닫은 뒤에도 오래 기억될, 개성 있고 즐거운 작은 세계를 만듭니다.',
    heroAction:'게임 보러가기', heroSecondary:'스튜디오 소개', scroll:'스크롤해서 둘러보기',
    ticker:['호기심으로 만드는 게임','재미를 가장 먼저','한 번에 한 게임씩','상상력이 시작점'],
    workEyebrow:'01 / 우리가 만드는 게임', workTitle:'재미있는', workTitleEm:'상상 한 조각.',
    workIntro:'예상치 못한 모험과 엉뚱한 아이디어. 한 명의 개발자가 만드는 작은 세계.',
    gameLabel:'첫 번째 대표 프로젝트', gameType:'무료 브라우저 게임', gameState:'개발 중',
    gameTitle:'Bathtub Blastoff', gameNative:'날아라 욕조!',
    gameDesc:'타이밍을 맞춰 욕조를 발사하고, 하늘을 날며 스팀 부스터로 멀리 나아가세요. 부품을 업그레이드하고 다양한 스테이지를 공략하는 유쾌한 비행 게임입니다.',
    feature1:'메인 스테이지 8개', feature2:'12개 언어 지원', feature3:'업그레이드와 도전 과제',
    gameNotice:'페이지의 게임 일러스트는 설명을 위한 연출 이미지로, 실제 게임 화면이 아닙니다.',
    gameLink:'게임 정보·도움말 보기', gamePolicy:'개인정보 처리방침',
    studioEyebrow:'02 / HOPPANGDEV 소개', studioTitle:'혼자서 만들지만,', studioTitleEm:'재미는 크게.',
    studioLead:'HOPPANGDEV는 개성 있는 오리지널 게임을 만드는 1인 인디 게임 개발 스튜디오입니다.',
    studioCopy:'첫 아이디어부터 마지막 디테일까지 직접 고민하고 다듬습니다. 누구나 쉽게 시작하고 즐겁게 몰입할 수 있는 브라우저 게임을 중심으로 새로운 아이디어를 실험합니다.',
    studioPoint1:'독창적인 아이디어', studioPoint1d:'우리만의 개성이 담긴 게임',
    studioPoint2:'작지만 세심한 완성도', studioPoint2d:'손끝에 느껴지는 재미있는 조작',
    studioPoint3:'플레이어 중심', studioPoint3d:'쉽게 시작하고 즐겁게 플레이',
    contactEyebrow:'03 / 연락하기', contactTitle:'함께 이야기', contactEm:'나눠볼까요?',
    contactDesc:'게임에 관한 질문, 버그 제보, 협업 제안이 있다면 편하게 연락해 주세요.',
    contactAction:'이메일 보내기', contactNote:'비즈니스 · 고객지원 · 의견',
    footerCaption:'조금 엉뚱하고, 많이 즐거운 게임.', footerNav:'바로가기', footerConnect:'연락처', footerRights:'All rights reserved.',
    footerDisclaimer:'1인 개발자가 운영하는 인디 게임 스튜디오 브랜드입니다.',
    policy:'게임 개인정보 처리방침', support:'게임 도움말', terms:'게임 이용약관', langButton:'English',
    marqueeEnd:'계속 플레이!', mailLabel:'이메일 문의',
  },
} as const

const gameDocs = {
  en: {
    support: 'https://hoppangdev.github.io/support.html',
    terms: 'https://hoppangdev.github.io/terms.html',
    privacy: 'https://hoppangdev.github.io/privacy.html',
  },
  ko: {
    support: 'https://hoppangdev.github.io/support.ko.html',
    terms: 'https://hoppangdev.github.io/terms.ko.html',
    privacy: 'https://hoppangdev.github.io/privacy.ko.html',
  },
} as const

// Change this to contact@hoppangdev.shop only AFTER Cloudflare Email Routing is tested.
const contactEmail = 'hoppangdev@gmail.com'

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="HOPPANGDEV home"><span className="brand-mark"><BunLogo/></span><span>HOPPANG<span className="brand-highlight">DEV</span><span className="brand-period">.</span></span></a>
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = window.localStorage.getItem('hoppangdev-language')
    return stored === 'en' || stored === 'ko' ? stored : navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const t = i18n[lang]
  const docs = gameDocs[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'ko' ? 'HOPPANGDEV — 인디 게임 개발 스튜디오' : 'HOPPANGDEV — Independent Game Studio'
    window.localStorage.setItem('hoppangdev-language', lang)
  }, [lang])

  const closeMenu = () => setMenuOpen(false)
  return <div className="site" id="top">
    <a className="skip-link" href="#main">{lang === 'ko' ? '본문으로 건너뛰기' : 'Skip to content'}</a>
    <header className="site-header">
      <div className="shell header-content">
        <Brand />
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a onClick={closeMenu} href="#games">{t.navGames}</a>
          <a onClick={closeMenu} href="#studio">{t.navStudio}</a>
          <a onClick={closeMenu} href="#contact">{t.navContact}</a>
          <button className="lang-toggle mobile-lang" type="button" onClick={() => { setLang(lang === 'ko' ? 'en' : 'ko'); closeMenu() }}><Globe/>{t.langButton}</button>
        </nav>
        <div className="header-right">
          <button className="lang-toggle desktop-lang" type="button" onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} aria-label="Change language"><Globe/>{t.langButton}</button>
          <a className="header-cta" href={`mailto:${contactEmail}`}>{t.navContact}<ArrowUpRight width={15}/></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : t.navMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseIcon/> : <MenuIcon/>}</button>
        </div>
      </div>
    </header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-dots" aria-hidden="true"/>
        <div className="shell hero-body">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-icon">✳</span>{t.pill}<span className="kicker-rule"/></div>
            <h1 id="hero-title"><span>{t.heroTop}</span><strong>{t.heroAccent}</strong></h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#games">{t.heroAction}<ArrowUpRight/></a><a className="text-link" href="#studio">{t.heroSecondary}<ArrowRight/></a></div>
            <div className="hero-micro"><span className="micro-line"/> <span>EST. 2026</span><span className="micro-divider"/> <span>MADE WITH IMAGINATION <span aria-hidden="true">✦</span></span></div>
          </div>
          <div className="hero-graphic" aria-label="HOPPANGDEV mascot and game inspired illustration"><div className="hero-sticker">100%<br/>INDIE!<Sparkle/></div><BathArt/></div>
        </div>
        <div className="hero-bottom shell"><span>{t.scroll}</span><span aria-hidden="true">↓</span><span>© HOPPANGDEV</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{[...t.ticker, ...t.ticker].map((item,index)=><span key={`${item}-${index}`}><span className="ticker-spark">✳</span>{item}</span>)}</div></div>

      <section className="games-section section-pad" id="games" aria-labelledby="games-title">
        <div className="shell">
          <div className="section-eyebrow"><span className="eyebrow-dot"/>{t.workEyebrow}</div>
          <div className="section-heading"><h2 id="games-title">{t.workTitle}<br/><em>{t.workTitleEm}</em></h2><p>{t.workIntro}</p></div>
          <article className="game-feature">
            <div className="game-visual"><div className="visual-diagonal"/><div className="game-topline"><span className="game-edition">HOPPANG ORIGINALS — 001</span><span className="game-topstar">✳</span></div><BathArt/><div className="game-bottomline"><span>BLAST OFF!</span><span aria-hidden="true">↗</span></div></div>
            <div className="game-details">
              <div className="game-flags"><span className="game-flag">{t.gameType}</span><span className="game-status"><span/>{t.gameState}</span></div>
              <p className="game-label">{t.gameLabel}</p>
              <h3>{t.gameTitle}<span>{t.gameNative}</span></h3>
              <p className="game-description">{t.gameDesc}</p>
              <div className="feature-pills"><span>★ {t.feature1}</span><span>◎ {t.feature2}</span><span>✳ {t.feature3}</span></div>
              <div className="game-links"><a className="btn btn-dark" href={docs.support} target="_blank" rel="noopener noreferrer">{t.gameLink}<ArrowUpRight/></a><a className="quiet-link" href={docs.privacy} target="_blank" rel="noopener noreferrer">{t.gamePolicy}<ArrowUpRight width={15}/></a></div>
              <p className="image-disclaimer">{t.gameNotice}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="studio-section section-pad" id="studio" aria-labelledby="studio-title">
        <div className="shell studio-grid">
          <div className="studio-left"><div className="section-eyebrow light"><span className="eyebrow-dot"/>{t.studioEyebrow}</div><h2 id="studio-title">{t.studioTitle}<br/><em>{t.studioTitleEm}</em></h2><div className="studio-mascot"><div className="mascot-ray ray1"/><div className="mascot-ray ray2"/><div className="mascot-ray ray3"/><BunLogo/><span className="mascot-label">HELLO! <span aria-hidden="true">✳</span></span></div></div>
          <div className="studio-right"><p className="studio-lead">{t.studioLead}</p><p className="studio-description">{t.studioCopy}</p><div className="studio-values">{[[t.studioPoint1,t.studioPoint1d],[t.studioPoint2,t.studioPoint2d],[t.studioPoint3,t.studioPoint3d]].map(([title,detail],idx)=><div className="studio-value" key={title}><span className="value-number">0{idx+1}</span><div><h3>{title}</h3><p>{detail}</p></div><span className="value-star">✳</span></div>)}</div></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-wrap"><div className="contact-kicker"><span className="eyebrow-dot"/>{t.contactEyebrow}</div><div className="contact-inner"><div><h2 id="contact-title">{t.contactTitle}<br/><em>{t.contactEm}</em></h2><p>{t.contactDesc}</p></div><div className="contact-actions"><a className="btn btn-primary contact-button" href={`mailto:${contactEmail}`}>{t.contactAction}<ArrowUpRight/></a><div className="contact-address"><span>{t.mailLabel}</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a><small>{t.contactNote}</small></div></div></div><div className="contact-decoration" aria-hidden="true">✳</div></div>
      </section>
    </main>

    <footer className="site-footer"><div className="shell"><div className="footer-top"><div className="footer-brand"><Brand light/><p>{t.footerCaption}</p></div><div className="footer-links"><div><strong>{t.footerNav}</strong><a href="#games">{t.navGames}</a><a href="#studio">{t.navStudio}</a><a href="#contact">{t.navContact}</a></div><div><strong>{t.footerConnect}</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a target="_blank" rel="noopener noreferrer" href={docs.support}>{t.support}<ArrowUpRight width={14}/></a><a target="_blank" rel="noopener noreferrer" href={docs.privacy}>{t.policy}<ArrowUpRight width={14}/></a><a target="_blank" rel="noopener noreferrer" href={docs.terms}>{t.terms}<ArrowUpRight width={14}/></a></div></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} HOPPANGDEV. {t.footerRights}</p><p>{t.footerDisclaimer}</p></div></div></footer>
  </div>
}
