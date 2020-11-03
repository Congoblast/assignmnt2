
const express = require("express");
const dataDB = require("./dataDB");
const router = express.Router()

router.post("/question", dataDB.createQuestion);

router.get("/question/:id", dataDB.getQuestionById);

router.get("/questions", dataDB.getQuestions);
router.put("/question/:id", dataDB.updateQuestion);

module.exports = router;