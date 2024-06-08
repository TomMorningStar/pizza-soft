import { createSlice } from '@reduxjs/toolkit/react';
import { addEmployee, editEmployee } from './ActionCreators';

interface EmployeeState {
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  isLoading: false,
  error: '',
};

export const employeeActionsSlice = createSlice({
  name: 'employeeAction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editEmployee.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(editEmployee.fulfilled, (state) => {
      state.isLoading = false;
      state.error = '';
    });

    builder.addCase(editEmployee.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(addEmployee.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(addEmployee.fulfilled, (state) => {
      state.isLoading = false;
      state.error = '';
    });

    builder.addCase(addEmployee.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default employeeActionsSlice.reducer;
