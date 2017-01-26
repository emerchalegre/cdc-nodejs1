const mysql = require('mysql')

function createDBConnection() {
	if(!process.env.NODE_ENV || process.env.node === 'dev') 
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo_nodejs'
		})

	if (process.env.NODE_ENV == 'test') 
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs_teste'
        });
    
    if (process.env.NODE_ENV == 'production') 
        return mysql.createConnection({
            host: process.env.IP,
            user: process.env.C9_USER,
            password: '',
            database: 'casadocodigo_nodejs'
        });
}

module.exports = function() {
	return createDBConnection
}