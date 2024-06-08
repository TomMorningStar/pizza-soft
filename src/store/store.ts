import { combineReducers, configureStore } from '@reduxjs/toolkit';
import employeesReducer from './reducers/employees/EmployeesSlice';
import employeeReducer from './reducers/employee/EmployeeSlice';
import employeeActions from './reducers/employeeAction/EmployeeActionsSlice';

const rootReducer = combineReducers({
  employeesReducer,
  employeeReducer,
  employeeActions,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
