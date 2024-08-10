// if `node index.mjs` doesn't work, do `node --experimental-modules index.mjs`    =>>>> Note: seems to work w/o experimental modules flag

import express from 'express'
import { sayHi } from './hello/index.mjs'  // need file name even though it was named index
import getPosts from './main.mjs' // don't need brackets around getPosts because was exported as a default 

const app = express();

app.get('/', (req, res) => {
    getPosts() // Ran with node => console.log prints in terminal NOT browser console. Each time, you navigate to localhost, getPosts() runs again...
    return res.send('Hello ' + sayHi)
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));