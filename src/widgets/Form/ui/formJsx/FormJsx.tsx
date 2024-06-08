import { FC } from 'react';

import { IEmployee } from '../../../../models/IEmployee';
import { FormErrors } from '../../Form';
import { BIRTHDAY, JOB, NAME, PHONE } from '../../../Employee/Employee';
import { Select } from '../../../../entities/select';

import s from '../../Form.module.scss';

type FormJsxProps = {
  handleSubmit: (e: React.FormEvent) => void;
  formData: IEmployee;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formErrors: FormErrors;
  roleOptions: {
    value: string;
    label: string;
  }[];
};

export const FormJsx: FC<FormJsxProps> = ({
  handleSubmit,
  formData,
  handleChange,
  formErrors,
  roleOptions,
}) => {
  return (
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
  );
};
