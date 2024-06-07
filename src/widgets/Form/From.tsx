import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BIRTHDAY, JOB, NAME, PHONE } from '../Employee/Employee';
import { IEmployee } from '../../models/IEmployee';

import { LinkTo } from '../../entities/link';

import s from './Form.module.scss';
import { Select } from '../../entities/select';

type FormProps = {
  element?: IEmployee;
  title: string;
  submitAction: (data: IEmployee) => void;
};

type FormErrors = Pick<IEmployee, 'name' | 'phone' | 'birthday'>;

export const Form: FC<FormProps> = ({ element, submitAction, title }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<IEmployee>({
    id: `${element ? element.id : ''}`,
    name: element ? element.name : '',
    isArchive: element ? element.isArchive : false,
    role: element ? element.role : 'cook',
    phone: element ? element.phone : '',
    birthday: element ? element.birthday : '',
  });

  const [formErrors, setFormErrors] = React.useState<FormErrors>({
    name: '',
    phone: '',
    birthday: '',
  });

  React.useEffect(() => {
    validateFields(formData);
  }, []);

  const validateFields = (data: IEmployee) => {
    const errors: FormErrors = { name: '', phone: '', birthday: '' };

    if (!data.name) errors.name = 'Обязательное поле';

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    if (!data.birthday) {
      errors.birthday = 'Обязательное поле';
    } else if (!datePattern.test(data.birthday)) {
      errors.birthday = 'Неверный формат даты';
    }

    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{4}$/;
    if (!data.phone) {
      errors.phone = 'Обязательное поле';
    } else if (!phonePattern.test(data.phone)) {
      errors.phone = 'Формат +7 (999) 999-9999';
    }

    setFormErrors(errors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
      validateFields(updatedData);
      return updatedData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateFields(formData);

    const { name, phone, birthday } = formErrors;

    if (!name && !phone && !birthday) {
      navigate('/');
      submitAction(formData);
    }
  };

  const roleOptions = [
    {
      value: 'cook',
      label: 'cook',
    },
    {
      value: 'waiter',
      label: 'waiter',
    },
    {
      value: 'driver',
      label: 'driver',
    },
  ];

  return (
    <div>
      <LinkTo path="/" label="Назад" />
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{NAME}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
          />
          {formErrors.name && <p className={s.error}>{formErrors.name}</p>}
        </div>
        <div>
          <label>{PHONE}</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
          />
          {formErrors.phone && <p className={s.error}>{formErrors.phone}</p>}
        </div>
        <div>
          <label>{BIRTHDAY}</label>
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            placeholder="Дата рождения"
          />
          {formErrors.birthday && <p className={s.error}>{formErrors.birthday}</p>}
        </div>
        <div>
          <label>{JOB}</label>
          <Select value={formData.role} action={handleChange} options={roleOptions} name="role" />
        </div>
        <div>
          <label style={{ display: 'flex' }}>
            <input
              type="checkbox"
              name="isArchive"
              checked={formData.isArchive}
              onChange={handleChange}
              style={{ cursor: 'pointer' }}
            />
            В архиве
          </label>
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
