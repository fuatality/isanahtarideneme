import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const JobFeatured5 = () => {
  return (
    <>
      {jobFeatured.slice(0, 5).map((item) => (
        <div className="job-block-five" key={item.id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="item brand" />
              </span>
              <h4>
                <Link href={`/job-single-v3/${item.id}`}>{item.jobTitle}</Link>
              </h4>
              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.company}
                </li>
                {/* compnay info */}
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item.location}
                </li>
                {/* location info */}
                <li>
                  <span className="icon flaticon-clock-3"></span> {item.time}
                </li>
                {/* time info */}
              </ul>
              {/* End .job-info */}
            </div>
            <ul className="job-other-info">
              {item.jobType.slice(0, 1).map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            <Link
              href={`/job-single-v3/${item.id}`}
              className="theme-btn btn-style-three"
            >
              Başvur
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobFeatured5;
