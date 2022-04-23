import React from "react";
// redux
import { connect } from "react-redux";

const Pokemon = ( props ) => {
    return<>
    <div>{ props.selCard.map(( value ) => value.name )}</div>
    </>
}

// redux
const mapStateToProps = ( state ) => {
    return { selCard: state.selCard }
}

export default connect(
    mapStateToProps,
    null
)( Pokemon );