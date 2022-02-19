import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GenreButton from '../GenreButton/GenreButton'
import InTheatreMovie from '../InTheatreMovie/InTheatreMovie'
import './ConditionalCard.css'
import { getMovieByCategory } from '../../store/actions/actions'
import Carousel from 'react-elastic-carousel';


function ConditionalCard(props) {   

    const [pageNo, setPageNo] = useState(0);
    const [currentGenre, setCurrentGenre] = useState('action');
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
      ];
    useEffect(()=>{
        props.actions.getMovieByCategory('action')
        // setPageNo(0)
    } , [])
     
    const handleLeftClick = ()=>{
        setPageNo((prevState)=>{
            return prevState - 1
        })
    }

    const handleRightClick = ()=>{
        setPageNo((prevState)=>{
            return prevState + 1
        })
    }
    const button1 = 'WatchList'
    const button2 = 'Trailer'
    return (
        <div>
            <h1 className='exploreHeading'>Explore What's Streaming</h1>
            <br />
            
            <GenreButton onGenreClick = {setPageNo} onGenreSelect={setCurrentGenre} genre={currentGenre} />
            <br />
            
            <div className='left-right-button' >
                <div className='InTheatreMovieList'>
                    {props.conditionalMovies && props.conditionalMovies.length > 0 && <Carousel breakPoints={breakPoints} pagination={false}>   
                        {/* <InTheatreMovie movieName={props.conditionalMovies[pageNo*5 + 0].original_title} stars={props.conditionalMovies[pageNo*5 +  0].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.conditionalMovies[pageNo*5 + 0].poster_path} button1={button1} button2={button2} id={props.conditionalMovies[pageNo*5 + 0].id} />
                        <InTheatreMovie movieName={props.conditionalMovies[pageNo*5 + 1].original_title} stars={props.conditionalMovies[pageNo*5 +  1].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.conditionalMovies[pageNo*5 + 1].poster_path} button1={button1} button2={button2} id={props.conditionalMovies[pageNo*5 + 1].id} />
                        <InTheatreMovie movieName={props.conditionalMovies[pageNo*5 + 2].original_title} stars={props.conditionalMovies[pageNo*5 +  2].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.conditionalMovies[pageNo*5 + 2].poster_path} button1={button1} button2={button2} id={props.conditionalMovies[pageNo*5 + 2].id} />
                        <InTheatreMovie movieName={props.conditionalMovies[pageNo*5 + 3].original_title} stars={props.conditionalMovies[pageNo*5 +  3].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.conditionalMovies[pageNo*5 + 3].poster_path} button1={button1} button2={button2} id={props.conditionalMovies[pageNo*5 + 3].id} />
                        <InTheatreMovie movieName={props.conditionalMovies[pageNo*5 + 4].original_title} stars={props.conditionalMovies[pageNo*5 +  4].vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + props.conditionalMovies[pageNo*5 + 4].poster_path} button1={button1} button2={button2} id={props.conditionalMovies[pageNo*5 + 4].id} /> */}
                        {props.conditionalMovies.map((movie) => {
                            return <InTheatreMovie movieName={movie.original_title} stars={movie.vote_average} imgSrc={'http://image.tmdb.org/t/p/w500' + movie.poster_path} button1={button1} button2={button2} id={movie.id} />
                        })}
                        
                        </Carousel>                  
                    }
                    
                </div>  
                {/* {pageNo !== 0 && <button onClick={handleLeftClick} className='arrow left' >{'<'}</button>}
                {pageNo !== 3 && <button onClick={handleRightClick} className='arrow right' >{'>'}</button>} */}
            </div> 
            <br />   
        </div>
    )
}

const mapStateToProps = state => {
    return {
        conditionalMovies: state.conditionalMovies
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            
            getMovieByCategory
        } , dispatch)
    }
  
  }

export default connect(mapStateToProps , mapDispatchToProps)  (ConditionalCard)
