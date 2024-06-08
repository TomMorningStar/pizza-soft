import { FC } from 'react';

const IS_ARCHIVE_LABEL = 'В архиве';

type CheckedProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checked: FC<CheckedProps> = ({ checked, onChange }) => {
  return (
    <label style={{ cursor: 'pointer', margin: '10px 0' }}>
      <input type="checkbox" name="isArchive" checked={checked} onChange={onChange} />
      <span>{IS_ARCHIVE_LABEL}</span>
    </label>
  );
};
