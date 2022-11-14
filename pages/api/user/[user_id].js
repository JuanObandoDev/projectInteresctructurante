import { getUserById } from '../../../database/db';

const user = async (req, res) => {
    const id = req.query.user_id;
    const user = await getUserById(id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(user);
}

export default user;