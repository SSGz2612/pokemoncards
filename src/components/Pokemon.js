import React from "react";
import "../App.css";
// browser
import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";

const Pokemon = ( props ) => {
    return<>
    <div className="headerSelectedCard">
        <Link to="/"><div className="logoPkm"></div></Link>
    </div>
    { props.selCard.map(( value ) =>
    <div className="containerSelectedCard" key={ value.id } >
        <div className="cardPkm">
        <div className="cardPkm2">
            <div className="imgBoxCont"><img className="imgBox" src={ value.images.large } alt={ props.name }/></div>
        </div>
        </div>
        {/* info Card */}
        <div className="infoCard">
            <div className={`infoCardName ${ value.types }Color`}>{ value.name }</div>
            {/* Evolves and HP */}
            <div className="icBox1">
            <div className="icBoxCont icBox3Text">
                <div>
                    {
                    value.evolvesFrom === undefined ?
                    "Evol. From: -" : `Evol. From: ${ value.evolvesFrom }`
                    }
                </div>

                <div>
                    {
                    value.evolvesTo === undefined ?
                    "Evol. To: -" : `Evol. To: ${ value.evolvesTo }`
                    }
                </div>
            </div>
            <div className="icBoxCont2 icBox3Text">
                <div className="icBoxCont1 icBox2Text">HP: { value.hp }</div>
                <div className={`icBoxCont1 setTypesHead ${ value.types }`}></div>
            </div>
            </div>
            {/* Rarity */}
            <div className="icBoxCont3 icBox2Text">
                <div className="icBoxCont1">Rarity: { value.rarity }</div>
                <div className="icBoxCont1 icBox4Text">Subtype: { value.subtypes }</div>
            </div>
            {/* Description */}
            <div className="description">
                { value.flavorText === undefined ? "" :
                <>
                <div className="descriptionCont icBox3Text">Description:</div>
                <div className="descriptionCont">{ value.flavorText }</div>
                </>
                }
            </div>
            {/* Pokedex */}
            <div className="pokedex">
                <div className="pokedexBall"></div>
                <div>Pokedex:</div>
                <div className="icBox1Text">{ value.nationalPokedexNumbers }</div>
            </div>
            {/* Attacks */}
            <div className="attacks">
            <div className="icBox1Text">Moves</div>
            { value.attacks === undefined ? "-" :
            value.attacks.map(( x, index ) =>
            <div key={ index } className="attacksCont">
                <div className="attacksContBox">
                    <div className="attacksContBoxInfo">
                        <div className="attacksCont1">
                            { x.cost.map(( x, index ) =>
                            <div key={ index } className={`setTypesStats ${ x }`}></div>
                            )}
                        </div>
                        <div className="attacksCont2 icBox2Text">{ x.name }</div>
                    </div>

                    { x.text === undefined ? "" : <div className="attacksContBoxText icBox4Text">{ x.text }</div> }
                </div>

                <div className="attacksContBox2 icBox1Text">{ x.damage }</div>
            </div>)}
            </div>
            {/* Resistence and Weakness */}
            <div className="resisAndweak">
                <div className="resisAndweakCont icBox3Text">
                    <div>Resistance</div>
                    { value.resistances === undefined ? "-" : value.resistances.map(( x, index ) =>
                    <div className="typeBox" key={ index }>
                        <div className={`setTypesStats ${ x.type }`}></div>
                        <div>{ x.value }</div>
                    </div>
                    )}
                </div>

                <div className="resisAndweakCont icBox3Text">
                    <div>Weakness</div>
                    { value.weaknesses === undefined ? "-" : value.weaknesses.map(( x, index ) =>
                    <div className="typeBox" key={ index }>
                        <div className={`setTypesStats ${ x.type }`}></div>
                        <div>{ x.value }</div>
                    </div>
                    )}
                </div>

                <div className="resisAndweakCont icBox3Text">
                    <div>Retreat Cost</div>
                    <div className="retreatCost">
                        { value.retreatCost === undefined ? "" : value.retreatCost.map(( x, index ) =>
                        <div className="typeBox" key={ index }>
                            <div className={`setTypesStats ${ x }`}></div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Artist */}
            <div className={`artist icBox2Text ${ value.types }Color`}>Illustrator: { value.artist }</div>
        </div>
    </div>
    )}</>
}

// redux
const mapStateToProps = ( state ) => {
    return { selCard: state.selCard }
}

export default connect(
    mapStateToProps,
    null
)( Pokemon );