import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../config/api';
import data from '../../../data/data.json';

export interface Bike {
  id: number;
  title: string | null;
  date_stolen: number;
  description: string | null;
  frame_colors: string[];
  tistolen_locationtle: string | null;
  large_img: string | null;
  frame_model: string | null;
  is_stock_img: boolean;
  location_found: string | null;
  manufacturer_name: string | null;
  external_id: number | null;
  registry_name: string | null;
  registry_url: string | null;
  serial: string | null;
  status: string | null;
  stolen: boolean;
  stolen_location: string | null;
  thumb: string | null;
  url: string | null;
  year: number | null;
}

interface Count {
  non: number;
    stolen: number;
    proximity: number
}
export interface BikeState {
  all: Bike[];
  loading: boolean;
  error: null;
  page: number;
  count: Count
}
// Slice
const initialState: BikeState = {
  all: [],
  page: 1,
  loading: false,
  error: null,
  count: {
    non: 0,
    stolen: 0,
    proximity: 0
  }
};

export const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.all = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCount: (state, action: PayloadAction<Count>) => {
      state.count = action.payload;
    },
  },
});

export const { setList, setLoading, setPage, setError, setCount } = bikeSlice.actions;

export const search =
  (query: string) => async (dispatch: (arg0: { payload: Bike[] | Count | boolean; type: string }) => any) => {
    try {
      dispatch(setLoading(true));
      const resultCount = await api.get('/search/count', { params: { stolenness: 'all', query} });
      dispatch(setCount(resultCount.data));

      const result = await api.get('/search', { params: { per_page: 10, query } });
      dispatch(setLoading(false));
      dispatch(setList(result.data.bikes));
    } catch (e) {
      return console.error(e);
    }
  };


export default bikeSlice.reducer;
