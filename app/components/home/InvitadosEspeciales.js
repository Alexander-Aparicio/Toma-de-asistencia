import alumnosDb from "../../data/db.js"
import createElement from "../../helpers/createElement.js"

export const ListaEspecial = (women,man, ...invitados)=>{

    const listaM = createElement('ol','lista-m')
    const listaH = createElement('ol','lista-h')

    const mujeres = createElement('h2','title-lista')
    mujeres.textContent = women
    
    const boxM = createElement('article','box-m')
    
    const hombres = createElement('h2','title-lista')
    hombres.textContent = man

    const boxH = createElement('article','box-h')


    invitados.forEach((el)=>{

        if(el.gender === 'femenino') {
            let li = createElement('li','li')
            li.textContent =  el.name
             listaM.appendChild(li)
        }
        if(el.gender ==='masculino') {
            let li = createElement('li','li')
            li.textContent =  el.name
              listaH.appendChild(li)
        }  
           
    })

    boxH.appendChild(hombres)
    boxM.appendChild(mujeres)
    boxH.appendChild(listaH)
    boxM.appendChild(listaM)

    return{
        boxH,
        boxM
    }

}

const InvitadosEspeciales = ()=>{
    const Section = createElement('section','listado')

    const {boxH, boxM} =ListaEspecial('Mujeres con invitación especial','Hombres con invitación especial', alumnosDb[0],alumnosDb[1], alumnosDb[2],alumnosDb[3],alumnosDb[4],alumnosDb[5])  
    Section.appendChild(boxH)
    Section.appendChild(boxM) 
    return Section
}
export default InvitadosEspeciales

