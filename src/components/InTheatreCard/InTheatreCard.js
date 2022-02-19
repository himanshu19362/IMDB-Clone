import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getTrendingMovies , getMovieByCategory } from '../../store/actions/actions'
import Carousel from 'react-elastic-carousel';
import InTheatreMovie from '../InTheatreMovie/InTheatreMovie'
import './InTheatreCard.css'
import {useEffect , useState} from 'react'

function InTheatreCard(props) {
    const [trendingPageNo, setTrendingPageNo] = useState(0);
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
      ];
    useEffect(()=>{
        props.actions.getTrendingMovies()
        
    } , [])
       
    const button1 = 'Showtime'
    const button2 = 'Trailer'

    const handleLeftClick = ()=>{
        setTrendingPageNo((prevState)=>{
            return prevState - 1
        })
    }

    const handleRightClick = ()=>{
        setTrendingPageNo((prevState)=>{
            return prevState + 1
        })
    }
    // console.log(props.trendingPageNo)
    return (
        <div className='in-theatre-movie'>
            <h1 className='theatreHeading'>Movies in Theatre</h1>
            <br />
            <div className='left-right-button' >
                <div className='InTheatreMovieList'>
                    {props.trendingMovies && props.trendingMovies.length > 0 && <Carousel breakPoints={breakPoints} pagination={false}>
                        {/* <InTheatreMovie movieName={props.trendingMovies[trendingPageNo*5 + 0].original_title} stars={props.trendingMovies[trendingPageNo*5 + 0].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.trendingMovies[trendingPageNo*5 + 0].poster_path} button1={button1} button2={button2} id={props.trendingMovies[trendingPageNo*5 + 0].id} /> */}
                        {/* <InTheatreMovie movieName={props.trendingMovies[trendingPageNo*5 + 1].original_title} stars={props.trendingMovies[trendingPageNo*5 + 1].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.trendingMovies[trendingPageNo*5 + 1].poster_path} button1={button1} button2={button2} id={props.trendingMovies[trendingPageNo*5 + 1].id} /> */}
                        {/* <InTheatreMovie movieName={props.trendingMovies[trendingPageNo*5 + 2].original_title} stars={props.trendingMovies[trendingPageNo*5 + 2].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.trendingMovies[trendingPageNo*5 + 2].poster_path} button1={button1} button2={button2} id={props.trendingMovies[trendingPageNo*5 + 2].id} /> */}
                        {/* <InTheatreMovie movieName={props.trendingMovies[trendingPageNo*5 + 3].original_title} stars={props.trendingMovies[trendingPageNo*5 + 3].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.trendingMovies[trendingPageNo*5 + 3].poster_path} button1={button1} button2={button2} id={props.trendingMovies[trendingPageNo*5 + 3].id} /> */}
                        {/* <InTheatreMovie movieName={props.trendingMovies[trendingPageNo*5 + 4].original_title} stars={props.trendingMovies[trendingPageNo*5 + 4].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.trendingMovies[trendingPageNo*5 + 4].poster_path} button1={button1} button2={button2} id={props.trendingMovies[trendingPageNo*5 + 4].id} /> */}
                        {props.trendingMovies.map((movie) => {
                            return <InTheatreMovie movieName={movie.original_title} stars={movie.vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + movie.poster_path} button1={button1} button2={button2} id={movie.id} />
                        })}
                    </Carousel>
                    }
                </div>  
                
                {/* {trendingPageNo !== 0 && <button onClick={handleLeftClick} className='arrow left' >{'<'}</button>}
                {trendingPageNo !== 3 && <button onClick={handleRightClick} className='arrow right' >{'>'}</button>} */}
                
            </div> 


            <br />       
        </div>
    )
}

const mapStateToProps = state => {
    return {
        trendingMovies: state.trendingMovies         
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            getTrendingMovies , 
            getMovieByCategory
        } , dispatch)
    }
  
  }
  
export default connect(mapStateToProps , mapDispatchToProps) (InTheatreCard)
