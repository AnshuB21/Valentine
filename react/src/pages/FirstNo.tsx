import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstNo.css'

function FirstNo() {
  const navigate = useNavigate()
  const images = useMemo(() => ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'], [])
  const [imageIndex, setImageIndex] = useState(0)

  const handleNoClick = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="firstno">
      <h1 className="firstno-title">Are you sure?</h1>
      <div className="firstno-row">
        <div className="firstno-item">
          <button
            type="button"
            className="firstno-button firstno-button--no"
            onClick={handleNoClick}
          >
            <img className="firstno-button-image" src="/No.png" alt="No" />
          </button>
          <img className="firstno-image" src="/LookAtThis.png" alt="Look at this" />
        </div>

        <div className="firstno-item">
          <img
            className="firstno-image"
            src={images[imageIndex]}
            alt={`Memory ${imageIndex + 1}`}
          />
          <button
            type="button"
            className="firstno-button firstno-button--yes"
            onClick={() => navigate('/Yes')}
          >
            <img className="firstno-button-image" src="/Yes.png" alt="Yes" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstNo
