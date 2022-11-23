import { getAllUsers } from '../../database/db';

export default async function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
    console.log(1);
    await getAllUsers();
    console.log(2);
  }
  