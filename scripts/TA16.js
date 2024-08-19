const p = document.querySelector("p");

const handleClick = () => {
    if (p.hidden == true) {
        p.hidden = false;
    } else {
        p.hidden = true;
    }
};