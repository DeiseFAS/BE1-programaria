const express = require("express")
const router = express.Router()

 const app = express()
 const porta = 3000

 const mulheres = [
    {
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'   
    },
    {
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'
    }
   ]

 function mostraMulheres(request, response) {
    response.json(mulheres)
 }

 function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta) 
 }

 app.use(router.get('/mulheres', mostraMulheres))
 app.listen(porta, mostraPorta) 