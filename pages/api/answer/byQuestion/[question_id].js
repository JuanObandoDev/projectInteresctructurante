import { getAnswersByQuestionId } from "../../../../database/db";

const answers = async (req, res) => {
    const id = req.query.question_id;
    const answers = await getAnswersByQuestionId(id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(answers);
}

export default answers;