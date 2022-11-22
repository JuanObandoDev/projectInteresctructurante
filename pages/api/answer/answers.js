import { postAnswer } from "../../../database/db";

const answers = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { answer } = req.body;
      await postAnswer(answer);
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false });
  }
};

export default answers;
