const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

module.exports = function() {
	let app = express()

	app.use(express.static('./app/public'));
	app.set('view engine', 'ejs')
	app.set('views', './app/views')

	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
	app.use(expressValidator())

	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app)

	app.use(function(req,res,next){
	    res.staus(404),render('erros/404')
	    next()
	})

	app.use(function(error,req,res,next){
	    if (process.env.NODE_ENV == 'production') {
	    	res.staus(500),render('erros/404')
	    	return
	    }
	    next(error)
	})	

	return app
}