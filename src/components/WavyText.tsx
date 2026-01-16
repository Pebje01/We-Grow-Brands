export default function WavyText({ text }: { text: string }) {
  return (
    <span className="wave-text">
      {Array.from(text).map((char, i) => (
        <span key={`${i}-${char}`} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
