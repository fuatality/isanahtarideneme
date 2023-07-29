import Hero from "../hero/hero";
import Header from "./Header";
import JobFeatured8 from "../job-featured/JobFeatured8";
import AppSection from "../app-section/AppSection";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import FooterDefault from "../footer/common-footer";
import JobFilterTab2 from "../job-featured/JobFilterTab2";
import Blog from "../blog/Blog";
import DashboardCandidatesHeader from "../header/DashboardCandidatesHeader";
import { useSelector } from 'react-redux';
import DashboardHeader from "../header/DashboardHeader";




const index = () => {
  const userRole = useSelector((state) => state.user.role);
  return (
    <>

      {userRole === 'user' ? <DashboardCandidatesHeader /> : userRole === 'admin' ? <DashboardHeader /> : <Header />}

      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero />
      {/* End Hero Section */}

      {/*<section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2>How It Works?</h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </div>
              </div>
            </div>
          </div>
           End .row 

          <div className="row grid-base" data-aos="fade-up">
            <Block7 />
          </div>
        </div>
      </section>*/}
      {/* <!-- End Work Section --> */}
      {/*<section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center mb-0">
            <h2>Öne Çıkan İlanlar</h2>
          </div>
          {/* End sec-title */}
          <div className="row mt-50" data-aos="fade-up">
            <JobFeatured8 />
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}
      <section className="job-section bg-light-blue layout-pt-120 layout-pb-120">
        <div className="bg-shape -top -left js-rellax">
          <img src="images/index-11/shapes/2.png" alt="image" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Vitrin İlanları</h2>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFilterTab2 />
          </div>
        </div>
      </section>
      
      {/*<CallToAction9 />*/}
      {/* <!-- End Call To Action --> */}

     {/* <section className="layout-pt-120 layout-pb-60">
        <div className="auto-container">
          <div className="row justify- content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2 className="color-blue-dark fw-700">
                  Öne Çıkan Firmalar
                </h2>
                <div className="text">
                  Yıllar boyunca mükemmel adayların işe alınmasına yardımcı olduğumuz bazı şirketler.
                </div>
              </div>
            </div>
           

            <div className="col-auto">
              <Link
                href="/employers-list-v3"
                className="button -arrow text-dark-blue"
              >
                Göz At
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
            </div>
          </div>
       

          <div className="carousel-outer pt-50" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
       <!-- End Top Companies --> */}
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Son Eklenen <Link href={'blog-list-v1'}>Blog Yazıları</Link></h2>
              <div className="text">
                Kariyerinizde yükselmek için göz atmanızı tavsiye ederiz.
              </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

     

      <AppSection />
      {/* <!-- End App Section --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
