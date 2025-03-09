'use strict';

const mysql = require('mysql');

const conexion = mysql.createConnection({
    // --- local ---
    //host: 'localhost',
    //user: 'root',
    //password: '',
    //database: 'BD_Express_2025'

    // --- en linea ---
    
    host: 'sql10.freesqldatabase.com',
    user: 'sql10766658',
    password: '8FmwvyhmUM',
    database: 'sql10766658'
    
});

conexion.connect(function(err){
    if(err) 
        throw err;
    console.log('Conexion a BD con exito');
});
module.exports = conexion;
