import type { SVGProps } from 'react'

/** Source: the existing Hoppang favicon mark, redrawn at a larger scale without changing its palette. */
export default function BunLogo(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HOPPANGDEV steamed bun mascot" role="img" {...props}>
    <ellipse cx="60" cy="108" rx="48" ry="8" fill="#FFCF3D" stroke="#22284F" strokeWidth="4"/>
    <path d="M60 102c-29 0-48-.4-51-11-3-10-2-26 5-38 9-16 26-24 46-24s37 8 46 24c7 12 8 28 5 38-3 10-22 11-51 11Z" fill="#FFFAF0" stroke="#22284F" strokeWidth="4.7"/>
    <ellipse cx="29" cy="78" rx="9" ry="6" fill="#FF8EB1"/><ellipse cx="91" cy="78" rx="9" ry="6" fill="#FF8EB1"/>
    <rect x="40" y="66" width="7" height="12" rx="3.5" fill="#22284F"/><rect x="73" y="66" width="7" height="12" rx="3.5" fill="#22284F"/>
    <path d="M53 82q7 9 14 0" stroke="#22284F" strokeWidth="4" strokeLinecap="round"/>
    <path d="M43 22c-8-7 8-11 0-18m17 18c-8-7 8-11 0-18m17 18c-8-7 8-11 0-18" stroke="#FFF9E8" strokeWidth="5" strokeLinecap="round"/>
  </svg>
}
