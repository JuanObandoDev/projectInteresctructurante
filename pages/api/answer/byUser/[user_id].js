import { getAnswersByUserId } from "../../../../database/db";

const answers = async (req, res) => {
    const id = req.query.user_id;
    const answers = await getAnswersByUserId(id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(answers);
}

export default answers;