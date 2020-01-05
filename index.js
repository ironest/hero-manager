/* Makes all variables from our .env file available in our process */
require('dotenv').config();

/* Establishes the connection to the database */
require("./database/connection");

/* Loads all the core functionalities */
const app = require("./app");

const port = process.env.PORT;

/* Starts the express app */
app.listen(port, () => console.log(`Listening on port ${port}`));
