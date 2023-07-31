import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const JobFeatured8 = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/getJobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('An error occurred while fetching the jobs:', error);
      });
  }, []);

  return (
    <>
      {jobs
        .filter((item) => item.type === 'Öne Çıkarılan') // Filter jobs by type "Öne Çıkarılan"
        .reverse()
        .map((item) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="job-block -type-2">
            <div className="inner-box">
              

              <div className="inner-content">
                <h4>
                  <Link href={`/job-single-v3/${item.id}`}>
                    {item.jobTitle}
                  </Link>
                </h4>
                <ul className="job-other-info">
                <li className="time">{item.title}</li>
                  <li className="privacy">
                    <span className="icon fa fa-map-marker-alt pe-1"></span>
                    {item.city}, {item.country}
                  </li>
                  <li className="time">(<bold>{item.jobType}</bold>)</li>
                  <li className="time">{item.industry}</li>
                </ul>
              </div>

              <div className="inner-footer">
                <div className="content">
                  <div className="days">{item.applicationDeadline}</div>
                  <div className="company-name">{item.company}</div>
                </div>
                <span className="company-logo">
                  <img src="images/logo.svg" alt="company brand" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobFeatured8;
