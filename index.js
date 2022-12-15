const express = require('express');
const medicoController = require('./controller/MedicoController');

function getMedico() {
    const userList = document.getElementById('medico')
    const url = 'http://localhost:3000/medico'

    try {
        
        fetch(url)
            .then(response => response.json())
            .then(users => {
                users.map(user => {
                    const li = createLi(user.name, user.email, user.telefone)
                    userList.appendChild(li)
                } )
            })

    }
    catch (error) {
        console.log(error)
    }
}

const app = express();
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));

        app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});

createLi()