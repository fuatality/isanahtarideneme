const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      <a href="/login" className="theme-btn btn-style-one mm-listitem__text">
        Giriş Yap / Üye Ol
      </a>
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Bize Ulaşın</span>
            <text>1234567894</text>
          </span>
          <span className="phone-num">
            <text>cgd@yandex.com</text>
          </span>
          <span className="address">
          Atatürk Mahallesi, Ataşehir Bulvarı
          Ataşehir, İstanbul.
          </span>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
