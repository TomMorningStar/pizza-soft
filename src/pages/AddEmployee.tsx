import { useAppDispatch } from '../hooks/redux';
import { IEmployee } from '../models/IEmployee';
import { addEmployee } from '../store/reducers/employeeAction/ActionCreators';
import { Form } from '../widgets/Form';
import { useNavigate } from 'react-router';

const TITLE = 'Добавить сотрудника';

export const AddEmployee = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = async (data: IEmployee) => {
    await dispatch(addEmployee(data)).then(() => {
      navigate('/');
    });
  };

  return <Form title={TITLE} submitAction={submit} />;
};
