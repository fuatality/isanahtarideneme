const OtherBox = () => {
  return (
    <form className="default-form">
      <div className="row">



        <div className="form-group col-lg-6 col-md-12">
          <label>Askerlik Durumu</label>
          <select className="chosen-single form-select" required>
            <option>Yaptı</option>
            <option>Yapmadı</option>
            <option>Muaf</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Askerlik Tecil Süresi</label>
          <select className="chosen-single form-select" required>
            <option>1 Yıl</option>
            <option>2 Yıl</option>
            <option>3 Yıl</option>
          </select>
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Fırsat Eşitliği Durumu</label>
          <select className="chosen-single form-select" required>
            <option>Yok</option>
            <option>Var</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Var İse Engellilik Durumu</label>
          <select className="chosen-single form-select" required>
            <option>Yok</option>
            <option>%10</option>
            <option>%20</option>
            <option>%30</option>
            <option>%40</option>
            <option>%50</option>
            <option>%60</option>
            <option>%70</option>
            <option>%80</option>
            <option>%90</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Ehliyet</label>
          <select className="chosen-single form-select" required>
            <option>Yok</option>
            <option>Var</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Hobiler</label>
          <input
            type="text"
            name="name"
            placeholder="Futbol, Kitap, Bilgisayar Oyunları,..."
            required
          />
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Eklemek İstedikleriniz</label>
          <textarea placeholder=""></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Kaydet
          </button>
        </div>
      </div>
    </form>
  );
};

export default OtherBox;
