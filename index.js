const app = require("./app");

/* Make all variables from our .env file available in our process */
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
