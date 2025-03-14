/** @type {HTMLDivElement} */

function createGrid(x) {
    const container = document.getElementById("container");
    container.innerHTML = ""

    function createCell(x) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "square");
        cell.style.opacity = 0;
        cell.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        cell.style.width = `${480 / x}px`
        cell.style.height = `${480 / x}px`
        cell.addEventListener("mouseenter", function(){
            const opacity = cell.style.opacity;
            cell.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            cell.style.opacity = Number(opacity) + 0.1;
            // cell.style.transition = "3s ease";
        })
        // cell.addEventListener("mouseleave", function(){
        //     cell.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        //     cell.style.transition = "1s ease";
        // })
        //cell.textContent = content;
        return cell;
    }

    function random(number) {
        return Math.floor(Math.random() * (number+1));
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