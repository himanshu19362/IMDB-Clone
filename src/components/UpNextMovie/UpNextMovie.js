import './UpNextMovie.css'
import React from 'react'
import { Link } from 'react-router-dom'

function UpNextMovie(props) {    
    return (
        <div className='up-movie'>
            <Link to={`/description/${props.id}`}><img src={props.img} alt='some information' /></Link>
            <div className='up-movie-content'>
                {/* <img src='https://img.icons8.com/flat-round/2x/play.png' alt='some informtion'/> */}
                <h4>{props.movieName}</h4>
                
                <p>Click Here to Know More</p>
            </div>
            
        </div>
    )
}

export default UpNextMovie
