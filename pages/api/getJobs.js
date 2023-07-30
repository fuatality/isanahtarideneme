// pages/api/getJobs.js
const { getJobs } = require('../../db');

export default (req, res) => {
  if (req.method === 'GET') {
    const jobs = getJobs();
    res.status(200).json(jobs);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
