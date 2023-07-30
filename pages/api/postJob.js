// pages/api/postJob.js
const { addJob } = require('../../db');

export default (req, res) => {
  if (req.method === 'POST') {
    const job = req.body;
    addJob(job);
    res.status(200).json({ success: true, message: 'Job posted successfully!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
