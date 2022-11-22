import { postUser } from '../../../database/db';

const login = async (req, res) => {
    if(req.method === "POST") {
        try {
            const { user } = req.body;
            await postUser(user);
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ success: false });
    }
}

export default login;