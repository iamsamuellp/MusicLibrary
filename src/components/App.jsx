import React, {Component} from 'react';
import'./App.css';
import axios from 'axios';
import MusicLibraryForm from './MusicLibraryForm/MusicLibraryForm';
import MusicLibraryTable from './MusicLibraryTable/MusicLibraryTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []

     }
  }
  componentDidMount(){
    this.makeGetRequest();
  }

  async makeGetRequest() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/');
      this.setState({
        songs:response.data
      });
    }
    catch (ex) {
      console.log('Error in Api call!');
    }
  }
  createSong=(song)=>{
    this.songs.push(song);
    this.setState({
      oneSong:this.songs.length -1
    })
  }

  render() { 
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <MusicLibraryForm everySong={this.createSong}/>
        <MusicLibraryTable sing={this.state.songs}/>
        
      </React.Fragment>
      );
  }
}
 
export default App;