const express = require('express');
const http = require('http');
const path = require('path');
const router = require('./routes/routes.js');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(router);
app.use(express);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
}); 

/* const express = require('express');
const { ApolloServer } = require ('apollo-server-express');

const app = express();
const PORT =process.env.PORT || 3001;
const server = new ApolloServer({

})

const startApolloServer = async () */

