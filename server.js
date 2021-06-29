const app = require('./index');

const server = app.listen(8000, () => {
    console.log("Listening on port", server.address().port);
});