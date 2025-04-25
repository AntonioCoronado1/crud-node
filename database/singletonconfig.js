const mongoose = require('mongoose');

class SingletondbConnection{
    constructor(){
        if (SingletondbConnection.instance) {
            return SingletondbConnection.instance;
        }
        this.connection = null;
        SingletondbConnection.instance = this;
    }
    async dbConnection(uri){
        if (!this.connection) {
            try{
                this.connection = await mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology:true,
                });
                console.log('La Base de Datos conectada por Singleton')
            } catch(error){
                console.log(error);
                throw new Error('Error al iniciar la base de datos');
            }
        } 
    }
    getConnection() {
        return this.connection;
      }
}

module.exports = new SingletondbConnection();
