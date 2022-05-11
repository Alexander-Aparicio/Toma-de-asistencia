import alumnosDb from "../../data/db.js"
import createElement from "../../helpers/createElement.js"

const Info = ()=> {
    
    const elements = document.querySelectorAll('.check')
    console.log(elements)
    const datos = createElement('ul','datos')

    const totalInvitados = createElement('li', 'dato')
    totalInvitados.setAttribute('id','total-invitados')
    totalInvitados.textContent = `Total Invitados: ${alumnosDb.length}` 

    const totalVarones = createElement('li', 'dato')
    totalVarones.setAttribute('id','total-varones')
    totalVarones.textContent = `Varones: 
    ${alumnosDb.filter((el)=> el.gender ==='masculino').length}`

    const totalMujeres = createElement('li', 'dato')
    totalMujeres.setAttribute('id','total-damas')
    totalMujeres.textContent = `Mujeres: 
    ${alumnosDb.filter((el)=> el.gender ==='femenino').length}`

    const presentes = createElement('li', 'dato presentes')
    presentes.setAttribute('id','presentes')
    presentes.textContent = `Asistieron: 0`

    const hombresPresentes = createElement('li', 'dato varones')
    hombresPresentes.setAttribute('id','varones')
    hombresPresentes.textContent = `Varones: 0`

    const mujeresPresentes = createElement('li', 'dato mujeres')
    mujeresPresentes.setAttribute('id','mujeres')
    mujeresPresentes.textContent = `Mujeres: 0`

    datos.appendChild(totalInvitados)
    datos.appendChild(presentes)
    datos.appendChild(totalVarones)
    datos.appendChild(hombresPresentes)
    datos.appendChild(totalMujeres)
    datos.appendChild(mujeresPresentes)

    return datos
}

export default Info 