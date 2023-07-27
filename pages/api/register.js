import nextConnect from 'next-connect';
import multer from 'multer';

// Initialize multer and set up where to store the uploaded files
let upload = multer({ dest: 'uploads/' });

const handler = nextConnect();

handler.use(upload.single('documents'));

handler.post(async (req, res) => {
  // Now you can access req.file for the uploaded file
  console.log(req.file);
  console.log(req.body);

  // TODO: Validate and process the form data
  // TODO: Register the new user (e.g., save to database, send confirmation email, etc.)

  // Send a successful response back to the client, along with a mock JWT and user role
  res.status(200).json({ 
    message: 'Registration successful', 
    token: 'mock-jwt-for-user',  // replace with actual JWT
    role: 'user'  // since only users register, this can be hard-coded
  });
});

export default handler;
