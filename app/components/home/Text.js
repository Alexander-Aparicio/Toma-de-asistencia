import createElement from "../../helpers/createElement.js"

const Text = ()=> {

    const p = createElement('p','indicaciones')
    p.textContent = 'Debe hacer click en la fotografía del invitado para marcar su asistencia.'

    return p 

}

export default Text