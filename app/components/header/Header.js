const Header = ()=>{
    console.log('hola mundo')
    const d = document
    const webSite = d.getElementById('app')
    const header = d.createElement('header')
    header.setAttribute('class','header')
    const appName = d.createElement('p')
    appName.setAttribute('class','name')
    appName.textContent = 'App de Asistencia'

    webSite.appendChild(header)
    header.appendChild(appName)
    
}

export default Header