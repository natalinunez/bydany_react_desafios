export const list = [
    {
        id: 1, 
        name: "Gota cristales", 
        price: 10, 
        categoryId: 1 ,
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.",
        image: require('../images/aretes/aretes-gota-cristales-dorado.jpg')
    },
    {
        id: 2, 
        name: "Rayitos de luz", 
        price: 20, 
        categoryId: 1 ,
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.",
        image: require('../images/aretes/Aretes-rayito.jpg')
    },
    {
        id: 3, 
        name: "Argollas chispas colgantes", 
        price: 25, 
        categoryId: 1 ,
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.",
        image: require('../images/aretes/Argollas-chispa-colgante.jpg')
    },
    {
        id: 4, 
        name: "Argolla cristal con estrellas", 
        price: 35, 
        categoryId: 1 ,
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.",
        image: require('../images/aretes/Argollas-cristal-con-estrellas.jpg')
    },
    {   id: 5,
        name: "Corazón calado plata", 
        price: 30, 
        categoryId: 2, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/collares/cadena-corazon-calado-plata-1228x1536-1.jpg')
    }, 
    {   id: 6,
        name: "Perla cristal", 
        price: 35, 
        categoryId: 2, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/collares/cadena-perla-cristal-1228x1536-1.jpg')
    }, 
    {   id: 7,
        name: "Trinity tree", 
        price: 35, 
        categoryId: 2, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/collares/cadena-trinity-1229x1536-1.jpg')
    }, 
    {  id: 8,
        name: "Mom calado", 
        price: 30, 
        categoryId: 2, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/collares/DSCF5839-1024x859-1.jpg')
    }, 

    {  id: 9,
        name: "María lola", 
        price: 15, 
        categoryId: 3, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/pulseras/Maria-lola-bf.jpg')
    }, 
    {  id: 10,
        name: "Nico corona", 
        price: 15, 
        categoryId: 3, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/pulseras/nico-corona-scaled-1.jpg')
    },
    {  id: 11,
        name: "Pulsera rodeada", 
        price: 25, 
        categoryId: 3, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/pulseras/pulsera_1.jpg')
    }, 
    {  id: 12,
        name: "Julia lola", 
        price: 15, 
        categoryId: 3, 
        description: "Aretes cortos para mujer, en modelo de gotas dorados con piedras brillantes. Úsalos en una cita especial o tu look de diario. Estas gotas son símbolo de pasión y delicadeza.", 
        image: require('../images/pulseras/pulsera_4.jpg')
    } 
]

export const getList = (dataList, timeout) => new Promise ( (result) => 
    setTimeout(() => {
        result(dataList)
    }, timeout)
);

