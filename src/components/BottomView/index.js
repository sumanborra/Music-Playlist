import {Component} from 'react'
import ListItems from '../ListItems'
import {FiSearch} from 'react-icons/fi'
import './index.css'

class BottomView extends Component {
  state = {initialTracksList: this.props.initialTracksList, searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deletedSuccesfully = (id) =>{
    const{initialTracksList} = this.state;
    const afterDeletedList = initialTracksList.filter(each =>(each.id !== id));
    this.setState({initialTracksList:afterDeletedList});
  }

  render() {
    const {initialTracksList, searchInput} = this.state
    //console.log(initialTracksList)
    const updatelist = initialTracksList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(updatelist)
    const resultPage =
      updatelist.length > 0 ? (
        <div className="item-container-bottom-view">
          <ul className="list-container">
            {updatelist.map(each => (
              <ListItems initialTracksList={each} key={each.id} deletedSuccesfully={this.deletedSuccesfully}/>
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-songs-found-container">
          <p className="no-songs-fond-text">No Songs Found</p>
        </div>
      )
    return (
      <div className="bottom-view-background-container">
        <div className="top-text-container-bottom-view">
          <h1 className="songs-text-bottom-view">Songs Playlist</h1>
          <div className="input-container">
            <input
              type="search"
              className="input-element"
              placeholder="Search"
              onChange={this.changeInput}
            />

            <FiSearch className="search-icon" />
          </div>
        </div>
        {resultPage}
      </div>
    )
  }
}
export default BottomView
