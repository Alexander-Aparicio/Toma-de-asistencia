import createElement from "../../helpers/createElement.js"

const Title = ()=> {

    const h1 = createElement('h1','h1')
    h1.textContent = 'Lista de invitados'

    return h1
}

export default Title