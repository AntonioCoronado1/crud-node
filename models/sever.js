const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPatch = '/api/usuarios';
        this.authPatch = '/api/auth';
        this.inmueblesPatch = '/api/inmuebles';
        this.oficinasPatch = '/api/oficinas';
        this.clientesPatch = '/api/clientes';
        this.visitasPatch = '/api/visitas';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.authPatch,require('../routes/auth'));
        this.app.use( this.usuariosPatch,require('../routes/usuarios'));
        this.app.use(this.inmueblesPatch,require('../routes/inmuebles'));
        this.app.use(this.oficinasPatch,require('../routes/oficinas'));
        this.app.use(this.clientesPatch,require('../routes/clientes'));
        this.app.use(this.visitasPatch,require('../routes/visitas'));
        // this.app.get('/api', (req, res) =>{
        //     res.status(200).json({
        //         msg:'get api'
        //     });
        // });
        // this.app.put('/api', (req, res) =>{
        //     res.json({
        //         msg:'put api'
        //     });
        // });
        // this.app.post('/api', (req, res) =>{
        //     res.status(201).json({
        //         msg:'post api'
        //     });
        // });
        // this.app.delete('/api', (req, res) =>{
        //     res.json({
        //         msg:'delete api'
        //     });
        // });
    }
    listen(){
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }
}
module.exports = Server;