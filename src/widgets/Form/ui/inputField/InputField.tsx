import { FC } from 'react';

import s from '../../Form.module.scss';

type inputFiledProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formError: string;
  value: string;
  type: string;
  name: string;
  placeholder: string;
};

export const InputFiled: FC<inputFiledProps> = ({
  label,
  onChange,
  formError,
  type,
  name,
  placeholder,
  value,
}) => {
  return (
    <div className={s.inputField}>
      <label className={s.label}>{label}</label>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {formError && <p className={s.error}>{formError}</p>}
    </div>
  );
};
