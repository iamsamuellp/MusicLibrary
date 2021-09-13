import React, {Component} from 'react';
import'./App.css';
import axios from 'axios';
import MusicLibraryForm from './MusicLibraryForm/MusicLibraryForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []

     }
  }
  componentDidMount(){
    this.getAllSongs();

  }
  async getAllSongs(){
    let resonse = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: resonse.data
    })
  }
  createSong=(song)=>{
    this.songs.push(song);
    this.setState({
      oneSong:this.songs.length -1
    })
  }

  render() { 
    return (
      <div className="container-fluid">
        <h1>Hello World!</h1>
        <MusicLibraryForm everySong={this.createSong}/>
      </div>
      );
  }
}
 
export default App;