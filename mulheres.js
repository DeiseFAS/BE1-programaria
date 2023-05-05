const { request, response } = require("express")
const express = require("express") //iniciando o express
const router = express.Router()//configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')//biblioteca do identificador 

 const app = express()//iniciando o app
 app.use(express.json())

 const porta = 3000//criando a porta

//criando lista inicial de mulheres
 const mulheres = [
    {
        id: '1',
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'
    },
    {
        id: '2',
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'   
    },
    {
        id: '3',
        nome: 'Deise Andrade',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora'
    }
   ]

//GET
 function mostraMulheres(request, response) {
    response.json(mulheres)
 }

//POST
 function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),//id gerado automaticamente por causa da biblioteca
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)

 }

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
       if(mulher.id !== request.params.id) {
       return mulher 
       }
    }
    
    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/mulheres', mostraMulheres))//configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher))//configurei rota Post/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))//configurei rota PATC /mulheres/id
app.use(router.delete('/mulheres/:id', deletaMulher))//configurei rota DELETE /mulheres

 //PORTA
 function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta) 
 }

 
 app.listen(porta, mostraPorta) //servidor ouvindo a porta