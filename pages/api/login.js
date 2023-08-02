import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  // Old hardcoded logic for testing purposes
  if (email === 'admin@example.com' && password === 'admin') {
    return res.status(200).json({ token: 'mock-admin-token', role: 'admin' });
  }
  if (email === 'test@example.com' && password === 'password') {
    return res.status(200).json({ token: 'mock-user-token', role: 'user' });
  }

  // New logic to interact with the backend
  try {
    const backendResponse = await axios.post(process.env.BACKEND_LOGIN_URL, {
      email,
      password,
    });
    const { token, role } = backendResponse.data;
    return res.status(200).json({ token, role });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred while logging in';
    return res.status(400).json({ error: errorMessage });
  }
}
