const removeFromArray = (arreglo, item) => {
    console.log(arreglo);
    const newArray = arreglo.filter(element => element != item);
    console.log(newArray);
}

removeFromArray([1, 2, 3, 4], 3);