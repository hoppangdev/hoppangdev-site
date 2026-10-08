import { Sparkle } from './Icons'

/** Decorative vector art for the studio website — not a screenshot of the actual game. */
export default function BathArt() {
  return <div className="bath-art" role="img" aria-label="An illustrated pink bathtub flying through a colorful starry sky. Decorative concept illustration, not actual gameplay.">
    <div className="art-grain" />
    <div className="art-orbit art-orbit-one" />
    <div className="art-orbit art-orbit-two" />
    <span className="art-star art-star-one">✳</span><span className="art-star art-star-two">✦</span><span className="art-star art-star-three">✳</span>
    <span className="art-bubble art-bubble-one"/><span className="art-bubble art-bubble-two"/><span className="art-bubble art-bubble-three"/>
    <div className="art-planet"><span/></div>
    <div className="art-bathtub-wrap">
      <svg viewBox="0 0 520 370" className="art-bathtub" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M124 269 66 310l75-5-20 36 108-67Z" fill="#FFCF3D" stroke="#22284F" strokeWidth="8" strokeLinejoin="round"/>
        <path d="m124 269-70 26 72 2-25 25 93-52Z" fill="#FF7A3A"/>
        <g transform="rotate(-12 268 198)">
          <rect x="97" y="162" width="349" height="32" rx="16" fill="#FFF9EB" stroke="#22284F" strokeWidth="9"/>
          <path d="M115 187h311l-24 113c-4 19-21 32-41 32H181c-20 0-38-14-42-34Z" fill="#FF5D97" stroke="#22284F" strokeWidth="10" strokeLinejoin="round"/>
          <path d="M150 218h239" stroke="#FFAEC8" strokeWidth="13" strokeLinecap="round"/>
          <path d="M166 333v14m206-14v14" stroke="#22284F" strokeWidth="11" strokeLinecap="round"/>
          <ellipse cx="265" cy="166" rx="160" ry="37" fill="#73DDD3" stroke="#22284F" strokeWidth="9"/>
          <path d="M160 146c40 11 55-4 92 6s81 10 121-5" stroke="#FFF9EB" strokeWidth="9" strokeLinecap="round"/>
          <ellipse cx="269" cy="159" rx="68" ry="25" fill="#B6F2E9"/>
          <g transform="translate(210 47)">
            <path d="M0 90C0 34 23 6 59 6s59 28 59 84c0 28-26 47-59 47S0 118 0 90Z" fill="#FFF8E9" stroke="#22284F" strokeWidth="9"/>
            <ellipse cx="21" cy="104" rx="11" ry="8" fill="#FF96B8"/><ellipse cx="96" cy="104" rx="11" ry="8" fill="#FF96B8"/>
            <rect x="36" y="81" width="7" height="13" rx="3.5" fill="#22284F"/><rect x="76" y="81" width="7" height="13" rx="3.5" fill="#22284F"/>
            <path d="M50 109q9 9 18 0" stroke="#22284F" strokeWidth="5" strokeLinecap="round"/>
            <path d="M35 2C21-7 46-19 36-28m28 30C50-7 75-19 65-28m28 30C79-7 104-19 94-28" stroke="#FFF9EB" strokeWidth="6" strokeLinecap="round"/>
          </g>
          <path d="M144 188c-16-18-20-55 5-73" stroke="#FFF9EB" strokeWidth="11" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
    <div className="art-float-note"><Sparkle width={18} height={18}/> GOOD VIBES ONLY</div>
    <div className="art-disc">01 / 01</div>
  </div>
}
