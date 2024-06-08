import React, { FC } from 'react';
import { Select } from '../../entities/select';
import { Checked } from '../checked';

import s from './Sort.module.scss';

type SortProps = {
  sortField: 'name' | 'birthday' | '';
  roleFilter: string;
  isArchiveFilter: boolean;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleRoleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleIsArchiveFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SORT_LABEL = 'Сортировать по:';
const FILTER_LABEL = 'Фильтр по должности';

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
    <div className={s.sort}>
      <Select
        label={SORT_LABEL}
        value={sortField}
        action={handleSortChange}
        options={sortOptions}
        name="sort"
      />
      <Select
        label={FILTER_LABEL}
        value={roleFilter}
        action={handleRoleFilterChange}
        options={filterOptions}
        name="filter"
      />
      <Checked checked={isArchiveFilter} onChange={handleIsArchiveFilterChange} />
    </div>
  );
};
