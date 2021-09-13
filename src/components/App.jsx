import React, {Component} from 'react';
import'./App.css';
import axios from 'axios';


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

  render() { 
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
      );
  }
}
 
export default App;