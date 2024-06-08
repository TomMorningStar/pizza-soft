import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IEmployee } from '../../../models/IEmployee';
import { API_BASE_URL } from '../../../shared/constants';

export const fetchEmployee = createAsyncThunk<IEmployee, string, { rejectValue: string }>(
  'employees/fetchEmployee',
  async (id, thunkApi) => {
    try {
      const response = await axios.get<IEmployee>(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить данные');
    }
  }
);
