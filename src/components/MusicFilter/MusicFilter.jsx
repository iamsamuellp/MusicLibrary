import React, { Component } from 'react';
import './MusicFilter.css'
import axios from 'axios';


class MusicFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs:[],
      filterSearch:'',
      results:''
    }
  }

  componentDidMount(){
    this.makeGetRequest();
  }
  async makeGetRequest(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs:response.data
    })
  }

  handleChange =(event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit =(event) =>{
    event.preventDefault();
    this.filter.Sings()
  } 

  filterSearch= (props)=>{
    let filteringSongs = this.state.songs.filter(song =>{
    return song.title === this.state.search
  })
  return filteringSongs
}


  render() { 
    return (  
      <div className="searchbar">
        <form onSubmit={this.handleSubmit} >
        <label>Filter Search</label>
        <input name= 'filter' onChange= {this.handleChange} value = {this.state.filterSearch} />
        <button type ='submit'>Find!</button>
        </form>      
      </div>
    );
  }
}
 
export default MusicFilter ;