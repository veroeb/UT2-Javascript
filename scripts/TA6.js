const convertToCelsius = (temp) => {
    console.log(((temp - 32)/1.8).toFixed(1));
    
};

const convertToFahrenheit = (temp) => {
    console.log(((temp * 1.8) + 32).toFixed(1));
};

convertToCelsius(100);
convertToFahrenheit(20);