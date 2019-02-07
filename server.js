const express = require('express'),
    exphbs = require('express-handlebars'),
    hbsHelpers = require('handlebars-helpers'),
    hbsLayouts = require('handlebars-layouts'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    compression = require('compression'),
    enforce = require('express-sslify'),
    router = require('./routes/router'),    
    app = express(),

    port = process.env.PORT || 3000;
    

class Server {

    constructor() {
        this.initViewEngine();
        this.initExpressMiddleWare();
        this.initCustomMiddleware();     
        this.initRoutes();
        this.start();
    }

    start() {
        // app.use(enforce.HTTPS({ trustProtoHeader: true }));
        app.use((req, res, next) => {
            if (req.header('x-forwarded-proto') !== 'https')
                res.redirect(`https://${req.header('host')}${req.url}`)
            else
                next()
        });
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', port);
        });
    }

    initViewEngine() {
        const hbs = exphbs.create({
            extname: '.hbs',
            defaultLayout: 'master'
        });
        app.engine('hbs', hbs.engine);
        app.set('view engine', 'hbs');
        hbsLayouts.register(hbs.handlebars, {});
    }

    initExpressMiddleWare() {
        app.use(compression()); // gzip
        app.use(favicon(__dirname + '/public/assets/images/favicon.ico'));
        app.use(express.static(__dirname + '/public'));
        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(errorhandler());
        app.use(cookieParser());

        // app.use(csrf({ cookie: true }));

        // app.use((req, res, next) => {
        //     let csrfToken = req.csrfToken();
        //     res.locals._csrf = csrfToken;
        //     res.cookie('XSRF-TOKEN', csrfToken);
        //     next();
        // });

        process.on('uncaughtException', (err) => {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', () => {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }

   

    initRoutes() {
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
        app.all('/*', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
    }

}

//module.exports = Server;
let server = new Server();