// import json server

const jsonserver=require( "json-server")

//import cors

const cors= require('cors')

//creation of json server

const server= jsonserver.create()

    //json  type data  to - js type data -  before request resolving

    const middleware=jsonserver.defaults()

// create routing

const router=jsonserver.router("db.json")
    //apply in server

    server.use(middleware)
    server.use(router)
    server.use(cors ())

    //seting port for runing
    const PORT=5001
    server.listen(PORT,()=>{

        console.log(`______Json Server Started at the Port:${PORT}___`);
    })
