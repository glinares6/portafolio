# Proyecto 1 Convertidor multimedia

Descarga archivos de video mp4
Descarga archivos de audio mp3,m4a

Muestra una pantalla de previsualización del contenido.

Para iniciar los proyectos luego de descargar (npm/yarn)

    Agragar npm o yarn segun sea el caso.

        npm install
        yarn install

    Las variables de entorno para node se encontraran en :
            .env
                Contiene credenciales que no estan en el proyecto, debe agregarlas para que puedan compilar

    Las variables para la concexion con el servidor desde  react las va encontar en:
            ./src/app.jsx


    Para compilar la parte de react
        npm run dev

    Para compilar la parte de node (backend)
            nodemon app.js


    Si va subir proyectos (node) en produccion debe tener
    las variables de entorno(se debe obtener del archivo .env)
     para agregarlo a railway / heroku .
