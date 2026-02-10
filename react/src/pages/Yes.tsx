import './Yes.css'

function Yes() {
  return (
    <div className="yes">
      <h1 className="yes-title">ASK ME OUT NOW!!!</h1>
      <div className="yes-video-row">
        <p className="yes-note">You are my favourite human</p>
        <video className="yes-video" src="/Video.mp4" autoPlay loop muted />
        <p className="yes-note">Thankyou for always loving me</p>
      </div>
    </div>
  )
}

export default Yes
