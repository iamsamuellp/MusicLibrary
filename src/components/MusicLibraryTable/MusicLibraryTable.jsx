import React from 'react';
import './MusicLibraryTable.css'

const MusicLibraryTable = (props)=>{

    return(
    <div className="table" >
        <table>
          <thead>
          <tr className="tableHeader">
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Release Date</th>
          </tr>
          </thead>
        <tbody>
          {props.sing.map((songs,index)=> {
            return(
              <tr key={index} className="songs">
              <td>{songs.title}</td> 
              <td>{songs.artist}</td>  
              <td>{songs.album}</td>  
              <td>{songs.artist}</td>  
              <td>{songs.release_date}</td>   
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