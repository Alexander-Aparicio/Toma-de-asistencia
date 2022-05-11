import Charts from "../components/home/charts.js"
import alumnosDb from "../data/db.js"
import hookGrafica from "../helpers/hookGrafica.js"

const hookGallery = (idGallery)=> {

    const d = document
    let registro = []
    let caballeros = []
    let damas = []
    
    d.getElementById(`${idGallery}`).addEventListener('click', (e)=>{   
console.log(e);
        console.log(e.target.tagName)

        if( e.target.tagName === 'IMG' ) {


            const presentes = d.getElementById('presentes')
            const hombres = d.getElementById('varones')
            const mujeres = d.getElementById('mujeres')

            const el = d.querySelector(`.${e.target.id}`)

            let state = el.textContent

            const id = e.target.id

            if(state === 'Ausente') {

                el.textContent = 'Presente'
                el.classList.toggle('present');

                e.target.classList.toggle('check')

                const presente = alumnosDb.filter((el)=> el.id === id)

                registro.push(presente[0])

                presentes.textContent = `Asistieron: ${registro.length}`
                presente[0].gender === 'femenino'
                ? damas.push(presente[0])
                :caballeros.push(presente[0])

                hombres.textContent = `Varones: ${caballeros.length}`
                mujeres.textContent = `Mujeres: ${damas.length}`

                const idCanva = Charts().dataset.id
                hookGrafica(idCanva, `${caballeros.length}`,`${damas.length}`)
            } else {               
                Swal.fire({
                    title: 'Desea volver a su estado Ausente?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, volver!',
                    cancelButtonText: 'Cancelar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        el.textContent = 'Ausente'
                        e.target.classList.toggle('check')
                        
                        registro = registro.filter((el)=>{
                            return el.id !== id
                        })
    
                        damas = damas.filter((el)=>{
                            return el.id !== id
                        })
    
                        caballeros = caballeros.filter((el)=>{
                            return el.id !== id
                        })
    
                        console.log(registro.length)
                        presentes.textContent = `Presentes: ${registro.length}`
                        hombres.textContent = `Varones: ${caballeros.length}`
                        mujeres.textContent = `Mujeres: ${damas.length}`
                    }
                  })
            }
        }
     
    })

}

export default hookGallery