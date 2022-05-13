import createElement from "../../helpers/createElement.js"

const Card = (infoCard)=> {

    const {img, nombre, state, id, gender} = infoCard

    const card = createElement('figure','card')

    const Img = createElement('img','imagen')
    Img.setAttribute('src', img)
    Img.setAttribute('alt', nombre)
    Img.setAttribute('id', `${id}`)

    const description = createElement('figcaption', `description`)
    const name = createElement('h2','h2')
    name.textContent = `${nombre}`

    const State = createElement('p',`state ${id} ${gender}` )
    State.textContent = state

    description.appendChild(name)
    description.appendChild(State)
    
    card.appendChild(Img)
    card.appendChild(description)

    return card 

}

export default Card