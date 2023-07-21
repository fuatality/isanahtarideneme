const InfoBox = () => {
  return (
    <div className="info-box">
      <div className="left-column">
        <div className="info">
          <h6>Invoice date:</h6>
          <span>03/10/2021</span>
        </div>

        <div className="info">
          <h4>Supplier</h4>
          <h5>Turkcell</h5>
          <p>5502 İstanbul/Türkiye</p>
        </div>
      </div>

      <div className="right-column">
        <div className="info">
          <h6>Due date:</h6>
          <span>03/10/2021</span>
        </div>

        <div className="info">
          <h4>Customer</h4>
          <h5>Ömer Bayram</h5>
          <p>Kudüs Sokak, Beylikdüzü, Türkiye.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
