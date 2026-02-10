import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <audio
        className="home-audio"
        src="/nastelbom-romantic-436840.mp3"
        autoPlay
        loop
      />
      <h1 className="home-title">Will you be my valentine?</h1>
      <div className="home-buttons">
        <button
          type="button"
          className="home-button home-button--yes"
          onClick={() => navigate('/Yes')}
        >
          <img className="home-button-image" src="/Yes.png" alt="Yes" />
          <img
            className="home-button-decoration"
            src="/ThisOne.png"
            alt="Yes decoration"
          />
        </button>

        <button
  type="button"
  className="home-button home-button--no"
  onClick={() => navigate('/FirstNo')}
>
  <img className="home-button-image" src="/No.png" alt="No" />
  <img
    style={{
      width: '100px',
      position: 'absolute',
      left: '50%',
      bottom: '-168px',
    }}
    className="home-button-decoration"
    src="/Please.png"
    alt="Yes decoration"
  />
</button>
      </div>
    </div>
  )
}

export default Home
