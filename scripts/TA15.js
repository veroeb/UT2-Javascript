const input = document.querySelector("input");
const list = document.querySelector("ul.list");

const handleClickAdd = () => {
    const text = input.value.trim();

    if (text !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = text;

        list.appendChild(newItem);

        input.value = "";
    }

}

const handleClickRemove = () => {
    list.removeChild(list.lastElementChild)
}