import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import FormUser from "./FormContent";
import FormComp from "./FormContent2"
import Link from "next/link";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Hesabını Yarat</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-five">
                <i className="la la-user"></i> İş Arayan
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-five">
                <i className="la la-briefcase"></i> Şirket
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <FormUser />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <FormComp />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Zaten Üye Misin?{" "}
          <Link
            href="/login"
          >
            Giriş Yap
          </Link>
        </div>
        <div className="divider">
          <span>veya</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
