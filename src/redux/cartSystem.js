import {
    PriceChange,
    Satellite
} from "@mui/icons-material";
import {
    createSlice
} from "@reduxjs/toolkit";
const initialState = {
    product: [],
    quantity: 0,
    Price: 0
}
const carySytem = createSlice({
    name: "user",
    initialState,
    reducers: {
        changQuantity: (state, action) => {
            state.quantity = action.payload
        },
        addPrice: (state, action) => {
            state.PriceChange = action.payload
        },
        AddCard: (state, action) => {
            console.log(state.quantity)
            const find = state.product.findIndex(item => item.id === action.payload.id)

            if (find >= 0) {
                state.product[find].quantity += 1;
            } else {
                const tempvar = {
                    ...action.payload,
                    quantity: state.quantity,
                    active: false,
                    price: state.Price

                }

                state.product.push(tempvar)
            }

        },
        DELETE_ITEM: (state, action) => {
            const index = state.product.findIndex(el => el.id === action.payload)
            state.product.splice(index, 1)
        },
    }
})

export const {
    AddCard,
    changQuantity,
    DELETE_ITEM,
    addPrice
} = carySytem.actions;

export default carySytem.reducer;