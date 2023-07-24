import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const JobFeatured8 = () => {
  return (
    <>
      {jobFeatured.slice(0, 8).map((item) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="job-block -type-2">
            <div className="inner-box">
              <div className="inner-header">
                <div className="icon-wrap">
                  <div className={`icon ${item.jobCatIcon}`}></div>
                </div>
                <div className="title">{item.jobCat}</div>
              </div>

              <div className="inner-content">
                <h4>
                  <Link href={`/job-single-v3/${item.id}`}>
                    {item.jobTitle}
                  </Link>
                </h4>
                <ul className="job-other-info">
                  <li className="privacy">
                    <span className="icon fa fa-map-marker-alt pe-1"></span>
                    İstanbul, Türkiye
                  </li>
                  <li className="time">Tam Zamanlı</li>
                </ul>
              </div>

              <div className="inner-footer">
                <div className="content">
                  <div className="days">3 gün önce</div>
                  <div className="company-name">{item.company}</div>
                </div>
                <span className="company-logo">
                  <img src={item.logo} alt="company brand" />
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
