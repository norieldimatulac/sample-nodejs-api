const makeTokenHello = require('./routes/hello');
const makeApp = require('./app');
const log = require('./logger');

const app = makeApp();
const helloRoutes = makeTokenHello();

app.use('/hello', helloRoutes);

app.listen(process.env.API_PORT || '8081', () => {

    log.info(`Server is running on port: ${process.env.API_PORT || '8081'}`)

});