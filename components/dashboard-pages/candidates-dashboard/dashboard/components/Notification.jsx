const Notification = () => {
  return (
    <ul className="notification-list">
      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Henry Wilson</strong> şu işe başvurdu:
        <span className="colored"> Product Designer</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Raul Costa</strong> şu işe başvurdu:
        <span className="colored"> Product Manager, Risk</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Jack Milk</strong> şu işe başvurdu:
        <span className="colored"> Technical Architect</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong> şu işe başvurdu:
        <span className="colored"> Software Engineer</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Wade Warren</strong> şu işe başvurdu:
        <span className="colored"> Web Developer</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong> şu işe başvurdu:
        <span className="colored"> Software Engineer</span>
      </li>
      {/* End li */}
    </ul>
  );
};

export default Notification;
