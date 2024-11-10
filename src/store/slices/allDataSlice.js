import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks for API calls

export const fetchTotalUsers = createAsyncThunk('allData/fetchTotalUsers', async () => {
    const response = await fetch('/api/total-users', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-store', // Prevent caching
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
});

export const fetchAllUsers = createAsyncThunk(
    'allData/fetchAllUsers',
    async (
        params = { search:"", sortColumn: "id", sortOrder: "ASC", page: 1, limit: 10 },
        { rejectWithValue }
    ) => {
        try {
            // Destructure and set defaults
            const { search, sortColumn, sortOrder, page, limit } = params;

            // Construct the query parameters
            const queryParams = new URLSearchParams({
                search,
                sortColumn,
                sortOrder,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();

            // Append query parameters to the URL
            const url = `/api/allusers?${queryParams}`;

            // Fetch data
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevent caching
                },
            });

            // Handle HTTP errors
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch users');
            }

            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch (error) {
            // Return rejected value to handle errors in Redux
            return rejectWithValue(error.message);
        }
    }
);

  

export const fetchTotalAuctions = createAsyncThunk('allData/fetchTotalAuctions', async () => {
    const response = await fetch('/api/total-auctions', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-store', // Prevent caching
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch auctions');
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
});

export const fetchAllAuctions = createAsyncThunk(
    'allData/fetchAllAuctions',
    async (
        params = { search:"", sortColumn: "auct_id", sortOrder: "ASC", page: 1, limit: 10 },
        { rejectWithValue }
    ) => {
        try {
            // Destructure and set defaults
            const { search, sortColumn, sortOrder, page, limit } = params;

            // Construct the query parameters
            const queryParams = new URLSearchParams({
                search,
                sortColumn,
                sortOrder,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();

            // Append query parameters to the URL
            const url = `/api/all-auctions?${queryParams}`;

            // Fetch data
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevent caching
                },
            });

            // Handle HTTP errors
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch auctions');
            }

            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch (error) {
            // Return rejected value to handle errors in Redux
            return rejectWithValue(error.message);
        }
    }
);

// Fetch all bids
export const fetchTotalBids = createAsyncThunk('allData/fetchTotalBids', async () => {
    const response = await fetch('/api/all-bids', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-store',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch bids');
    }
    const data = await response.json();
    return data.count; // Return the count of bids
});

export const fetchTotalLots = createAsyncThunk('allData/fetchTotalLots', async () => {
    const response = await fetch('/api/total-lots', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-store', // Prevent caching
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch lots');
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
});

export const fetchTotalCategories = createAsyncThunk('allData/fetchTotalCategories', async () => {
    const response = await fetch('/api/total-category'); 
    return response.json();
});



export const fetchAllLots = createAsyncThunk(
    'allData/fetchAllLots',
    async (
        params = { search:"", sortColumn: "lot_id", sortOrder: "ASC", page: 1, limit: 10, searchAuction:"" },
        { rejectWithValue }
    ) => {
        try {
            // Destructure and set defaults
            const { search, sortColumn, sortOrder, page, limit,searchAuction } = params;

            // Construct the query parameters
            const queryParams = new URLSearchParams({
                search,
                sortColumn,
                sortOrder,
                searchAuction,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();

            // Append query parameters to the URL
            const url = `/api/lot-details?${queryParams}`;

            // Fetch data
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevent caching
                },
            });

            // Handle HTTP errors
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch lots');
            }

            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch (error) {
            // Return rejected value to handle errors in Redux
            return rejectWithValue(error.message);
        }
    }
);


export const fetchAllCategories = createAsyncThunk(
    'allData/fetchAllCategories',
    async (
        params = { search:"", sortColumn: "cat_id", sortOrder: "ASC", page: 1, limit: 10 },
        { rejectWithValue }
    ) => {
        try {
            // Destructure and set defaults
            const { search, sortColumn, sortOrder, page, limit } = params;

            // Construct the query parameters
            const queryParams = new URLSearchParams({
                search,
                sortColumn,
                sortOrder,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();

            // Append query parameters to the URL
            const url = `/api/category?${queryParams}`;

            // Fetch data
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevent caching
                },
            });

            // Handle HTTP errors
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch category data.');
            }

            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch (error) {
            // Return rejected value to handle errors in Redux
            return rejectWithValue(error.message);
        }
    }
);



export const fetchTotalMaterials = createAsyncThunk('allData/fetchTotalMaterials', async () => {
    const response = await fetch('/api/total-materials'); 
    return response.json();
});

export const fetchAllMaterials = createAsyncThunk(
    'allData/fetchAllMaterials',
    async (
        params = { search:"", sortColumn: "mat_id", sortOrder: "ASC", page: 1, limit: 10 },
        { rejectWithValue }
    ) => {
        try {
            // Destructure and set defaults
            const { search, sortColumn, sortOrder, page, limit } = params;

            // Construct the query parameters
            const queryParams = new URLSearchParams({
                search,
                sortColumn,
                sortOrder,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();

            // Append query parameters to the URL
            const url = `/api/materials?${queryParams}`;

            // Fetch data
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevent caching
                },
            });

            // Handle HTTP errors
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch material data.');
            }

            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch (error) {
            // Return rejected value to handle errors in Redux
            return rejectWithValue(error.message);
        }
    }
);

// Slice
const allDataSlice = createSlice({
    name: 'allData',
    initialState: {
        allusers: { data: [], loading: false, error: null },
        allauctions: { data: [], loading: false, error: null },
        alllots: { data: [], loading: false, error: null },
        allcategories: { data: [], loading: false, error: null },
        allmaterials: { data: [], loading: false, error: null },
        totalUsers: null,
        totalLots: null,
        totalBids: null,
        totalAuctions:null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle All Users
            .addCase(fetchAllUsers.pending, (state) => {
                state.allusers.loading = true;
                state.allusers.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.allusers.loading = false;
                state.allusers.data = action.payload;
                state.totalUsers = action.payload.data.length;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.allusers.loading = false;
                state.allusers.error = action.error.message;
            })

            .addCase(fetchTotalUsers.pending, (state) => {
                state.allusers.loading = true;
                state.allusers.error = null;
            })
            .addCase(fetchTotalUsers.fulfilled, (state, action) => {
                state.allusers.loading = false;
                state.allusers.data = action.payload;
                state.totalUsers = action.payload.data.length;
            })
            .addCase(fetchTotalUsers.rejected, (state, action) => {
                state.allusers.loading = false;
                state.allusers.error = action.error.message;
            })
            // Handle All Auctions
            .addCase(fetchAllAuctions.pending, (state) => {
                state.allauctions.loading = true;
                state.allauctions.error = null;
            })
            .addCase(fetchAllAuctions.fulfilled, (state, action) => {
                state.allauctions.loading = false;
                state.allauctions.data = action.payload;
            })
            .addCase(fetchAllAuctions.rejected, (state, action) => {
                state.allauctions.loading = false;
                state.allauctions.error = action.error.message;
            })

            .addCase(fetchTotalAuctions.pending, (state) => {
                state.allauctions.loading = true;
                state.allauctions.error = null;
            })
            .addCase(fetchTotalAuctions.fulfilled, (state, action) => {
                state.allauctions.loading = false;
                state.allauctions.data = action.payload;
                state.totalAuctions = action.payload.data.length;
            })
            .addCase(fetchTotalAuctions.rejected, (state, action) => {
                state.allauctions.loading = false;
                state.allauctions.error = action.error.message;
            })
            // Handle All Lots
            .addCase(fetchAllLots.pending, (state) => {
                state.alllots.loading = true;
                state.alllots.error = null;
            })
            .addCase(fetchAllLots.fulfilled, (state, action) => {
                state.alllots.loading = false;
                state.alllots.data = action.payload;
                state.totalLots = action.payload.data.length;
            })
            .addCase(fetchAllLots.rejected, (state, action) => {
                state.alllots.loading = false;
                state.alllots.error = action.error.message;
            })

            .addCase(fetchTotalLots.pending, (state) => {
                state.alllots.loading = true;
                state.alllots.error = null;
            })
            .addCase(fetchTotalLots.fulfilled, (state, action) => {
                state.alllots.loading = false;
                state.alllots.data = action.payload;
                state.totalLots = action.payload.data.length;
            })
            .addCase(fetchTotalLots.rejected, (state, action) => {
                state.alllots.loading = false;
                state.alllots.error = action.error.message;
            })
            // Handle All Categories
            .addCase(fetchAllCategories.pending, (state) => {
                state.allcategories.loading = true;
                state.allcategories.error = null;
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.allcategories.loading = false;
                state.allcategories.data = action.payload;
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.allcategories.loading = false;
                state.allcategories.error = action.error.message;
            })

            .addCase(fetchTotalCategories.pending, (state) => {
                state.allcategories.loading = true;
                state.allcategories.error = null;
            })
            .addCase(fetchTotalCategories.fulfilled, (state, action) => {
                state.allcategories.loading = false;
                state.allcategories.data = action.payload;
            })
            .addCase(fetchTotalCategories.rejected, (state, action) => {
                state.allcategories.loading = false;
                state.allcategories.error = action.error.message;
            })
            // Handle All Materials
            .addCase(fetchAllMaterials.pending, (state) => {
                state.allmaterials.loading = true;
                state.allmaterials.error = null;
            })
            .addCase(fetchAllMaterials.fulfilled, (state, action) => {
                state.allmaterials.loading = false;
                state.allmaterials.data = action.payload;
            })
            .addCase(fetchAllMaterials.rejected, (state, action) => {
                state.allmaterials.loading = false;
                state.allmaterials.error = action.error.message;
            })

            .addCase(fetchTotalMaterials.pending, (state) => {
                state.allmaterials.loading = true;
                state.allmaterials.error = null;
            })
            .addCase(fetchTotalMaterials.fulfilled, (state, action) => {
                state.allmaterials.loading = false;
                state.allmaterials.data = action.payload;
            })
            .addCase(fetchTotalMaterials.rejected, (state, action) => {
                state.allmaterials.loading = false;
                state.allmaterials.error = action.error.message;
            })

            
            // Handle Total Bids
            .addCase(fetchTotalBids.pending, (state) => {
                state.totalBids = null; 
            })
            .addCase(fetchTotalBids.fulfilled, (state, action) => {
                state.totalBids = action.payload; // Set total bids count
            })
            .addCase(fetchTotalBids.rejected, (state, action) => {
                state.totalBids = null;
            });
    }
});

export default allDataSlice.reducer;
