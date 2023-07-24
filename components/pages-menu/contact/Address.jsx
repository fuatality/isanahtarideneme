const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Adres",
      text: (
        <>
          Atatürk Mahallesi, Ataşehir Bulvarı
          <br /> Ataşehir, İstanbul.
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Bizi Arayın",
      text: (
        <>
          <a href="tel:+4733378901" className="phone">
            123 456 7890
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "E-mail",
      text: (
        <>
          {" "}
          <a href="#">cgd@yandex.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <img src={`images/icons/${item.iconName}.svg`} alt="icon" />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
