const mongoose = require ('mongoose');
const dbConection = async() => {
    try {
        console.log('Conection a base de datos..');
        await mongoose.connect('mongodb://localhost:27017/ProyectoFinal_dw', {
    
        });
        console.log('conexion a la base de datos exitosa');
    } catch (error){

    throw new Error(error);

    }
}

module.exports = {
    dbConection
}