import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchEmployee } from '../store/reducers/employee/ActionCreators';
import { IEmployee } from '../models/IEmployee';
import { Form } from '../widgets/Form';
import { Loader } from '../features/loader';
import { editEmployee } from '../store/reducers/employeeAction/ActionCreators';

const TITLE = 'Редактирование сотрудника';

export const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { employee, isLoading, error } = useAppSelector((state) => state.employeeReducer);

  const submit = async (data: IEmployee) => {
    await dispatch(editEmployee(data)).then(() => {
      navigate('/');
    });
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
