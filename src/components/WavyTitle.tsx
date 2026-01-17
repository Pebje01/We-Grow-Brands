'use client'

export default function WavyTitle({ line1, line2 }: { line1: string; line2: string }) {
  const renderWavyText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="wave-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <>
      <span className="font-serif">{renderWavyText(line1)}</span>
      <br />
      <span className="serif-header">{renderWavyText(line2)}</span>
    </>
  )
}
