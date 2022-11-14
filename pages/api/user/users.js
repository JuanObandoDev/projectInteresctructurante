import { getAllUsers } from '../../../database/db';

const users = async (req, res) => {
    const users = await getAllUsers();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
}

export default users;