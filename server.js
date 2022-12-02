const makeTokenHello = require('./routes/hello');
const makeApp = require('./app');
const log = require('./logger');

const app = makeApp();
const helloRoutes = makeTokenHello();

app.use('/hello', helloRoutes);

app.listen(process.env.API_PORT || '9000', () => {

    log.info(`Server is running on port: ${process.env.API_PORT || '9000'}`)

});
