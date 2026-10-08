import { useEffect, useRef, useState } from 'react'
import type { Game } from './GameCard'
export default function GameCarousel({ games, lang }: { games: Game[]; lang: 'ko' | 'en' }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(document.hidden)
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const touch = useRef<{x: number; y: number} | null>(null)
  const move = (delta: number) => setActive(value => (value + delta + games.length) % games.length)
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)')
    const motion = () => setReduced(media.matches)
    const visibility = () => setHidden(document.hidden)
    media.addEventListener('change', motion); document.addEventListener('visibilitychange', visibility)
    return () => { media.removeEventListener('change', motion); document.removeEventListener('visibilitychange', visibility) }
  }, [])
  useEffect(() => {
    if (paused || hovered || focused || hidden || reduced) return
    const timer = window.setInterval(() => setActive(value => (value + 1) % games.length), 6000)
    return () => clearInterval(timer)
  }, [paused, hovered, focused, hidden, reduced, active, games.length])
  const ko = lang === 'ko'
  return <div className="featured-carousel" role="region" aria-roledescription="carousel" aria-label={ko ? '대표 게임' : 'Featured games'} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) } }} onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }} onTouchEnd={event => { const start = touch.current; touch.current = null; if (!start) return; const dx = event.changedTouches[0].clientX - start.x; const dy = event.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1) }}>
    {games.map((game, index) => <a key={game.id} className="featured-slide" hidden={active !== index} href={game.url} aria-label={`${game.title} — ${ko ? '게임 소개 보기' : 'Game information'}`}><div className="featured-art">{game.art}</div><div className="featured-caption"><span>{game.status}</span><strong>{game.title}</strong><span>{ko ? '게임 소개 보기' : 'Explore the game'} ↗</span></div></a>)}
    <div className="carousel-controls"><button type="button" onClick={() => move(-1)} aria-label={ko ? '이전 게임' : 'Previous game'}>←</button><div className="carousel-dots">{games.map((game, index) => <button type="button" key={game.id} aria-label={`${game.title} (${index + 1}/${games.length})`} aria-pressed={active === index} onClick={() => setActive(index)}><span/></button>)}</div><button type="button" onClick={() => move(1)} aria-label={ko ? '다음 게임' : 'Next game'}>→</button><button type="button" aria-pressed={paused || reduced} disabled={reduced} onClick={() => setPaused(value => !value)}>{reduced ? (ko ? '자동 넘김 꺼짐' : 'Auto-play off') : paused ? (ko ? '자동 넘김 시작' : 'Play') : (ko ? '일시정지' : 'Pause')}</button></div>
  </div>
}
