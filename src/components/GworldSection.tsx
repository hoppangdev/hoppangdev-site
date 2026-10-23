import { ArrowUpRight } from './Icons'

export const gworldUrl = 'https://gworld.hoppangdev.shop'

const copy = {
  en: {
    eyebrow:'02 / NEW · PLAYS IN YOUR BROWSER', title:'The world is real.', titleEm:'Only you are not.',
    lead:'gworld: walk Gangnam Station, live.',
    body:'gworld lets you walk a 3D copy of real Seoul as your own avatar. Building footprints and heights, the time and the sun, the weather, the number of people on the street, buses, subway arrivals and traffic lights all run on live public data. The only thing that isn’t real is you.',
    points:[
      ['Gangnam, right now','Crowd size, bus positions, signals, weather and road closures come from live public data.'],
      ['Measured vs. staged, always labeled','Every value carries a measured (green) or staged (yellow) tag. Missing data is shown as missing.'],
      ['Ride only what’s really there','Real buses at their real positions, subway trains on real arrival times, bike-share docks with real counts. No teleporting, no fast-forward.'],
      ['People as shadows','Faceless translucent figures, as many as are really there, stepping around each other. No one is tracked.'],
    ],
    measured:'measured', staged:'staged',
    status:'First pilot: 650 m around Gangnam Station, desktop web. Next: all of Seoul, then Gyeonggi and Incheon. The bar is “GTA Seoul”: it should feel like standing on the street.',
    action:'Enter gworld', actionNote:'Best on desktop browsers · Free · No sign-up',
    shots:['Walking down Gangnam-daero','A live bus arrival board at a median stop','Line 2 platform with trains on real arrival times','A taxi pulls over to the curb'],
    credits:'Data: Seoul Open Data Plaza, data.go.kr, Seoul T-Data, MOLIT integrated building data, juso.go.kr, © OpenStreetMap contributors (ODbL). Non-commercial pilot. Screens are real gworld captures.',
  },
  ko: {
    eyebrow:'02 / 새 프로젝트 · 웹에서 바로', title:'세상은 진짜,', titleEm:'나만 가상.',
    lead:'gworld, 강남역을 실시간으로 걷다.',
    body:'gworld는 실제 서울을 그대로 옮긴 3D 거리를 내 아바타로 걸어 다니는 웹 서비스예요. 건물 자리와 층수, 지금 시각과 해 위치, 날씨, 거리의 사람 수, 버스와 지하철 도착, 신호등까지 모두 실제 공공 데이터로 움직여요. 가상인 건 그 거리에 서 있는 나 하나뿐이에요.',
    points:[
      ['지금 이 순간의 강남','사람 수·버스 위치·신호·날씨·사고 통제를 실시간 공공 데이터로 받아요.'],
      ['실측과 연출을 숨기지 않아요','화면의 값마다 실측(초록)·연출(노랑) 꼬리표가 붙어요. 데이터가 없는 건 없다고 보여 줘요.'],
      ['진짜로 다니는 것만 타요','실제 위치의 버스, 실제 도착 시각의 지하철, 남은 대수 그대로의 따릉이. 순간이동도 빨리감기도 없어요.'],
      ['사람은 그림자로','실제 인원수만큼 얼굴 없는 반투명 그림자가 서로 피해 걸어요. 누구도 추적하지 않아요.'],
    ],
    measured:'실측', staged:'연출',
    status:'1차 시범작은 강남역 주변 650m, PC 웹이에요. 다음은 서울 전체, 그다음 경기·인천. 기준은 “GTA 서울”, 거리에 서 있는 느낌이에요.',
    action:'gworld 들어가기', actionNote:'PC 브라우저 권장 · 무료 · 회원가입 없음',
    shots:['강남대로를 걷는 모습','중앙 버스 정류장의 실시간 도착 전광판','실제 도착 시각에 맞춰 들어온 2호선 열차','연석에 선 택시'],
    credits:'데이터: 서울 열린데이터광장, 공공데이터포털, 서울교통빅데이터플랫폼(T-Data), 국토교통부 GIS건물통합정보, 주소정보누리집, © OpenStreetMap 기여자(ODbL). 비상업 시범 서비스. 화면은 실제 gworld 캡처예요.',
  },
} as const

const shots = ['/gworld/walk.jpg', '/gworld/bus-stop.jpg', '/gworld/subway.jpg', '/gworld/taxi.jpg']

export default function GworldSection({ lang }: { lang: 'ko' | 'en' }) {
  const t = copy[lang]
  return <section className="gworld-section section-pad" id="gworld" aria-labelledby="gworld-title">
    <div className="shell gworld-grid">
      <div className="gworld-copy">
        <div className="section-eyebrow"><span className="eyebrow-dot"/>{t.eyebrow}</div>
        <h2 id="gworld-title">{t.title}<br/><em>{t.titleEm}</em></h2>
        <p className="gworld-lead">{t.lead}</p>
        <p className="gworld-body">{t.body}</p>
        <ol className="gworld-points">{t.points.map(([title, detail], index) => <li key={title}><span className="value-number">0{index + 1}</span><div><h3>{title}</h3><p>{index === 1 ? <><span className="gw-tag gw-measured">{t.measured}</span><span className="gw-tag gw-staged">{t.staged}</span> </> : null}{detail}</p></div></li>)}</ol>
        <p className="gworld-status">{t.status}</p>
        <div className="gworld-cta"><a className="btn btn-primary gworld-enter" href={gworldUrl} target="_blank" rel="noopener">{t.action}<ArrowUpRight/></a><span>{t.actionNote}</span></div>
      </div>
      <div className="gworld-gallery">
        <a className="gworld-main-shot" href={gworldUrl} target="_blank" rel="noopener" aria-label={t.action}><img src={shots[0]} alt={t.shots[0]} width={1568} height={705} loading="lazy"/></a>
        <div className="gworld-thumbs">{shots.slice(1).map((src, index) => <img key={src} src={src} alt={t.shots[index + 1]} width={1568} height={705} loading="lazy"/>)}</div>
      </div>
    </div>
    <p className="shell gworld-credits">{t.credits}</p>
  </section>
}
