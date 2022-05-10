const createElement = ( el='', clase='')=> {

    const element = document.createElement(el)
    element.setAttribute('class', clase)

    if(el !== '' & clase !== '') {
        return element
    } else {
        console.error('Debe ingresar como parametros la etiqueta HTML a crear y su clase para los estilos')
    }
    
}

export default createElement