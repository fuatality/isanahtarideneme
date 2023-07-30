const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Created by{" "}
        <a
          href="http://unicorn.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unicorn
        </a>
        . Bütün Hakları Saklıdır.
      </p>
    </div>
  );
};

export default CopyrightFooter;
