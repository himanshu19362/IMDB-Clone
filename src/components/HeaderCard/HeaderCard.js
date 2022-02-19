import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UpNextMovie from '../UpNextMovie/UpNextMovie.js'
import { Link } from 'react-router-dom' 

import './HeaderCard.css'
import { getUpNextMovies , getBoxMovies } from '../../store/actions/actions'
import { bindActionCreators } from 'redux'


function HeaderCard(props) {

    const [imgNo, setImgNo] = useState(0);
    useEffect(()=>{
        props.actions.getUpNextMovies()
        props.actions.getBoxMovies()
    } , [])

    // console.log(props.upNextMovies)

    const left = '<'
    const right = '>'
    return (
        <div className='headerCard'>
            <div className='container'>                 
                {props.boxMovies && <Link to={`/description/${props.boxMovies[imgNo].id}`}><img src={'http://image.tmdb.org/t/p/w500' + props.boxMovies[imgNo].poster_path}/></Link>}
                <br />
                <button onClick={()=>{setImgNo((imgNo+4)%5 )}} className='left'>{left}</button>
                <button onClick={()=>{setImgNo((imgNo+1)%5)}} className='right'>{right}</button>
            </div>
            <div className='up-next'>
                <h3>Up Next</h3>
                {
                    props.upNextMovies  && <>    
                                   
                    <UpNextMovie img={'http://image.tmdb.org/t/p/w500' + props.upNextMovies[0].poster_path} movieName={props.upNextMovies[0].original_title} id={props.upNextMovies[0].id}/>
                    <UpNextMovie img={'http://image.tmdb.org/t/p/w500' + props.upNextMovies[1].poster_path} movieName={props.upNextMovies[1].original_title} id={props.upNextMovies[1].id}/>
                    <UpNextMovie img={'http://image.tmdb.org/t/p/w500' + props.upNextMovies[2].poster_path} movieName={props.upNextMovies[2].original_title} id={props.upNextMovies[2].id}/>
                </>
                }
                    
                            
                        {/* <UpNextMovie  />
                        <UpNextMovie  />
                        <UpNextMovie /> */}
            </div>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        upNextMovies: state.upNextMovies , 
        boxMovies: state.boxMovies
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators({
            getUpNextMovies , 
            getBoxMovies            
      } , dispatch)
  }

}

export default connect(mapStateToProps , mapDispatchToProps) (HeaderCard)
