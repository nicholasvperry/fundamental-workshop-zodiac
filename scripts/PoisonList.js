import { usePoison } from "./PoisonDataProvider.js";
import { Poison } from "./Poison.js";


const buildHTML = (objectArray) => {
    let poisonHTMLRepresentation = ""
    for (const singlePoison of objectArray) {
        poisonHTMLRepresentation += Poison(singlePoison)
    }
    return poisonHTMLRepresentation
}


export const poisonList = () => {

    const contentElement = document.querySelector("#poisonContainer")

    const poisonArray = usePoison()
    
    const poisonHtml = buildHTML(poisonArray)


    contentElement.innerHTML += `
    <article class="poisonList">
        <h1>Poison List</h1>
        <br>${poisonHtml}
    

    </article>


    `


}