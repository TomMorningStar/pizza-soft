import React, { FC } from 'react';
import { Select } from '../../entities/select';

type SortProps = {
  sortField: 'name' | 'birthday' | '';
  roleFilter: string;
  isArchiveFilter: boolean;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleRoleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleIsArchiveFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Sort: FC<SortProps> = ({
  sortField,
  roleFilter,
  isArchiveFilter,
  handleSortChange,
  handleRoleFilterChange,
  handleIsArchiveFilterChange,
}) => {
  const sortOptions = [
    {
      value: '',
      label: 'Все',
    },
    {
      value: 'name',
      label: 'Имени',
    },
    {
      value: 'birthday',
      label: 'Дате рождения',
    },
  ];

  const filterOptions = [
    {
      value: '',
      label: 'Все',
    },
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
    <div style={{ margin: '16px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <label>
        Сортировать по:
        <Select value={sortField} action={handleSortChange} options={sortOptions} name="sort" />
      </label>

      <label>
        Фильтр по должности:
        <Select
          value={roleFilter}
          action={handleRoleFilterChange}
          options={filterOptions}
          name="filter"
        />
      </label>

      <label>
        <input type="checkbox" checked={isArchiveFilter} onChange={handleIsArchiveFilterChange} />В
        архиве
      </label>
    </div>
  );
};
