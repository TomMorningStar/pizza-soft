import { FC } from 'react';

type SelectProps = {
  value: string;
  action: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
  }[];
  name: string;
};

export const Select: FC<SelectProps> = ({ value, action, options, name }) => {
  return (
    <div className="custom-select">
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
