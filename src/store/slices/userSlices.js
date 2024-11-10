import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


  export const fetUserDetails = createAsyncThunk(
    'user/fetchUserDetails',
    async (userId, thunkAPI) => {
      try {
        const userResponse = await fetch(`/api/edit-user?user_id=${userId}`, {
          method: 'GET',
        });
        if (!userResponse.ok) throw new Error('Failed to fetch user_detail');
  
        const { data } = await userResponse.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    singleUserDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetUserDetails.fulfilled, (state, action) => {
        state.singleUserDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetUserDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

export default userSlice.reducer;
