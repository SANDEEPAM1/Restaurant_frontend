
const CartReducer = (state,action) =>{
    switch(action.type){
        case 'Add':
            const existingItem = state.find(p => p.menuItemId === action.product.menuItemId);
            if (existingItem) {
                return state.map(p =>
                    p.menuItemId === action.product.menuItemId
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }
            return [...state, { ...action.product, quantity: 1 }];

        case 'Remove':
                return state.filter(p=>p.menuItemId === action.id)

        case 'Increase':{
            return state.map(p =>
                p.menuItemId === action.id
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );
        }

        case 'Decrease': {
            return state.map(p =>
                p.menuItemId === action.id && p.quantity > 1 // Prevent going below 1
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            );
        }
        default:
           return state
    }
}

export default CartReducer;