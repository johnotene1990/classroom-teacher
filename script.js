
/* =====================================
   1. GET HTML ELEMENTS
===================================== */

const pointingArm = document.getElementById("pointingArm");
const circleMark = document.getElementById("circleMark");
const underlineMark = document.getElementById("underlineMark");
const status = document.getElementById("status");

const numbers = document.querySelectorAll(".number");
const numberButtons = document.querySelectorAll("[data-select]");


/* =====================================
   2. NUMBER POSITIONS
===================================== */

const positions = {
    1: { x: 390, y: 216 },
    2: { x: 510, y: 216 },
    3: { x: 630, y: 216 },
    4: { x: 750, y: 216 },
    5: { x: 450, y: 316 },
    6: { x: 650, y: 316 }
};

let selectedNumber = 1;


/* =====================================
   3. SELECT A NUMBER
===================================== */

function selectNumber(number) {

    selectedNumber = Number(number);

    numbers.forEach(item => {

        item.classList.toggle(
            "selected",
            Number(item.dataset.number) === selectedNumber
        );

    });

    numberButtons.forEach(button => {

        button.classList.toggle(
            "active",
            Number(button.dataset.select) === selectedNumber
        );

    });

    status.textContent =
        "Number " + selectedNumber + " selected.";

}


/* Listen for number button clicks */

numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectNumber(button.dataset.select);

    });

});


/* Allow clicking numbers directly on the board */

numbers.forEach(item => {

    item.addEventListener("click", () => {

        selectNumber(item.dataset.number);

    });

});


/* =====================================
   4. POINT AT SELECTED NUMBER
===================================== */

document.getElementById("pointBtn").addEventListener("click", () => {

    const target = positions[selectedNumber];

    pointingArm.setAttribute("x2", target.x - 25);
    pointingArm.setAttribute("y2", target.y);

    status.textContent =
        "The teacher is pointing at number " + selectedNumber + ".";

});


/* =====================================
   5. CIRCLE SELECTED NUMBER
===================================== */

document.getElementById("circleBtn").addEventListener("click", () => {

    const target = positions[selectedNumber];

    circleMark.setAttribute("cx", target.x);
    circleMark.setAttribute("cy", target.y);

    circleMark.classList.add("show");

    underlineMark.classList.remove("show");

    status.textContent =
        "The teacher has circled number " + selectedNumber + ".";

});


/* =====================================
   6. UNDERLINE SELECTED NUMBER
===================================== */

document.getElementById("underlineBtn").addEventListener("click", () => {

    const target = positions[selectedNumber];

    underlineMark.setAttribute(
        "d",
        `M ${target.x - 42} ${target.y + 40}
         L ${target.x + 42} ${target.y + 40}`
    );

    underlineMark.classList.add("show");

    circleMark.classList.remove("show");

    status.textContent =
        "The teacher has underlined number " + selectedNumber + ".";

});


/* =====================================
   7. EXPLAIN SELECTED NUMBER
===================================== */

document.getElementById("explainBtn").addEventListener("click", () => {

    const explanations = {

        1: "One is the first counting number.",
        2: "Two means one plus one.",
        3: "Three comes after two.",
        4: "Four is two plus two.",
        5: "Five is half of ten.",
        6: "Six is three plus three."

    };

    status.textContent =
        "Number " + selectedNumber + ": " +
        explanations[selectedNumber];

    const target = positions[selectedNumber];

    pointingArm.setAttribute("x2", target.x - 25);
    pointingArm.setAttribute("y2", target.y);

});


/* =====================================
   8. WAVE HAND
===================================== */

document.getElementById("waveBtn").addEventListener("click", () => {

    pointingArm.setAttribute("x2", 205);
    pointingArm.setAttribute("y2", 175);

    status.textContent =
        "Hello class! Welcome to mathematics.";

});


/* =====================================
   9. ERASE MARKINGS
===================================== */

document.getElementById("eraseBtn").addEventListener("click", () => {

    circleMark.classList.remove("show");
    underlineMark.classList.remove("show");

    status.textContent =
        "The board marking has been erased.";

});


/* =====================================
   10. CLEAR BOARD
===================================== */

document.getElementById("clearBtn").addEventListener("click", () => {

    circleMark.classList.remove("show");
    underlineMark.classList.remove("show");

    pointingArm.setAttribute("x2", 220);
    pointingArm.setAttribute("y2", 190);

    status.textContent =
        "The board is now clean.";

});


/* =====================================
   11. MOVE TO NEXT NUMBER
===================================== */

document.getElementById("nextBtn").addEventListener("click", () => {

    const next = selectedNumber === 6
        ? 1
        : selectedNumber + 1;

    selectNumber(next);

    const target = positions[next];

    pointingArm.setAttribute("x2", target.x - 25);
    pointingArm.setAttribute("y2", target.y);

});
