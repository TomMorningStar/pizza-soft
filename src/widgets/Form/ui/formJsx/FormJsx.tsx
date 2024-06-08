import { FC } from 'react';

import { IEmployee } from '../../../../models/IEmployee';
import { FormErrors } from '../../Form';
import { BIRTHDAY, JOB, NAME, PHONE } from '../../../Employee/Employee';
import { Select } from '../../../../entities/select';

import { InputFiled } from '../inputField/InputField';
import { Checked } from '../../../../features/checked';

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
      <InputFiled
        label={NAME}
        onChange={handleChange}
        formError={formErrors.name}
        type={'text'}
        name={'name'}
        placeholder={'Поле для ввода'}
        value={formData.name}
      />
      <InputFiled
        label={PHONE}
        onChange={handleChange}
        formError={formErrors.phone}
        type={'phone'}
        name={'phone'}
        placeholder={'Поле для ввода'}
        value={formData.phone}
      />
      <InputFiled
        label={BIRTHDAY}
        onChange={handleChange}
        formError={formErrors.birthday}
        type={'text'}
        name={'birthday'}
        placeholder={'Поле для ввода'}
        value={formData.birthday}
      />
      <Select
        label={JOB}
        value={formData.role}
        action={handleChange}
        options={roleOptions}
        name="role"
      />
      <Checked checked={formData.isArchive} onChange={handleChange} />
      <button type="submit">Сохранить</button>
    </form>
  );
};
