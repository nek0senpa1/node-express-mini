// implement your API here
const express = require ('express');

const server = express();

// middleware
server.use(express.json());

const db = require ('./data/db.js');

server.get('/',(req, res) => {
    res.send('Well, I just copied and pasted the first 13 lines because I don\'t understand them...')
})


server.get('/users', (req, res) => {
    db
    .find()
    .then( stuff => {
        res.status(200).json(stuff);
    })
    .catch( random => {
        console.log( random ,'Dang it, Bobby')
    })
})


server.post('/users', (req, res) => {
    var widget = req.body
    
    db
    .insert(widget)
    .then( wife => {
        res.status(201).json({
            success: true,
            wife
        })
    })
    .catch( something => {
        console.log('Invalid thingie sent to us, Hoss!')
    })

})


server.delete('/users/:id', (req, res) => {
    const whoDunWhat = req.params.id 

    db
    .remove(whoDunWhat)
    .then( yay => {
        console.log('you done did it now!!!')
        res.status(204).end()
    })
    .catch( something => {
        console.log('Invalid thingie sent to us, Hoss!')
    })
})


server.put('/users/:id', (req, res) => {
    const thing = req.params.id;
    const changesToThing = req.body;

    db
    .update(thing, changesToThing)
    .then (wowey => {
        if (wowey) {
            res.status(200).json({
                success: true,
                wowey 
            })
        }
        else {
            res.status(404).json({
                success:false,
                message: 'To Quote The Server, Error 404!'
            })
        }
    })
})


server.listen(9000, () => {
    console.log('Server Running on http:localhost:OVER9000!')
})