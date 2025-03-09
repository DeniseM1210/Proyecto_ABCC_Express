'use strict';

const Alumno = require('../models/alumno');

// --- Mostrar todos los alumnos en la vista principal ---
exports.findAll = function(req, res){
    Alumno.findAll(function(err, alumnos){
        if(err)
            res.send(err);
        console.log("Alumno: ", alumnos);
        res.status(200).send(alumnos);
    });
};


// --- Crear nuevo alumno ---
exports.create = function(req, res){
    console.log(req.body.num_control);
    console.log(req.body.nombre);
    console.log(req.body.primer_ap);
    console.log(req.body.segundo_ap);
    console.log(req.body.fecha_nac);
    console.log(req.body.semestre);
    console.log(req.body.carrera);

    //Verificar que no esten vacios los campos
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, message: 'Falta informacion'});
    }else{
        const a = {
            Num_Control : req.body.num_control,
            Nombre : req.body.nombre,
            Primer_Ap : req.body.primer_ap,
            Segundo_Ap : req.body.segundo_ap,
            Fecha_Nac : req.body.fecha_nac,
            Semestre : req.body.semestre,
            Carrera : req.body.carrera,

        }

        const alumno = new Alumno(a);

        Alumno.create(alumno, function(err, alumno){
            console.log("Guardando alumno", req.body);
            if(err)
                res.send(err);
            req.flash('message', 'Alumno creado con exito');
            res.redirect('/');
        });
    }

};

// --- Eliminar alumn ---

exports.delete = function (req, res){
    Alumno.delete(req.params.id, function(err){
        if(err)
            res.send(err);
        req.flash('message', 'Alumno eliminado con exito');
        res.redirect('/');
    });
};

// --- Modificar alumno ---

exports.update = function(req, res){
    console.log(req.body.num_control);
    console.log(req.body.nombre);
    console.log(req.body.primer_ap);
    console.log(req.body.segundo_ap);
    console.log(req.body.fecha_nac);
    console.log(req.body.semestre);
    console.log(req.body.carrera);

    //Verificar que no esten vacios los campos
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, message: 'Falta informacion'});
    }else{
        const a = {
            numControl : req.body.num_control,
            nombre : req.body.nombre,
            primerAp : req.body.primer_ap,
            segundoAp : req.body.segundo_ap,
            fechaNac : req.body.fecha_nac,
            semestre : req.body.semestre,
            carrera : req.body.carrera,

        }

        const alumno = new Alumno(a);

        Alumno.update(req.params.id, alumno, function(err, alumno){
            console.log("Modificando alumno", req.body);
            if(err)
                res.send(err);
            req.flash('message', 'Alumno creado con exito');
            res.redirect('/');
        });
    }
};

exports.findById = function(req, res){
    Alumno.findById(req.params.id, function(err, alumno){
        if(err)
            res.send(err);
        res.json(alumno);
    });
};