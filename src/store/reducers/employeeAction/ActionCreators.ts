import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmployee } from '../../../models/IEmployee';
import { API_BASE_URL } from '../../../shared/constants';
import { fetchEmployees } from '../employees/ActionCreators';

import axios from 'axios';

export const editEmployee = createAsyncThunk(
  'employees/editEmployee',
  async (data: IEmployee, thunkApi) => {
    try {
      await axios.put<IEmployee>(`${API_BASE_URL}/${data.id}`, data);
      thunkApi.dispatch(fetchEmployees());
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось изменить данные');
    }
  }
);

export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (data: IEmployee, thunkApi) => {
    try {
      await axios.post<IEmployee>(`${API_BASE_URL}/${data.id}`, data);
      thunkApi.dispatch(fetchEmployees());
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось изменить данные');
    }
  }
);
