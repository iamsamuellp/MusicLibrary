import React, { Component } from 'react';
import './MusicFilter.css'




class MusicFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filtering:''
     };
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })  
  };

  handleSubmit=(event) =>{
    event.preventDefault();
    let filResults = this.props.search.filter(sing => {
        if (sing.title.toLowerCase().includes(this.state.filtering.toLowerCase())){
            return sing
        }
        if (sing.artist.toLowerCase().includes(this.state.filtering.toLowerCase())){
            return sing
        }
        if (sing.album.toLowerCase().includes(this.state.filtering.toLowerCase())){
            return sing
        }
        if (sing.genre.toLowerCase().includes(this.state.filtering.toLowerCase())){
            return sing
        }
        if (sing.release_date.toLowerCase().includes(this.state.filtering.toLowerCase())){
            return sing
        }
        else{
            return false
        }
    });
    this.setState({
      filtering:''
    })
    this.props.filters(filResults)
    
  }
  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search </label>
          <input className= "filterInput" name="filtering" title="search" type="text" value={this.state.filtering} onChange={this.handleChange}/>
          <button className="InputButton"  type='submit'value="search" >Submit</button>
        </form>

      </div>
     );
  }
}
 
export default MusicFilter ;