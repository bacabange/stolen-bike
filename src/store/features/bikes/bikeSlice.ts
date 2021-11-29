import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import api from '../../../config/api';
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

export interface BikeState {
  all: Bike[];
  loading: boolean;
  error: null;
  page: number;
}
// Slice
const initialState: BikeState = {
  all: [],
  page: 1,
  loading: false,
  error: null,
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
  },
});

export const { setList, setLoading, setPage, setError } = bikeSlice.actions;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const search =
  () => async (dispatch: (arg0: { payload: Bike[]; type: string }) => any) => {
    try {
      setLoading(true);
      // const result = await api.get('/search', { data: { per_page: 10 } });
      // const result: Bike[] = await apii(1000, data.bikes);
      await sleep(1000);
      setLoading(false);
      dispatch(setList(data.bikes));

      return await new Promise((resolve) => resolve);
    } catch (e) {
      return console.error(e);
    }
  };

export default bikeSlice.reducer;
