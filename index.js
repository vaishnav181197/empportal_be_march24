const jsonServer=require('json-server')

const server=jsonServer.create()

const middleware=jsonServer.defaults()
const routes=jsonServer.router('db.json')

server.use(middleware)
server.use(routes)

const PORT=3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log("Server running at :",PORT)
})