const ExperienceBox = () => {
  return (
    <form className="default-form">
      <div className="row">


        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Firma</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Sektör</label>
          <select className="chosen-single form-select" required>
            <option>Lojistik</option>
            <option>İnsan Kaynakları</option>
            <option>Eğlence</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Departman</label>
          <select className="chosen-single form-select" required>
            <option>İnsan Kaynakları</option>
            <option>IT</option>
            <option>Enerji</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Pozisyon</label>
          <select className="chosen-single form-select" required>
            <option>Proje Menajeri</option>
            <option>Yazılımcı</option>
            <option>Aşçı</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Sorumluluk Alanı</label>
          <select className="chosen-single form-select" required>
            <option>Alış</option>
            <option>Satış</option>
            <option>Dış İlişkiler</option>
          </select>
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>İş Tanımı</label>
          <input
            type="text"
            name="name"
            placeholder="Yapılan işin detaylı tanımı"
            required
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Başlangıç Tarihi</label>
          <select className="chosen-single form-select" required>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Bitiş Tarihi</label>
          <select className="chosen-single form-select" required>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>


  
      </div>
    </form>
  );
};

export default ExperienceBox;
