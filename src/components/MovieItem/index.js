import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
