import createElement from "../../helpers/createElement.js"

const Card = (infoCard={img, nombre, state, id, gender})=> {

    const card = createElement('figure','card')

    const img = createElement('img','imagen')
    img.setAttribute('src', infoCard.img)
    img.setAttribute('alt', infoCard.nombre)
    img.setAttribute('id', `${infoCard.id}`)

    const description = createElement('figcaption', `description`)
    const name = createElement('h2','h2')
    name.textContent = `${infoCard.nombre}`

    const state = createElement('p',`state ${infoCard.id} ${infoCard.gender}` )
    state.textContent = infoCard.state

    description.appendChild(name)
    description.appendChild(state)
    
    card.appendChild(img)
    card.appendChild(description)

    return card 

}

export default Card