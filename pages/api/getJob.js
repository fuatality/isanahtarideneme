export default async (req, res) => {
    try {
      const { id } = req.query;
      const jobs = require('../../jobs.json');
      const job = jobs.find((job) => job.id === +id);
  
      if (job) {
        res.status(200).json(job);
      } else {
        res.status(404).json({ message: 'Job not found' });
      }
    } catch (error) {
      console.error('Error in getJob:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  