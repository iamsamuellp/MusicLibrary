import React, { Component } from 'react';




class MusicLibraryForm extends Component {
    state = { 
        title:'',
        album:'',
        artist:'',
        genre:'',
        release_date:''
     }
 

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };
 
  handleSubmit=(event) =>{
    event.preventDefault();
    let sing ={
      title:this.state.title,
      artist:this.state.album,
      album:this.state.album,
      genre:this.state.genre,
      release_date:this.state.release_date,
    }

    this.props.newSong(sing);
    this.setState({
      title:'',
      album:'',
      artist:'',
      genre:'', 
      release_date:'',

    });
  };




  render() { 
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}> 
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
             <button type="submit" onClick={this.sing}>New Song</button>
      </form>
      );
  }
}
 
export default MusicLibraryForm 