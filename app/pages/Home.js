import Charts from "../components/home/charts.js"
import Gallery from "../components/home/Gallery.js"
import Info from "../components/home/Info.js"
import Text from "../components/home/Text.js"
import Title from "../components/home/Title.js"
import hookGallery from "../hooks/hookGallery.js"

const Home = ()=> {

    const webSite = document.getElementById('app')
    webSite.setAttribute('class','home')

    const main = document.createElement('main')
    main.setAttribute('class','home__main')

    webSite.appendChild(main)
    /* main.appendChild(Title()) */
    main.appendChild(Text())
    main.appendChild(Info())
    main.appendChild(Gallery())

    const idGallery = Gallery().id
    hookGallery(idGallery)

    main.appendChild(Charts())

}

export default Home 