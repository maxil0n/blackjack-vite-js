import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCarta ejemplo:      ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if ( !tiposCarta ) throw new Error("tiposCarta es obligatorio");
    if ( tiposCarta.length === 0 ) throw new Error("tiposCarta tiene que ser un arreglo de string");

    if ( !tiposEspeciales ) throw new Error("tiposEspeciales es obligatorio");
    if ( tiposEspeciales.length === 0 ) throw new Error("tiposEspeciales tiene que ser un arreglo de string");

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

export default crearDeck;