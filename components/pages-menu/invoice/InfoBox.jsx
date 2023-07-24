const InfoBox = () => {
  return (
    <div className="info-box">
      <div className="left-column">
        <div className="info">
          <h6>Fatura Tarihi:</h6>
          <span>03/10/2021</span>
        </div>

        <div className="info">
          <h4>Satıcı</h4>
          <h5>İş Anahtarı</h5>
          <p>Ataşehir İstanbul/Türkiye</p>
        </div>

        <div className="info">
          <h4>Müşteri</h4>
          <h5>Coca Cola</h5>
          <p>Ümraniye İstanbul/Türkiye</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
