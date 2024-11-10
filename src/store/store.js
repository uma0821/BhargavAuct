
import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from './slices/auctionSlices';
import materialReducer from './slices/materialSlices';
import categoryReducer from './slices/categorySlices';
import authReducer from './slices/authSlices';
import bidDisplay from './slices/bidDisplaySlice';
import userBidsDisplay from './slices/userBidsSlice';
import allDataSlices from './slices/allDataSlice';
import upcomingAuctionReducer from './slices/upcomingAuctionsSlices';
import userReducer from './slices/userSlices';

const store = configureStore({
  reducer: {
    auction: auctionReducer,
    auth: authReducer,
    biddisplay: bidDisplay,
    userProfile: userBidsDisplay,
    tablesData: allDataSlices,
    upcomingAuctions: upcomingAuctionReducer,
    user: userReducer,
    category: categoryReducer,
    material: materialReducer,
  },
});

export default store;
