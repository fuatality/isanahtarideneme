import CartItems from "./CartItems";

const CartTable = () => {
    return (
        <table className="default-table ">
            <thead className="cart-header">
                <tr>
                    <th className="product-name">Ürün</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-price">Fiyat</th>
                    <th className="product-quantity">Miktar</th>
                    <th className="product-subtotal">Toplam</th>
                    <th className="product-remove">&nbsp;</th>
                </tr>
            </thead>
            {/* End thead */}

            <tbody>
                <CartItems />
            </tbody>
            {/* End tbody */}
        </table>
    );
};

export default CartTable;
