import { useEffect, useState } from 'react'
import BunLogo from './components/BunLogo'
import BathArt from './components/BathArt'
import WhoArt from './components/WhoArt'
import { ArrowRight, ArrowUpRight, CloseIcon, Globe, MenuIcon } from './components/Icons'

import LifeArt from './components/LifeArt'
import GameCard from './components/GameCard'
import GameCarousel from './components/GameCarousel'

type Lang = 'en' | 'ko'

const i18n = {
  en: {
    navGames:'Our Games', navStudio:'The Studio', navContact:'Get in Touch', navMenu:'Open menu',
    pill:'INDEPENDENT GAME STUDIO', heroTop:'SMALL STUDIO.',heroAccent:'BIG PLAY.',
    heroDesc:'We build playful little worlds, from a flying bathtub to a supermarket full of suspiciously ordinary faces.',
    heroAction:'Explore our games', heroSecondary:'Meet the studio', scroll:'SCROLL TO EXPLORE',
    ticker:['MADE WITH CURIOSITY','BUILT FOR FUN','ONE GAME AT A TIME','IMAGINATION FIRST'],
    workEyebrow:'01 / WHAT WE MAKE', workTitle:'Meet the', workTitleEm:'playground.',
    workIntro:'Unexpected adventures. One very determined indie developer. And a little bit of chaos.',
    gameLabel:'OUR FIRST FEATURED PROJECT', gameType:'FREE BROWSER GAME', gameState:'IN DEVELOPMENT',
    gameTitle:'Bathtub Blastoff', gameNative:'날아라 욕조!',
    gameDesc:'Time your launch, soar through the air, fire up your steam boost and upgrade your ride. A delightfully ridiculous bathtub adventure built for quick bursts of fun.',
    feature1:'8 main stages', feature2:'12 languages', feature3:'Upgrades & challenges',
    gameNotice:'Project artwork on this page is illustrative, not an actual gameplay screenshot.',
    gameLink:'Game information & support', gamePolicy:'Privacy policy',
    whoType:'3D OBSERVATION GAME', whoState:'LOCAL PROTOTYPE', whoLabel:'A NEW PROJECT IN THE AISLES',
    whoDesc:'Everyone looks the same. Walk through a supermarket, watch the crowd and pick the back number of the AI trying to act human. A small gesture might be your biggest clue.',
    whoFeature1:'Walk, watch, decide', whoFeature2:'White mannequins · back numbers', whoFeature3:'Korean & English',
    whoLink:'Meet Who Are U!', whoNote:'In development. Public play and online multiplayer are not available yet.',
    whoArt:'Concept illustration · not gameplay', whoFooter:'Who Are U! project', closeMenu:'Close menu', navigation:'Main navigation', changeLang:'Change language',
    studioEyebrow:'02 / WHO WE ARE', studioTitle:'Independent by choice.', studioTitleEm:'Playful by nature.',
    studioLead:'HOPPANGDEV is a one-person independent game development studio creating original games with personality.',
    studioCopy:'From the first sketch to the final polish, every detail is crafted with a simple goal: make playing feel wonderfully surprising. From browser adventures to 3D worlds, we keep experimenting with new ideas.',
    studioPoint1:'Original ideas', studioPoint1d:'Games that have a character of their own.',
    studioPoint2:'Small, thoughtful details', studioPoint2d:'Every interaction should feel good.',
    studioPoint3:'Made for players', studioPoint3d:'Accessible, approachable and fun.',
    contactEyebrow:'03 / SAY HELLO', contactTitle:'Have something', contactEm:'in mind?',
    contactDesc:'Questions about our games, feedback, or a collaboration idea? We would love to hear from you.',
    contactAction:'Send us an email', contactNote:'Business, support & friendly hellos',
    footerCaption:'Independent games with a playful twist.', footerNav:'NAVIGATE', footerConnect:'CONNECT', footerRights:'All rights reserved.',
    footerDisclaimer:'Game development studio brand operated by an independent developer.',
    policy:'Bathtub privacy policy', support:'Bathtub support', terms:'Bathtub terms', langButton:'한국어',
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
    whoType:'3D 관찰·추리 게임', whoState:'로컬 프로토타입', whoLabel:'마트에서 시작하는 새 프로젝트',
    whoDesc:'모두 같은 흰 마네킹. 마트를 걸으며 움직임과 몸짓을 살피고, 사람처럼 행동하는 AI의 등번호를 골라 보세요. 작은 행동 하나가 결정적인 단서가 될 수 있습니다.',
    whoFeature1:'이동 · 관찰 · 선택', whoFeature2:'흰 마네킹과 등번호', whoFeature3:'한국어·영어',
    whoLink:'Who Are U! 알아보기', whoNote:'개발 중입니다. 공개 플레이와 온라인 멀티플레이는 아직 제공하지 않습니다.',
    whoArt:'콘셉트 일러스트 · 실제 게임 화면 아님', whoFooter:'Who Are U! 프로젝트', closeMenu:'메뉴 닫기', navigation:'주 메뉴', changeLang:'언어 변경',
    studioEyebrow:'02 / HOPPANGDEV 소개', studioTitle:'혼자서 만들지만,', studioTitleEm:'재미는 크게.',
    studioLead:'HOPPANGDEV는 개성 있는 오리지널 게임을 만드는 1인 인디 게임 개발 스튜디오입니다.',
    studioCopy:'첫 아이디어부터 마지막 디테일까지 직접 고민하고 다듬습니다. 가볍게 즐기는 브라우저 게임부터 걸어 다니며 관찰하는 3D 게임까지, 새로운 재미를 실험합니다.',
    studioPoint1:'독창적인 아이디어', studioPoint1d:'우리만의 개성이 담긴 게임',
    studioPoint2:'작지만 세심한 완성도', studioPoint2d:'손끝에 느껴지는 재미있는 조작',
    studioPoint3:'플레이어 중심', studioPoint3d:'쉽게 시작하고 즐겁게 플레이',
    contactEyebrow:'03 / 연락하기', contactTitle:'함께 이야기', contactEm:'나눠볼까요?',
    contactDesc:'게임에 관한 질문, 버그 제보, 협업 제안이 있다면 편하게 연락해 주세요.',
    contactAction:'이메일 보내기', contactNote:'비즈니스 · 고객지원 · 의견',
    footerCaption:'조금 엉뚱하고, 많이 즐거운 게임.', footerNav:'바로가기', footerConnect:'연락처', footerRights:'All rights reserved.',
    footerDisclaimer:'1인 개발자가 운영하는 인디 게임 스튜디오 브랜드입니다.',
    policy:'날아라 욕조! 개인정보처리방침', support:'날아라 욕조! 도움말', terms:'날아라 욕조! 이용약관', langButton:'English',
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

// Company email is verified and forwarded through Cloudflare Email Routing.
const contactEmail = 'contact@hoppangdev.shop'

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="HOPPANGDEV home"><span className="brand-mark"><BunLogo/></span><span>HOPPANG<span className="brand-highlight">DEV</span><span className="brand-period">.</span></span></a>
}

function initialLanguage(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem('hoppangdev-language')
    if (stored === 'en' || stored === 'ko') return stored
  } catch { /* Language switching also works when browser storage is unavailable. */ }
  return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLanguage)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = i18n[lang]
  const docs = gameDocs[lang]
  const whoUrl = `https://hoppangdev.github.io/who-are-u${lang === 'ko' ? '.ko' : ''}.html`
  const ko = lang === 'ko'
  const infoUrl = (name: string) => `https://hoppangdev.github.io/${name}${ko ? '.ko' : ''}.html`
  const games = [
    { id:'bath', title:ko ? '날아라 욕조!' : 'Bathtub Blastoff', native:ko ? 'Bathtub Blastoff' : '날아라 욕조!', type:t.gameType, status:t.gameState, description:t.gameDesc, features:[t.feature1,t.feature2,t.feature3], note:t.gameNotice, url:infoUrl('bathtub-blastoff'), art:<BathArt/> },
    { id:'who', title:'Who Are U!', type:t.whoType, status:t.whoState, description:t.whoDesc, features:[t.whoFeature1,t.whoFeature2,t.whoFeature3], note:t.whoNote, url:whoUrl, art:<WhoArt/> },
    { id:'life', title:ko ? '작은 시작' : 'Little Beginnings', native:ko ? 'Little Beginnings · 가제' : '작은 시작 · working title', type:ko ? '생활 시뮬레이션' : 'LIFE SIMULATION', status:ko ? '개발 중 · 초기 알파' : 'IN DEVELOPMENT · EARLY ALPHA', description:ko ? '도시의 한 주민으로 작은 시작을 해 보세요. 직업과 목표를 고르고, 일과 생활·사업을 꾸리며 성장하는 한국어 생활 시뮬레이션입니다.' : 'Start small as one resident of a town. Choose a career and goals, balance work and daily life, and grow your business in this Korean-language life simulation.', features:ko ? ['직업 17개 · 목표 51개','자동 진행 · NPC 지도','일 · 생활 · 사업'] : ['17 careers · 51 goals','Automatic progress · NPC map','Work · life · business'], note:ko ? '미완성 초기 알파입니다. 공개 플레이는 제공하지 않습니다. 그림은 콘셉트 일러스트입니다.' : 'An unfinished early alpha. Public play is not available. Artwork is a concept illustration.', url:infoUrl('little-life'), art:<LifeArt/> },
  ]


  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'ko' ? 'HOPPANGDEV — 인디 게임 개발 스튜디오' : 'HOPPANGDEV — Independent Game Studio'
    try { window.localStorage.setItem('hoppangdev-language', lang) } catch { /* Storage is optional. */ }
  }, [lang])

  useEffect(() => {
    const escapeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
      }
    }
    window.addEventListener('keydown', escapeMenu)
    return () => window.removeEventListener('keydown', escapeMenu)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  return <div className="site" id="top">
    <a className="skip-link" href="#main">{lang === 'ko' ? '본문으로 건너뛰기' : 'Skip to content'}</a>
    <header className="site-header">
      <div className="shell header-content">
        <Brand />
        <nav id="main-navigation" className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label={t.navigation}>
          <a onClick={closeMenu} href="#games">{t.navGames}</a>
          <a onClick={closeMenu} href="#studio">{t.navStudio}</a>
          <a onClick={closeMenu} href="#contact">{t.navContact}</a>
          <button className="lang-toggle mobile-lang" type="button" onClick={() => { setLang(lang === 'ko' ? 'en' : 'ko'); closeMenu() }}><Globe/>{t.langButton}</button>
        </nav>
        <div className="header-right">
          <button className="lang-toggle desktop-lang" type="button" onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} aria-label={`${t.changeLang}: ${t.langButton}`}><Globe/>{t.langButton}</button>
          <a className="header-cta" href={`mailto:${contactEmail}`}>{t.navContact}<ArrowUpRight width={15}/></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? t.closeMenu : t.navMenu} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseIcon/> : <MenuIcon/>}</button>
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
          <div className="hero-graphic"><GameCarousel games={games} lang={lang}/></div>
        </div>
        <div className="hero-bottom shell"><span>{t.scroll}</span><span aria-hidden="true">↓</span><span>© HOPPANGDEV</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{[...t.ticker, ...t.ticker].map((item,index)=><span key={`${item}-${index}`}><span className="ticker-spark">✳</span>{item}</span>)}</div></div>

      <section className="games-section section-pad" id="games" aria-labelledby="games-title">
        <div className="shell">
          <div className="section-eyebrow"><span className="eyebrow-dot"/>{t.workEyebrow}</div>
          <div className="section-heading"><h2 id="games-title">{t.workTitle}<br/><em>{t.workTitleEm}</em></h2><p>{t.workIntro}</p></div>
          {games.map((game, index) => <GameCard key={game.id} game={game} index={index} label={ko ? '게임 소개 보기' : 'Explore the game'}/>)}

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

    <footer className="site-footer"><div className="shell"><div className="footer-top"><div className="footer-brand"><Brand light/><p>{t.footerCaption}</p></div><div className="footer-links"><div><strong>{t.footerNav}</strong><a href="#games">{t.navGames}</a><a href="#studio">{t.navStudio}</a><a href="#contact">{t.navContact}</a></div><div><strong>{t.footerConnect}</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a href={whoUrl}>{t.whoFooter}<ArrowUpRight width={14}/></a><a target="_blank" rel="noopener noreferrer" href={docs.support}>{t.support}<ArrowUpRight width={14}/></a><a target="_blank" rel="noopener noreferrer" href={docs.privacy}>{t.policy}<ArrowUpRight width={14}/></a><a target="_blank" rel="noopener noreferrer" href={docs.terms}>{t.terms}<ArrowUpRight width={14}/></a></div></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} HOPPANGDEV. {t.footerRights}</p><p>{t.footerDisclaimer}</p></div></div></footer>
  </div>
}