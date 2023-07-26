const SocialNetworkBox = () => {
  return (
    <form className="default-form">
      <div className="row">


        <div className="form-group col-lg-6 col-md-12">
          <label>Eğitim Seviyesi</label>
          <select className="chosen-single form-select" required>
            <option>Lise</option>
            <option>Üniversite</option>
            <option>Doktora</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Mezuniyet Tarihi</label>
          <select className="chosen-single form-select" required>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Üniversite</label>
          <select className="chosen-single form-select" required>
            <option>Boğaziçi Üniversitesi</option>
            <option>İstanbul Teknik Üniversitesi</option>
            <option>Orta Doğu Teknik Üniversitesi</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Bölüm</label>
          <select className="chosen-single form-select" required>
            <option>Bilgisayar Mühendisliği</option>
            <option>İşletme</option>
            <option>Psikoloji</option>
          </select>
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Not Ortalaması</label>
          <input
            type="text"
            name="name"
            placeholder="Opsiyonel"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
       
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            +
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
