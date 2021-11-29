import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../../config/api';
import { Bike, BikeDetail } from '../../../types/bikes';

interface Count {
  non: number;
  stolen: number;
  proximity: number
}
export interface BikeState {
  all: Bike[];
  detail: BikeDetail | null;
  loading: boolean;
  loadingDetail: boolean;
  error: null;
  errorDetail: null;
  page: number;
  count: Count
}
// Slice
const initialState: BikeState = {
  all: [],
  detail: null,
  loadingDetail: false,
  page: 1,
  loading: false,
  error: null,
  errorDetail: null,
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
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingDetail: (state, action: PayloadAction<boolean>) => {
      state.loadingDetail = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setErrorDetail: (state, action: PayloadAction<any>) => {
      state.errorDetail = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCount: (state, action: PayloadAction<Count>) => {
      state.count = action.payload;
    },
  },
});

export const { setList, setLoading, setPage, setError, setCount, setLoadingDetail, setErrorDetail, setDetail } = bikeSlice.actions;
export const search =
  ({ query, page }: { query: string, page: number }) => async (dispatch: (arg0: { payload: Bike[] | Count | number | boolean; type: string }) => any) => {
    try {
      dispatch(setLoading(true));
      dispatch(setPage(page));
      const resultCount = await api.get('/search/count', { params: { stolenness: 'all', query } });
      dispatch(setCount(resultCount.data));

      const result = await api.get('/search', { params: { per_page: 10, page, query } });
      dispatch(setLoading(false));
      dispatch(setList(result.data.bikes));
    } catch (e) {
      return console.error(e);
    }
  };
export const getDetail =
  (id: number) => async (dispatch: (arg0: { payload: Bike[] | boolean; type: string }) => any) => {
    try {
      console.log('getDetail', id);
      dispatch(setLoadingDetail(true));
      const result = await api.get(`/bikes/${id}`);
      dispatch(setLoadingDetail(false));
      dispatch(setDetail(result.data.bike));
    } catch (e) {
      dispatch(setErrorDetail(e));
    }
  };


export default bikeSlice.reducer;
