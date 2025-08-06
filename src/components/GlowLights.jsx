export default function GlowLights() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      {[...Array(25)].map((_, i) => (
        <div key={i} className="glow-light"></div>
      ))}
    </div>
  )
}
