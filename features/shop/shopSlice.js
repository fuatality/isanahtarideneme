import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
};

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            const isCartExist = state.cart.some(
                (item) => item.id === payload.product.id
            );
            if (!isCartExist) {
                state.cart.push({
                    ...payload.product,
                    qty: payload?.qty ? payload.qty : 1,
                });
                toast.success("Ürün sepete eklendi.");
            } else {
                toast.error("Bu ürün sepette var!.");
            }
            localStorage.setItem("local-cart", JSON.stringify(state.cart));
        },
        deleteCart: (state, { payload }) => {
            state.cart = state.cart.filter((item) => item.id !== payload);
            localStorage.setItem("local-cart", JSON.stringify(state.cart));
            toast.error(`${payload} sepetten silindi.`);
        },
        addQty: (state, { payload }) => {
            state.cart = state.cart.filter((item) => {
                if (item.id === payload.id) {
                    item.qty = payload.qty;
                }
                return item;
            });
            localStorage.setItem("local-cart", JSON.stringify(state.cart));
        },
        reloadCart: (state, { payload }) => {
            const cart = JSON.parse(localStorage.getItem("local-cart"));
            if (cart) {
                state.cart = cart;
            }
        },
    },
});

export const { addCart, deleteCart, addQty, reloadCart } = shopSlice.actions;
export default shopSlice.reducer;
