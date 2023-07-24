import Link from "next/link";

const ApplyJobModalContent = () => {
  return (
    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="uploading-outer apply-cv-outer">
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="image/*, application/pdf"
                id="upload"
                multiple=""
                required
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                CV Yükle (doc, docx, pdf)
              </label>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Mesaj"
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
  );
};

export default ApplyJobModalContent;
