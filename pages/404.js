import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../components/common/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="Sayfa Bulunamadı" />
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <h1>404!</h1>
          <p>Galiba bir şeyler ters gitti, anasayfamıza dönerek kaldığınız yerden devam edebilirsiniz.</p>

          <Link className="theme-btn btn-style-three call-modal" href="/home-15">
            ANASAYFA
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
