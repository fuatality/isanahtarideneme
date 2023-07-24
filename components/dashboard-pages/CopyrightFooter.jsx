const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Created by{" "}
        <a
          href="http://cgd.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          CGD ve İnsan Kaynakları
        </a>
        . Bütün Hakları Saklıdır.
      </p>
    </div>
  );
};

export default CopyrightFooter;
