const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Adınız Soyadınız</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder="Ad Soyad"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>E-mail Adresiniz</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="E-mail"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Mesajınız</label>
          <textarea
            name="message"
            placeholder="Mesaj"
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
            İncelemeyi Gönder
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Form;
