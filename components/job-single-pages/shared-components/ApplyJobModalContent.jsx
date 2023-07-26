import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ApplyJobModalContent = () => {
  return (
    <div className="form-inner">
      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-upload"></i> Yeni CV ile Başvur
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-file"></i> CV'm ile Başvur
              </button>
            </Tab>
          </TabList>
        </div>

      <TabPanel>
        <form className="default-form job-apply-form">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <div className="uploading-outer apply-cv-outer">
                <div className="uploadButton">
                  <label
                    className="uploadButton-button ripple-effect"
                    htmlFor="upload"
                  >
                    CV Yükle (doc, docx, pdf)
                    <input
                      className="uploadButton-input"
                      type="file"
                      name="documents"
                      accept=".doc,.docx,.pdf"
                      id="upload"
                      multiple=""
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea
                className="darma"
                name="message"
                placeholder="Mesaj (optional)"
                required
              ></textarea>
            </div>
            {/* End .col */}

            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <div className="input-group checkboxes square">
                <input type="checkbox" name="remember-me" id="rememberMe" />
                <label htmlFor="rememberMe" className="remember">
                  <span data-bs-dismiss="modal">
                    <Link href="/terms">
                      Şartlar ve Koşullar
                    </Link>
                  </span>
                  <span className="custom-checkbox"></span>&apos;ı okudum ve kabul ediyorum.{" "}    
                </label>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <button
                className="theme-btn btn-style-one w-100"
                type="submit"
                name="submit-form"
              >
                Başvur
              </button>
            </div>
            {/* End .col */}
          </div>
        </form>
      </TabPanel>

      <TabPanel>
        <form className="default-form job-apply-form">
          <div className="row">
            <embed src="/images/sample.pdf" type="application/pdf" width="100%" height="100%" />
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea
                  className="darma"
                  name="message"
                  placeholder="Mesaj (optional)"
                ></textarea>
              </div>
            {/* End .col */}

              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <div className="input-group checkboxes square">
                  <input type="checkbox" name="remember-me" id="rememberMe" />
                  <label htmlFor="rememberMe" className="remember">
                    <span data-bs-dismiss="modal">
                      <Link href="/terms">
                        Şartlar ve Koşullar
                      </Link>
                    </span>
                    <span className="custom-checkbox"></span>&apos;ı okudum ve kabul ediyorum.{" "}    
                  </label>
                </div>
              </div>
            {/* End .col */}

              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <button
                  className="theme-btn btn-style-one w-100"
                  type="submit"
                  name="submit-form"
                >
                  Başvur
                </button>
              </div>
            </div>
           </form>  
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default ApplyJobModalContent;
