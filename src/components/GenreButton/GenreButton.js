import './GenreButton.css'
import { getMovieByCategory } from '../../store/actions/actions';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function GenreButton(props) {

  // console.log(props.conditionalMovies)
  return (
    <div className='streamList'>
        <button style={props.genre === 'action'? {borderBottom: '3px white solid'}:{} } onClick={() => {props.actions.getMovieByCategory('action'); props.onGenreClick(0); props.onGenreSelect('action')}}>Action</button>
        <button style={props.genre === 'adventure'? {borderBottom: '3px white solid'}:{} } onClick={() => {props.actions.getMovieByCategory('adventure'); props.onGenreClick(0); props.onGenreSelect('adventure')}}>Adventure</button>
        <button style={props.genre === 'comedy'? {borderBottom: '3px white solid'}:{} } onClick={() => {props.actions.getMovieByCategory('comedy'); props.onGenreClick(0); props.onGenreSelect('comedy')}}>Comedy</button>
        <button style={props.genre === 'science'? {borderBottom: '3px white solid'}:{} } onClick={() => {props.actions.getMovieByCategory('science'); props.onGenreClick(0); props.onGenreSelect('science')}}>Science</button>                
    </div> 
  );
}

const mapStateToProps = state => {
  return {
    // conditionalMovies: state.conditionalMovies
  }
}

const mapDispatchToProps = dispatch => {
return {
    actions: bindActionCreators({
      getMovieByCategory
    } , dispatch)
}

}

export default connect(mapStateToProps , mapDispatchToProps) (GenreButton);
