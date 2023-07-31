import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';


const JobFilterTab2 = () => {
    const [jobs, setJobs] = useState([]);
    const [tabId, setTabId] = useState(1);
    const tabs = [
      { id: 1, name: "Hepsi" },
      { id: 2, name: "Yazılım & IT" },
      { id: 3, name: "İnsan Kaynakları" },
      { id: 4, name: "Pazarlama" },
      { id: 5, name: "Muhasebe" },
    ];
  
    useEffect(() => {
      axios
        .get('/api/getJobs')
        .then((response) => {
          setJobs(response.data);
        })
        .catch((error) => {
          console.error('An error occurred while fetching the jobs:', error);
        });
    }, []);
  
    const filteredJobs =
      tabId === 1 ? jobs : jobs.filter((item) => item.industry === tabs[tabId - 1].name);
  
    return (
      <>
        <div className="default-tabs tabs-box">
          <ul className="tab-buttons -pills">
            {tabs.map((tab, index) => (
              <li
                onClick={() => setTabId(index + 1)}
                key={tab.id}
                className={`${tabId === index + 1 ? "active-btn" : ""} tab-btn`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="tab active-tab" data-aos="fade-up">
          <div className="row">
            {filteredJobs
              .reverse()
              .map((item) => (
                <div className="job-block-three col-lg-4 col-md-6 col-sm-12" key={item.id}>
                      <div className="inner-box">
                                          <div className="content">
                                              <span className="company-logo">
                                                  <img
                                                      src="images/logo.svg"
                                                      alt="item brand"
                                                  />
                                              </span>
                                              <h4>
                                                  <Link
                                                      href={`/job-single-v3/${item.id}`}
                                                  >
                                                      {item.jobTitle}
                                                  </Link>
                                              </h4>
  
                                              <ul className="job-info">
                                                  <li>
                                                      <span className="icon flaticon-user"></span>
                                                      {item.title}
                                                  </li>
                                                  <li>
                                                      <span className="icon flaticon-briefcase"></span>
                                                      {item.company}
                                                  </li>
                                                  {/* compnay info */}
                                                  <li>
                                                      <span className="icon flaticon-map-locator"></span>
                                                      {item.city},{item.country}
                                                  </li>
                                                  {/* location info */}
                                              </ul>
                                              {/* End .job-info */}
  
                                              {/* End .job-other-info */}
  
                                              <button className="bookmark-btn">
                                                  <span className="flaticon-bookmark"></span>
                                              </button>
                                          </div>
                                      </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };
  
  export default JobFilterTab2;
