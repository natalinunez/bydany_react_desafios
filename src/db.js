export const list = [
    {
        id: 1, 
        name: "Gota cristales", 
        price: 10, 
        category: "aretes",
        image: require('./images/aretes/aretes-gota-cristales-dorado.jpg')
    },
    {
        id: 2, 
        name: "Rayitos de luz", 
        price: 20, 
        category: "aretes",
        image: require('./images/aretes/Aretes-rayito.jpg')
    },
    {
        id: 3, 
        name: "Argollas chispas colgantes", 
        price: 25, 
        category: "aretes",
        image: require('./images/aretes/Argollas-chispa-colgante.jpg')
    },
    {
        id: 4, 
        name: "Argolla cristal con estrellas", 
        price: 35, 
        category: "aretes",
        image: require('./images/aretes/Argollas-cristal-con-estrellas.jpg')
    },
    {
        id: 5, 
        name: "argollas delgaditas", 
        price: 33, 
        category: "aretes",
        image: require('./images/aretes/Argollas-delgaditas-14mm.jpg')
    },
    {
        id: 6, 
        name: "Argolla doble cadena", 
        price: 16, 
        category: "aretes",
        image: require('./images/aretes/Argollas-doble-cadena.jpg')
    },
    {
        id: 7, 
        name: "Argolla doble", 
        price: 14, 
        category: "aretes",
        image: require('./images/aretes/Argollas-doble.jpg')
    }
];

export const getList = (dataList, timeout) => new Promise ( (result) => 
    setTimeout(() => {
        result(dataList)
    }, timeout)
);

