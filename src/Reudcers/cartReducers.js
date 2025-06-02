export const cartReducer = (state, action) => {


    switch (action.type) {
        case "ADD_TO_CART": {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id)
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
                    ),
                    products: state.products.map((product) =>
                        product.id === action.payload.id ? { ...product, currentStock: product.currentStock - 1 } : product,
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                    products: state.products.map((product) =>
                        product.id === action.payload.id ? { ...product, currentStock: product.currentStock - 1 } : product,
                    ),
                }

            }
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
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
                ),
                products: state.products.map((product) =>
                    product.id === action.payload ? { ...product, currentStock: product.currentStock - 1 } : product,
                ),
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
                ),
                products: state.products.map((product) =>
                    product.id === action.payload ? { ...product, currentStock: product.currentStock + 1 } : product,
                ),
            }



        default
            : return state;
    }



}