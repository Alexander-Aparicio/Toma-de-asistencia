import createElement from "../../helpers/createElement.js"

const Text = ()=> {

    const p = createElement('p','indicaciones')
    p.textContent = 'Debe hacer click en la fotografía del alumno para marcar su asistencia.'

    return p 

}

export default Text