/* PERMUTE */
let string = "abcd";

let permute = ( string, result ) => {
    if( string.length == 0 ) {
        console.log( result );
    }

    for( let i = 0; i < string.length; i++ ) {
        let rest = string.substring( 0, i ) + string.substring( i + 1 );
        permute( rest, result + string[ i ])
    }
}

/* PALINDROME */
let palindrome = ( string ) => {
    let global = /[\W_]/g;
    let globalStr = string.toLowerCase().replace( global, "" );

    let destructWord = globalStr.split("").reverse().join("");
    if( destructWord === globalStr ) {
        console.log( true );
    } else { console.log( false)}
}

palindrome( "____Seyes_" );
palindrome( "!_hhh__!" );
palindrome( "!_____hhh__!" );
palindrome( "racecar" );
palindrome( "Rcecar" );

// let palindrome = ( string ) => {
//     let destructWord = string.split("").reverse().join("");
//     if( destructWord === string ) {
//         console.log( true );
//     } else { console.log( false)}
// }