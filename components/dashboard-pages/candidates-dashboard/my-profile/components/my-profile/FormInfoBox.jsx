import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Türkiye", label: "Türkiye" },
    { value: "İngiltere", label: "İngiltere" },
    { value: "Almanya", label: "Almanya" },
    { value: "Fransa", label: "Fransa" },
    { value: "Rusya", label: "Rusya" },
    { value: "Çin", label: "Çin" },
    { value: "Azerbaycan", label: "Azerbaycan" },
    { value: "Japonya", label: "Japonya" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Adınız Soyadınız</label>
          <input type="text" name="name" placeholder="Ad Soyad" required />
        </div>

         {/* <!-- Input --> */}
         <div className="form-group col-lg-6 col-md-12">
          <label>Cinsiyet</label>
          <select className="chosen-single form-select" required>
            <option>Erkek</option>
            <option>Kadın</option>
            <option>Diğer</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Uyruk</label>
          <select className="chosen-single form-select" required>
            <option>Türk</option>
            <option>Yunan</option>
            <option>İngiliz</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Doğum Tarihi</label>
          <select className="chosen-single form-select" required>
            <option>1989</option>
            <option>1990</option>
            <option>1991</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>E-mail Adresiniz</label>
          <input
            type="text"
            name="name"
            placeholder="@mail.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Telefon Numarası</label>
          <input
            type="text"
            name="name"
            placeholder="+90 ___ __ __"
            required
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Yaşadığı Şehir</label>
          <select className="chosen-single form-select" required>
            <option>İzmir</option>
            <option>İstanbul</option>
            <option>Ankara</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Yaşadığı İlçe</label>
          <select className="chosen-single form-select" required>
            <option>Çekmeköy</option>
            <option>Ataşehir</option>
            <option>Levent</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Taşınmaya Açıklık</label>
          <select className="chosen-single form-select" required>
            <option>Açık</option>
            <option>Açık Değil</option>
            <option>Beni İkna Et</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Taşınmayı Düşündüğü Şehirler</label>
          <select className="chosen-single form-select" required>
            <option>İzmir</option>
            <option>İstanbul</option>
            <option>Ankara</option>
          </select>
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Seyehate Uygunluk</label>
          <select className="chosen-single form-select" required>
            <option>Uygun</option>
            <option>Uygun Değil</option>
            <option>Beni İkna Et</option>
          </select>
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Tercih Edilen Çalışma Şekli</label>
          <select className="chosen-single form-select" required>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Project Oriented</option>
          </select>
        </div>


        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Daha önce yurtdışı çalışma deneyiminiz olduysa lütfen ülke seçiniz</label>
          <Select
            defaultValue={[catOptions[0]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            <strong>Kaydet</strong>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
