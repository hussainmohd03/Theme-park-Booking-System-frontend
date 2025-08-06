import GlowLights from '../components/GlowLights'
const Home = () => {
  return (
    <>
      <div style={{ textAlign: 'center', color: '#fff', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '3rem', marginTop: '0', fontFamily: 'Bungee' }}>
          🎡 Welcome to Wonder World!
        </h1>
        <p
          style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto' }}
        >
          Enjoy the thrill of the rides, the joy of games, and the sparkle of
          the carnival lights!
        </p>
        <div className="orb"> </div>
        <button className="glow-on-hover" type="button">
          LETS GO FOR A RIDE !
        </button>
        {/* <GlowLights /> */}
      </div>
    </>
  )
}

export default Home
