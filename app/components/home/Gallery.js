import alumnosDb from "../../data/db.js"
import createElement from "../../helpers/createElement.js"
import Card from "./Card.js"

const alumnos = alumnosDb

const Gallery = ()=> {
    console.log(alumnos)

    const gallery = createElement('div','gallery')
    gallery.setAttribute('id','gallery')
    const fragment = document.createDocumentFragment()

    alumnos.forEach( ( alumno )=> {

        const infoCard = {
            img:alumno.foto,
            nombre:alumno.name,
            state: alumno.state,
            id:alumno.id,
            gender:alumno.gender
        }

        const card = Card(infoCard)

        fragment.appendChild(card)
    })

    gallery.appendChild(fragment)

    return gallery
}

export default Gallery