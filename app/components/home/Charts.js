import createElement from "../../helpers/createElement.js";

const Charts = ()=> {

    const grafica = createElement('figure','chart')
    grafica.setAttribute('data-id','myChart')

    const canvas = `<canvas id="myChart" width="500" height="500"></canvas>`

    grafica.innerHTML = canvas
    
    return grafica

}


export default Charts