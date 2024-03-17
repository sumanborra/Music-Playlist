import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const ListItems = props => {
  const {initialTracksList, deletedSuccesfully} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList

  const deleteItem = () => {
    deletedSuccesfully(id)
  }

  return (
    <li className="list-item">
      <div className="image-name-container">
        <img src={imageUrl} alt="track" className="image-items" />
        <div>
          <p className="name-tetx">{name}</p>
          <p className="genre-text">{genre}</p>
        </div>
      </div>
      <div className="delete-icon-container">
        <p className="duration-text">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={deleteItem}
        >
          <AiOutlineDelete className="delete-button-icon" />
        </button>
      </div>
    </li>
  )
}
export default ListItems
