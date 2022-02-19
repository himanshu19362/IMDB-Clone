import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myAxios } from '../../utils/axios';
// import DescriptionHeader from '../DescriptionHeader/DescriptionHeader';
import './Description.css'

function Description() {
  const params = useParams()

  const [data, setData] = useState(undefined);
  useEffect(()=>{
    myAxios('GET' , `3/movie/${params.id}` , '&language=en-US')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{

    })
  } , [])

  
  // console.log(data)

  return (
    <>
      {
        data && <div className='description'>
          <br />
          <h1>{data.original_title}</h1>
          <br />
          <br />
          <div>
            <p>{data.overview}</p>
          </div>
          <br />
          <br />
          <img className='description-image' src={'http://image.tmdb.org/t/p/w500' + data.poster_path}/>
          <br />
          <br />
          <div style={{display: 'flex' , alignItems: 'center'}}>
            <div style={{display: 'flex' , alignItems: 'center'}}>
              <img src='https://img.icons8.com/emoji/344/star-emoji.png' alt='' style={{width: '20px' , height: '20px' , margin: '0 5px 0 0'}} />
              <p>{data.vote_average}</p>
            </div>
            <div style={{marginLeft: '30px'}}>
              <p>Popularity: <strong>{data.popularity}</strong></p>
            </div>
          </div>
          <div>
            <p>Duration: <strong>{`${parseInt(data.runtime / 60)} hrs ${data.runtime % 60} minutes`}</strong></p>
            <p>Release Date : <strong>{data.release_date}</strong></p>
          </div>
        </div>
      }
        
    </>
  );
}



export default Description;
