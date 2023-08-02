import axios from 'axios';
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const handler = nextConnect();

// Middleware to handle file uploads
handler.use(upload.single('documents'));

handler.post(async (req, res) => {
  // Extract registration details from the request body
  const { fullName, email, password, phone, birthdate } = req.body;

  // Handle file upload if included
  const documents = req.file ? req.file.filename : null;

  try {
    // Send POST request to the backend's registration endpoint
    const backendResponse = await axios.post(process.env.BACKEND_REGISTER_URL, {
      fullName,
      email,
      password,
      phone,
      birthdate,
      documents,
    });

    // Extract the JWT token and user role from the backend response
    const { token, role } = backendResponse.data;

    // Respond to the client with the token and role
    return res.status(200).json({ token, role });
  } catch (error) {
    // Handle any errors from the backend
    const errorMessage = error.response?.data?.message || 'An error occurred while registering';
    return res.status(400).json({ error: errorMessage });
  }
});

export default handler;
