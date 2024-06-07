import { useAppDispatch } from '../hooks/redux';
import { IEmployee } from '../models/IEmployee';
import { Form } from '../widgets/Form';
import { addEmployee } from '../store/reducers/employee/ActionCreators';

const TITLE = 'Добавить сотрудника';

export const AddEmployee = () => {
  const dispatch = useAppDispatch();

  const submit = (data: IEmployee) => {
    dispatch(addEmployee(data));
  };

  return <Form title={TITLE} submitAction={submit} />;
};
