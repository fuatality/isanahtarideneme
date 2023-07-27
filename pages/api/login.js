export default function handler(req, res) {
  const { email, password } = req.body;

  if (email === 'admin@example.com' && password === 'admin') {
    res.status(200).json({ message: 'Login successful', role: 'admin', token: 'mock-jwt-for-admin' });
  } else if (email === 'test@example.com' && password === 'password') {
    res.status(200).json({ message: 'Login successful', role: 'user', token: 'mock-jwt-for-user' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
