export const cartReducer = (state, action) => {




    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
                ,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, currentStock: product.currentStock - 1 }
                        : product
                )

            }
        case "REMOVE_FROM_CART": {
            const updatedCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )
            return {
                ...state,
                cartItems: updatedCartItems,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, currentStock: product.currentStock + 1 }
                        : product
                )
            };
        }

        default
            : return state;
    }



}