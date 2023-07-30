import Social from "./Social";

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
        <div className="logo">
                  <a href="#" >
                    <img src="/images/logo.png" alt="brand" width="75px" height="75px"/>
                  </a>
                </div>
          <div className="copyright-text">
            © {new Date().getFullYear()} İş Anahtarı, Created by{" "}
            <a
              href="http://unicorn.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unicorn
            </a>
            . All rights reserved.
          </div>
          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
