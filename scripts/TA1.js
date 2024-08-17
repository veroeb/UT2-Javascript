const repeatString = (texto, repeticiones) => {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
};

const repeatString1 = (texto, repeticiones) => {
    console.log(`${texto}\n`.repeat(repeticiones));
};


repeatString1("Hola que tal", 3);