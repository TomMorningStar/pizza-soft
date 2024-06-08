import { FC } from 'react';

import s from './Select.module.scss';

type SelectProps = {
  value: string;
  action: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
  }[];
  name: string;
  label: string;
};

export const Select: FC<SelectProps> = ({ label, value, action, options, name }) => {
  return (
    <div className={s.customSelect}>
      <label>{label}</label>
      <select className={s.select} name={name} value={value} onChange={action}>
        {options.map((el, idx) => (
          <option className={s.option} key={idx} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </div>
  );
};
