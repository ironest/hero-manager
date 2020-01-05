/* Makes all variables from our .env file available in our process */
require('dotenv').config();

/* Establishes the connection to the database */
require("./database/connect");

/* Loads all the core functionalities */
const app = require("./app");

/* Starts the express app */
app.listen(process.env.PORT, () => console.log(`Listening on port ${port}`));
