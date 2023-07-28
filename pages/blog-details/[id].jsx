import dynamic from "next/dynamic";
import FooterDefault from "../../components/footer/common-footer";
import MobileMenu from "../../components/header/MobileMenu";
import DetailsContent from "../../components/blog-meu-pages/blog-details/details-content";
import blogs from "../../data/blogs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
import DefaulHeader2 from "../../components/header/DefaulHeader2";
import { useSelector } from 'react-redux'; // <-- Add this line
import DashboardCandidatesHeader from "../../components/header/DashboardCandidatesHeader";
import DashboardHeader from "../../components/header/DashboardHeader";

const BlogDetailsDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;
  const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogs.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Blog Yazısı" />

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      {userRole === 'user' ? <DashboardCandidatesHeader /> : userRole === 'admin' ? <DashboardHeader /> : <DefaulHeader2 />}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <img src={"/images/resource/thumb-1.png"} alt="resource" />
                </span>
                Bahar Özus
              </li>
              <li>31 Ağustos 2021</li>
              <li>12 Yorum</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <img src={blog?.img} alt="resource" />
        </figure>

        <DetailsContent />
      </section>
      {/* <!-- End Blog Single --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
