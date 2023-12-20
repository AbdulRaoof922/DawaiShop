import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
   initialState : {
    items: [],

    totalQuantity: 0,
  },
  reducers: {
 addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity += 1; 
    },
    removeitem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // If you want to update the totalQuantity based on the items left, you would do it like this:
      state.totalQuantity = state.items.length;
    },
    
  },
});

export const { addItem ,removeitem} = cartSlice.actions;
export default cartSlice.reducer;
