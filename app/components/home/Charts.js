import createElement from "../../helpers/createElement.js";

const Charts = ()=> {

    const grafica = createElement('figure','chart')
    grafica.setAttribute('data-id','myChart')


    const canvas = `<canvas id="myChart" width="400" height="400"></canvas>`

    grafica.innerHTML = canvas

    return grafica

}


export default Charts