import { getAllUsers } from '../../database/db';

export default async function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
    await getAllUsers();
  }
  