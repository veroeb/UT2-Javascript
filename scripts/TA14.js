const input = document.querySelector("input");
const button = document.querySelector("button.btn-add-element");
const list = document.querySelector("ul.list");

const handleClick = () => {
    const text = input.value.trim();

    if (text !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = text;

        list.appendChild(newItem);

        input.value = "";
    }

}

// button.addEventListener("click", function() {
//     const text = input.value.trim();

//     if (text !== "") {
//         const newItem = document.createElement("li");
//         newItem.textContent = text;

//         list.appendChild(newItem);

//         input.value = "";
//     }

//     input.focus();
// }
// );
