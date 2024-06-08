import { FC } from 'react';

const IS_ARCHIVE_LABEL = 'В архиве';

type CheckedProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checked: FC<CheckedProps> = ({ checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{IS_ARCHIVE_LABEL}</span>
    </label>
  );
};
