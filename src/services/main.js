

const imprimeArray = (array) => {
        const longitud = array.length;
        const mitad = Math.ceil(longitud / 2);
        
        const primerMitad = array.slice(0, mitad);
        const segundaMitad = array.slice(mitad);

        return [ primerMitad, segundaMitad ]
}

export { imprimeArray}
