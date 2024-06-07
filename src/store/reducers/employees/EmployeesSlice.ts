import { createSlice } from '@reduxjs/toolkit/react';
import { IEmployee } from '../../../models/IEmployee';
import { fetchEmployees } from './ActionCreators';

interface EmployeesState {
  employees: IEmployee[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  isLoading: false,
  error: '',
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(fetchEmployees.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = '';
      state.employees = payload;
    });

    builder.addCase(fetchEmployees.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload || 'Произошла неизвестная ошибка';
    });
  },
});

export default employeesSlice.reducer;
