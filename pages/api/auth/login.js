import { getUserByEmail } from "../../../database/db";

const login = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const { pass, _id } = await getUserByEmail(email);
      if (pass == password) {
        res.status(200).json({ success: true, id: _id });
      } else {
        res.status(401).json({ success: false });
      }
    } catch (e) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false });
  }
};

export default login;
