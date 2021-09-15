import React from 'react';
import './MusicLibraryTable.css'

const MusicLibraryTable = (props)=>{

    return(
    <div>
        <table className= "table">
          <thead>
          <tr className="tableHeader">
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Delete Song</th>
          </tr>
          </thead>
        <tbody className="tableRow">
          {props.sing.map((songs,index)=> {
            return(
              <tr key={index}>
              <td>{songs.title}</td> 
              <td>{songs.artist}</td>  
              <td>{songs.album}</td>  
              <td>{songs.genre}</td>  
              <td>{songs.release_date}</td> 
              <td>
              <button className="delete" onClick={()=> props.deleteSong(songs.id)} > Delete </button>
              </td>  
              </tr>
          )
          }
          )
          }
          </tbody>
        </table>
      </div>
    )
  }


export default MusicLibraryTable;