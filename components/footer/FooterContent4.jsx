import Link from "next/link";
import SearchForm from "./SearchForm";

const FooterContent4 = () => {
  const footerContent = [
    {
      id: 1,
      title: "Adaylar İçin",
      colClass: "col-lg-3",
      menuList: [
        { name: "İş İlanları", route: "/job-list-v5" },
       /* { name: "Candidate Dashboard", route: "/" },
        { name: "Job Alerts", route: "/" },
        { name: "My Bookmarks", route: "/" },*/
      ],
    },
    /*{
      id: 2,
      title: "Firmalar İçin",
      colClass: "col-lg-3",
      menuList: [
        /*{ name: "Browse Candidates", route: "/" },
        { name: "Employer Dashboard", route: "/" },
        { name: "İlan Ver", route: "/employers-dashboard/post-jobs" },
        { name: "Paketler", route: "/pricing" },
      ],
    },*/
    {
      id: 2,
      title: "Sayfalar",
      colClass: "col-lg-3",
      menuList: [
        { name: "SSS", route: "/faq" },
        { name: "Şartlar ve Koşullar", route: "/terms" },
        { name: "İletişim", route: "/contact" },
        { name: "404", route: "/404" },    
      ],
    },
    {
      id: 3,
      title: "Hoşgeldin",
      colClass: "col-lg-3",
      menuList: [
        { name: "Giriş Yap", route: "/login" },
        { name: "Aramıza Katıl", route: "/register" },   
      ],
    },
  ];
  return (
    <>
      {footerContent.map((item) => (
        <div
          className={`footer-column ${item.colClass} col-md-6 col-sm-12`}
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="footer-column col-lg-4 col-md-12 col-sm-12">
        <div className="footer-widget">
          <h4 className="widget-title">E-mail Bültenimize Kayıt Ol</h4>
          <div className="widget-content">
            <div className="newsletter-form">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent4;
