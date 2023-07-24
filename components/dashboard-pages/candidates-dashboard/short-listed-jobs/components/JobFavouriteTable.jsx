import Link from "next/link.js";
import jobs from "../../../../../data/job-featured.js";

const JobFavouriteTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Kaydedilen İlanlar</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Son 6 Ay</option>
            <option>Son 12 Ay</option>
            <option>Son 18 Ay</option>
            <option>Son 24 Ay</option>
            <option>Son 5 Yıl</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>İlan Başlığı</th>
                  <th>Kaydedilen Tarih</th>
                  <th>Durum</th>
                  <th>Seçenekler</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(8, 12).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img src={item.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Segment
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                İstanbul, Türkiye
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>5 Aralık 2020</td>
                    <td className="status">Aktif</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobFavouriteTable;
