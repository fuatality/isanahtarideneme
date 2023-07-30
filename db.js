const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'jobs.json');

const readJobs = () => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

const writeJobs = (jobs) => {
  const fileContents = JSON.stringify(jobs, null, 2);
  fs.writeFileSync(filePath, fileContents);
};

const addJob = (job) => {
  const jobs = readJobs();
  const newJob = { id: jobs.length + 1, ...job };
  jobs.push(newJob);
  writeJobs(jobs);
  return newJob;
};

const getJobs = () => {
  return readJobs();
};

module.exports = {
  addJob,
  getJobs,
};
