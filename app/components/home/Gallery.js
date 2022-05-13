import alumnosDb from "../../data/db.js"
import createElement from "../../helpers/createElement.js"
import Card from "./Card.js"

const alumnos = alumnosDb

const Gallery = ()=> {
    console.log(alumnos)

    const gallery = createElement('div','gallery')
    gallery.setAttribute('id','gallery')
    const fragment = document.createDocumentFragment()

    class Infobasica {
        constructor(nombre,img,gender,state,id){
            this.nombre = nombre,
            this.img = img,
            this.gender = gender,
            this.state = state,
            this.id = id 
        }
    }

    alumnos.forEach( ( alumno )=> {

        const infoCard = new Infobasica(
            alumno.name,
            alumno.foto,
            alumno.gender,
            alumno.state,
            alumno.id,
        )

        const card = Card(infoCard)

        fragment.appendChild(card)
    })

    gallery.appendChild(fragment)

    return gallery
}

export default Gallery