/** @type {HTMLDivElement} */

function createGrid() {
    const container = document.getElementById("container");


    function createCell() {
        const cell = document.createElement("div");
        cell.setAttribute("class", "square");
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



    for (let i = 0; i<16; i++) {
        container.appendChild(createCell());
        for (let j = 0; j<15; j++){
            container.appendChild(createCell()); 
        }
    }




}

createGrid();