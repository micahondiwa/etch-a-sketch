const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

function initializeGrid() {
    createGrid(16); // Initial grid size

    resetButton.addEventListener("click", () => {
        let newSize = prompt("Enter the number of squares per side (max 100):");
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    });
}

initializeGrid();
