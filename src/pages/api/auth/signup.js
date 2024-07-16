import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await axios.post('http://localhost:8081/auth/signup', req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
