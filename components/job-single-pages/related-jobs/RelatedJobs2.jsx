import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const RelatedJobs2 = () => {
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
      {jobs.slice(-4).map((item) => (
        <div
          className="job-block-four col-xl-3 col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="company-logo">
              <img src="/images/logo.svg" alt="featured job" />
            </span>
            <span className="company-name">{item.company}</span>
            <h4>
              <Link href={`/job-single-v3/${item.id}`}>{item.jobTitle}</Link>
            </h4>
            <div className="location">
              <span className="icon flaticon-map-locator"></span>
              {item.city}, {item.country}
            </div>
          </div>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default RelatedJobs2;
