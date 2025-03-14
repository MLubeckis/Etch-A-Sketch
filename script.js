/** @type {HTMLDivElement} */

function createGrid(x) {
    const container = document.getElementById("container");
    container.innerHTML = ""

    function createCell(x) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "square");
        cell.style.width = `${480 / x}px`
        cell.style.height = `${480 / x}px`
        cell.addEventListener("mouseenter", function(){
            cell.style.backgroundColor = "#b1b1b1";
            cell.style.transition = "0s ease";
        })
        cell.addEventListener("mouseleave", function(){
            cell.style.backgroundColor = "transparent";
            cell.style.transition = "1s ease";
        })
        //cell.textContent = content;
        return cell;
    }




    for (let i = 0; i<x; i++) {
        container.appendChild(createCell(x));
        for (let j = 0; j<x-1; j++){
            container.appendChild(createCell(x)); 
        }
    }




}

createGrid(16);

document.querySelector("#setGridSize").addEventListener("click", setGridSize);

function setGridSize() {
    let size = Number(prompt("Enter the grid size you want"));
    if (size <= 100) {
    createGrid(size);
    } else {alert("Too Large, Will crash!")}
}