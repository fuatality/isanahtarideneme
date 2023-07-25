const Contact = () => {
  return (
    <form>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input type="text" name="username" placeholder="Ad Soyad" required />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input
            type="email"
            name="email"
            placeholder="E-mail Adresi"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Mesaj"
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-0">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="submit-form"
          >
            Mesajı Gönder
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Contact;
