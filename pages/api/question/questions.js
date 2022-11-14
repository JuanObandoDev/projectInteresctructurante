import { getQuestions } from '../../../database/db';

const questions = async (req, res) => {
    const questions = await getQuestions();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(questions);
}

export default questions;