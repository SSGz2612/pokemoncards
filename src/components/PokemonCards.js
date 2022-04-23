import React, { useState, useEffect } from "react";
import CardStyle from "./CardStyle";
// redux
import { connect } from "react-redux";
import { updateCards } from "../redux/reducer";
// axios
import axios from "axios";

const PokemonCards = ( props ) => {
    const url = "https://api.pokemontcg.io/v2/cards";
    const [ dataPkm, setDataPkm ] = useState([]);
    // set the variable search
    const [ input, setInput ] = useState("");
    const [ resultPkm, setResultPkm ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get( url );
                setDataPkm( response.data.data );
                props.cardsDispatchPkm({ cards: response.data.data })
            } catch( error ) { console.log( error )}
        }

        fetchApi();
    }, [])

    useEffect(() => {
        setResultPkm([])
        dataPkm.filter(( value ) => {
            if( value.name.includes( input )) {
                setResultPkm( resultPkm => [ ...resultPkm, value ])
            }
        })
    }, [ input, resultPkm ]);

    return<>
        <header><div className="logoPkm"></div></header>
        <div className="search">
            <input
            type="text"
            placeholder="Look for a Pokemon!"
            onChange={ e => setInput( e.target.value )}></input>
        </div>
        
        <div className="containerCard">
            { dataPkm.length === 0 ? "Loading..." : resultPkm.map(( val ) =>
            <CardStyle
                key={ val.id }
                id={ val.id}
                name={ val.name }
                imageSmall={ val.images.small }
            />
        )}</div>
    </>
}

// redux
const mapDispatchToProps = ( dispatch ) => {
    return { cardsDispatchPkm: ( data ) => dispatch( updateCards( data ))}
}

export default connect(
    null,
    mapDispatchToProps
)( PokemonCards );