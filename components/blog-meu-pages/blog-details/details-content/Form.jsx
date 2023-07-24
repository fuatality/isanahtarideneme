const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Ad Soyad</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder="Ad ve Soyadınızı Giriniz"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="E-mailinizi Giriniz"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Konu</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="Konu"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Mesaj</label>
          <textarea
            name="message"
            placeholder="Mesajınız"
            required=""
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            Gönder
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Form;
