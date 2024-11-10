import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch material details
export const fetchMaterialDetails = createAsyncThunk(
  'material/fetchMaterialDetails',
  async (MaterialId, thunkAPI) => {
    try {
      const response = await fetch(`/api/material-details?mat_id=${MaterialId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch material details');
      }

      const { data } = await response.json();
      return data; // Return the fetched material data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const materialSlice = createSlice({
  name: 'material',
  initialState: {
    material:null,
    matDetails: null, // Stores the details of a single material
    loading: false,   // Tracks loading state
    error: null,      // Stores error messages
  },
  reducers: {}, // No synchronous reducers needed here
  extraReducers: (builder) => {
    builder
      // Case: Fetching material details starts
      .addCase(fetchMaterialDetails.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      // Case: Fetching material details successful
      .addCase(fetchMaterialDetails.fulfilled, (state, action) => {
        state.matDetails = action.payload; // Store the fetched details
        state.loading = false;
      })
      // Case: Fetching material details failed
      .addCase(fetchMaterialDetails.rejected, (state, action) => {
        state.error = action.payload; // Store the error message
        state.loading = false;
      });
  },
});

export default materialSlice.reducer;
