import Social from "../social/Social";

const CompanyInfo = () => {
  return (
    <ul className="company-info">
      <li>
        Endüstri: <span>Software</span>
      </li>
      <li>
        Şirket Çalışan Sayısı: <span>501-1,000</span>
      </li>
      <li>
        Kuruluş Tarihi: <span>2011</span>
      </li>
      <li>
        Telefon: <span>123 456 7890</span>
      </li>
      <li>
        E-mail: <span>info@joio.com</span>
      </li>
      <li>
        Konum: <span>London, UK</span>
      </li>
      <li>
        Sosyal Medya:
        <Social />
      </li>
    </ul>
  );
};

export default CompanyInfo;
