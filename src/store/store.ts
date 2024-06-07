import { combineReducers, configureStore } from '@reduxjs/toolkit';
import employeesReducer from './reducers/employees/EmployeesSlice';
import employeeReducer from './reducers/employee/EmployeeSlice';

const rootReducer = combineReducers({
  employeesReducer,
  employeeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
