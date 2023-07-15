import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/api/photo');
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addComment = createAsyncThunk(
  'photos/addComment',
  async ({ _id, user, comment }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/photo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id, user, comment }),
      });
      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { _id, comments } = action.payload;
        const photoIndex = state.photos.findIndex((photo) => photo._id === _id);
        if (photoIndex !== -1) {
          state.photos[photoIndex].comments = comments;
        }
      });
  },
});

export default photosSlice.reducer;
