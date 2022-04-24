import React from "react";
import "../App";
// browser
import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { selectedCard } from "../redux/reducer";

const CardStyle = ( props ) => {
    const selectPkm = ( e ) => {
        let sp = props.cards.find(( value ) => value.id === e );
        props.cardsDispatchPkm( sp );
        console.log( sp );
    }

    return(
        <div className="card">
            <Link to={{ pathname: `/pokemon/${ props.id }` }} onClick={() => selectPkm( props.id )}>
            <img className="imgBoxSmall" src={ props.imageSmall } alt={ props.name }/>
            </Link>
        </div>
    )
}

// redux
const mapStateToProps = ( state ) => {
    return { cards: state.cards[0].cards }
}

const mapDispatchToProps = ( dispatch ) => {
    return { cardsDispatchPkm: ( data ) => dispatch( selectedCard( data ))}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( CardStyle );