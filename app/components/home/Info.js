import alumnosDb from "../../data/db.js"
import createElement from "../../helpers/createElement.js"

const Info = ()=> {
    
    const elements = document.querySelectorAll('.check')
    console.log(elements)
    const datos = createElement('ul','datos')

    const totalInvitados = createElement('i', 'dato')
    totalInvitados.setAttribute('id','total-invitados')
    totalInvitados.textContent = `Total Participantes: ${alumnosDb.length}` 

    const totalVarones = createElement('i', 'dato')
    totalVarones.setAttribute('id','total-varones')
    totalVarones.textContent = `Total Varones: 
    ${alumnosDb.filter((el)=> el.gender ==='masculino').length}`

    const totalMujeres = createElement('i', 'dato')
    totalMujeres.setAttribute('id','total-damas')
    totalMujeres.textContent = `Total Mujeres: 
    ${alumnosDb.filter((el)=> el.gender ==='femenino').length}`

    const presentes = createElement('i', 'dato')
    presentes.setAttribute('id','presentes')
    presentes.textContent = `Asistieron: 0`

    const hombresPresentes = createElement('i', 'dato')
    hombresPresentes.setAttribute('id','varones')
    hombresPresentes.textContent = `Varones: 0`

    const mujeresPresentes = createElement('i', 'dato')
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