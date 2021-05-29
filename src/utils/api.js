import axios from 'axios'



function createUser(user) {
    axios.post('https://unorganisedsectorbackbnd.herokuapp.com/API', user)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

export {createUser}