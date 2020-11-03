const Question = require("./datamodel")


//creates new
createQuestion = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            //error: 'no question',
        })
    }

    const question = new Question(body)
    if (!question) {
        return res.status(400).json({ success: false, error: err })
    }

    question
        .save()
        .then(() => {
            return res.status(201).json({
                //success: true,
                id: question._id,
                message: "it fucking worked",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "error",
            })
        })
}

//this allows to answer by updating the question field
updateQuestion = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
           // success: false,
            error: "body?",
        })
    }

    Question.findOne({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(404).json({
                err,
                message: "error",
            })
        }
        question.name = body.name
        question.question = body.question
        question
            .save()
            .then(() => {
                return res.status(200).json({
                    //success: true,
                    id: question._id,
                    message: "answer added",
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                   // message: 'Movie not updated!',
                })
            })
    })
}

//deleteQuestion = async (req, res) => {
    //await Question.findOneAndDelete({ _id: req.params.id }, (err, question) => {
    //    if (err) {
    //        return res.status(400).json({ success: false, error: err })
    //    }

   //     if (!question) {
    //        return res
   //             .status(404)
   //             .json({ success: false, error: `Movie not found` })
    //    }
//
   //     return res.status(200).json({ success: true, data: question })
 //   }).catch(err => console.log(err))
//}


//this collect the questions by id so it can be updated
getQuestionById = async (req, res) => {
    await Question.findOne({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!question) {
            return res
                .status(404)
                .json({ success: false, error: "not working" })
        }
        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
}
//This collects all questions
getQuestions = async (req, res) => {
    await Question.find({}, (err, questions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!questions.length) {
            return res
                .status(404)
                .json({ success: false, error: "not working" })
        }
        return res.status(200).json({ success: true, data: questions })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestion,
    updateQuestion,
  //  deleteQuestion,
    getQuestions,
    getQuestionById,
}