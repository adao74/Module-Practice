// ES Module (ESM) syntax
// use import & export  (NOT require & module.export())
// file is .mjs not .js
// In terminal: if `node main.mjs` doesn't work, do `node --experimental-modules main.mjs`  =>>>> Note: seems to work w/o experimental modules flag

import _ from 'lodash'

const catchError = (res) => {

    // For errors returned from the ENDPOINT (e.g. fetch todo that doesn't exist) (i.e. doesn't work if the error is due to endpoint typo!!!)
    if(!res.ok) {
        console.log("There's an error")
        throw Error(res.statusText)  // res.statusText is passed into catch as the argument 
    } 
    
    
    return res.json()
}


const getPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( (response) => catchError(response))
    .then(users => {

        users = users.map(user => _.camelCase(user.name))

        const chunked = _.chunk(users, 3)
        console.log(chunked)
    })
    .catch(err => console.log(`Error,  ${err}`)) // for all errors
  }




