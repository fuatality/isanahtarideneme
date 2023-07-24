const Coupon = () => {
    return (
        <div className="apply-coupon">
            <div className="form-group">
                <input
                    type="text"
                    name="coupon-code"
                    className="input"
                    placeholder="Kupon Kodu"
                />
            </div>

            <div className="form-group">
                <button type="button" className="theme-btn btn-style-one">
                    Kuponu Uygula
                </button>
            </div>

            <div className="form-group pull-right">
                <button type="button" className="theme-btn btn-style-three">
                    sepeti güncelle
                </button>
            </div>
        </div>
    );
};

export default Coupon;
