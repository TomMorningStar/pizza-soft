import { createSlice } from '@reduxjs/toolkit/react';
import { IEmployee } from '../../../models/IEmployee';
import { fetchEmployee } from './ActionCreators';

interface EmployeeState {
  employee: IEmployee | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employee: null,
  isLoading: false,
  error: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployee.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(fetchEmployee.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = '';
      state.employee = payload;
    });

    builder.addCase(fetchEmployee.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload || 'Произошла неизвестная ошибка';
    });
  },
});

export default employeeSlice.reducer;
