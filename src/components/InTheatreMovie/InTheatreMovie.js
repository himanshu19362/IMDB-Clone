import React from 'react'
import './InTheatreMovie.css'
import {Link} from 'react-router-dom'

function InTheatreMovie(props) {
    return (
        <div className='movie1'>
            <Link to={`/description/${props.id}`}><img src={props.imgSrc} alt='some kind of thing'/></Link>
            <div style={{display: 'flex' , alignItems: 'center' , marginTop: '10px' , marginBottom:' 10px'}}>
                <img src='https://img.icons8.com/emoji/344/star-emoji.png' alt='' style={{width: '20px' , height: '20px' , margin: '0 5px 0 0'}} />
                <p>{props.stars}</p>
            </div>
            <p>{props.movieName}</p>
            <button className='button1'>{props.button1}</button>
            <button className='button2' style={{display: 'flex' , alignItems: 'center'}}>
                {/* <img src='https://img.icons8.com/color/344/play--v1.png' style={{width: '30px' , height: '30px'}}/> */}
                {props.button2}
            </button>            
        </div>
    )
}

export default InTheatreMovie
