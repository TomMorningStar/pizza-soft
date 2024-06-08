import { FC } from 'react';

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
    <div className="custom-select">
      <label>{label}</label>
      <select name={name} value={value} onChange={action}>
        {options.map((el, idx) => (
          <option key={idx} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </div>
  );
};
