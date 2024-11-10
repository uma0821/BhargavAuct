import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch category details
export const fetchCatDetails = createAsyncThunk(
  'category/fetchCatDetails',
  async (CatId, thunkAPI) => {
    try {
      const response = await fetch(`/api/cat-details?cat_id=${CatId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch category details');
      }

      const { data } = await response.json();
      return data; // Return the fetched category data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category:null,
    catDetails: null, // Stores the details of a single category
    loading: false,   // Tracks loading state
    error: null,      // Stores error messages
  },
  reducers: {}, // No synchronous reducers needed here
  extraReducers: (builder) => {
    builder
      // Case: Fetching category details starts
      .addCase(fetchCatDetails.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      // Case: Fetching category details successful
      .addCase(fetchCatDetails.fulfilled, (state, action) => {
        state.catDetails = action.payload; // Store the fetched details
        state.loading = false;
      })
      // Case: Fetching category details failed
      .addCase(fetchCatDetails.rejected, (state, action) => {
        state.error = action.payload; // Store the error message
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
