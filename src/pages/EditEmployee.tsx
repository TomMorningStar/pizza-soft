import React from 'react';

import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { editEmployee, fetchEmployee } from '../store/reducers/employee/ActionCreators';
import { IEmployee } from '../models/IEmployee';
import { Form } from '../widgets/Form';
import { Loader } from '../features/loader';

const TITLE = 'Редактирование сотрудника';

export const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { employee, isLoading, error } = useAppSelector((state) => state.employeeReducer);

  const submit = (data: IEmployee) => {
    dispatch(editEmployee(data));
  };

  React.useEffect(() => {
    dispatch(fetchEmployee(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (employee) return <Form element={employee} title={TITLE} submitAction={submit} />;
};
