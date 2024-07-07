import { faker } from "@faker-js/faker";

const generarProductos = () => {
   
    return{ 
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: parseInt(faker.string.numeric()),
        description: faker.commerce.productDescription()
    }
}





export const generarUsuarios = () => {
    const numeroDeProuctos = parseInt(faker.string.numeric());
    let products = [];
    for (let i = 0; i < numeroDeProuctos; i++) {
        products.push(generarProductos());
    }
    return{
        id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sex(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        products
    }
}

