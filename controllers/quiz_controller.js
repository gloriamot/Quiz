var models = require('../models');

exports.question = function (req, res, next){
	models.Quiz.findOne().then(function(quiz){ 
	if (quiz) {
		var answer = req.query.answer || '';
		res.render('quizzes/question', {question: quiz.question,
								                answer: answer});
		    } else {
		    	throw new Error('No hay preguntas en la BBDD.');
		    }
		}).catch(function(error) {
			next(error);});
	
};

 exports.check = function(req, res, next){
 	models.Quiz.findOne() // Busca la primera pregunta existente
		.then(function(quiz) {
			if (quiz) {
				var answer = req.query.answer || "";
				res.render('quizzes/result', { result: result, 
											   answer: answer });
		    } else {
		    	throw new Error('No hay preguntas en la BBDD.');
		    }
		}).catch(function(error) {	next(error);});
};
