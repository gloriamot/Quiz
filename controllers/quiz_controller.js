var express = require('express');
var app = express();

exports.question = function (req, res, next){
	res.render('quizzes/question', {question: 'Capital de Italia'});
};
 exports.check = function(req, res, next){
 	var result = req.query.answer === 'Roma' ? 'Correcta' : 'Incorrecta';
 	res.render('quizzes/result',{result:result});

 };
