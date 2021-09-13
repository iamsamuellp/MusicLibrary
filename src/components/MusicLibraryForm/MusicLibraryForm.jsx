import React, { Component } from 'react';




class MusicLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        title:"",
        album:"",
        artist:"",
        genre:"",
        releaseDate:""
     }
  }

  handleChange=(event) =>{
    this.setState ({
      [event.target.title]: event.target.value,
    });
  }
 
  handleSubmit=(event) =>{
    event.preventDefault();
    this.props.everySongs(this.state);
  }




  render() { 
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>Song Title</label>
             <input name="title" onChange={this.handleChange} value={this.state.title}/>
             <label>Album</label>
             <input name="album" onChange={this.handleChange} value={this.state.album}/>
             <label>Artist</label>
             <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
             <label>genre</label>
             <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
             <label>release Date</label>
             <input name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
             <button type="submit">Enter Song</button>
      </form>
      );
  }
}
 
export default MusicLibrary ;