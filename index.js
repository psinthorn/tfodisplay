const app = require('./app');
const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`F2-Display Server started on ${port}`);
});
