import Link from "next/link";

const Pricing = () => {
  const pricingCotent = [
    {
      id: 1,
      packageType: "Basit",
      price: "199",
      tag: "",
      features: [
        "30 iş ilanı",
        "3 öne çıkarılan ilan",
        "15 gün gösterim",
        "7/24 Destek",
      ],
    },
    {
      id: 2,
      packageType: "Standart",
      price: "499",
      tag: "tagged",
      features: [
        "40 iş ilanı",
        "5 öne çıkarılan ilan",
        "20 gün gösterim",
        "7/24 Destek",
      ],
    },
    {
      id: 3,
      packageType: "Gold",
      price: "799",
      tag: "",
      features: [
        "50 iş ilanı",
        "10 öne çıkarılan ilan",
        "60 gün gösterim",
        "7/24 Destek",
      ],
    },
  ];

  return (
    <div className="pricing-tabs tabs-box wow fadeInUp">
      {/* <!--Tabs Container--> */}
      <div className="row">
        {pricingCotent.map((item) => (
          <div
            className={`pricing-table col-lg-4 col-md-6 col-sm-12 ${item.tag}`}
            key={item.id}
          >
            <div className="inner-box">
              {item.tag ? (
                <>
                  <span className="tag">Önerilen</span>
                </>
              ) : (
                ""
              )}

              <div className="title">{item.packageType}</div>
              <div className="price">
                ${item.price} <span className="duration">/ Aylık</span>
              </div>
              <div className="table-content">
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="table-footer">
                <Link href="/shop/cart" className="theme-btn btn-style-three">
                  Sepete Ekle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
