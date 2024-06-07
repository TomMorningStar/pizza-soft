import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IEmployee } from '../../../models/IEmployee';
import { API_BASE_URL } from '../../../shared/constants';

export const fetchEmployees = createAsyncThunk<IEmployee[], void, { rejectValue: string }>(
  'employees/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IEmployee[]>(API_BASE_URL);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить данные');
    }
  }
);
