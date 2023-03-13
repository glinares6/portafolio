import express,{Application} from 'express'
import  userRoutes from '../routes/usuario';

import cors from 'cors'

class Server{

    // private app:express.Application;
    private app:Application;
    private port:string
    private apiPaths=({
        usuarios: '/api/usuarios'
    })


    constructor(){
        this.app= express()
        this.port = process.env.PORT || '8000'


        //metodos iniciales
        this.middlewares()

        //definir mis rutas
        this.routes()
    }


    //todo Conectar base de datos

    middlewares(){

        //CORS
        this.app.use(cors())

        // lectura del body
        this.app.use(express.json())
        
        //carpeta del public
        this.app.use(express.static("public"))
    }
    
    
    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }
    listen(){
        this.app.listen(this.port,() =>{
            console.log('servidor corriendo en puerto'+ this.port);
            
        })
    }
}

export default Server