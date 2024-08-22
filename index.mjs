// if `node index.mjs` doesn't work, do `node --experimental-modules index.mjs`    =>>>> Note: seems to work w/o experimental modules flag
// Then go to localhost:5000


import express from 'express'
import { sayHi } from './hello/index.mjs'  // need file name even though it was named index
import sayBye from './hello/index2.mjs' // don't need brackets because was exported as a default 

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello ' + sayHi + sayBye)
});

const port = 5000;

// console is terminal, not browser console
app.listen(port, () => console.log(`Server started on port ${port}`));