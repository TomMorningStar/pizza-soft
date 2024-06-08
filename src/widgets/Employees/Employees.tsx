import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEmployees } from '../../store/reducers/employees/ActionCreators';
import { Employee } from '../Employee';
import { Sort } from '../../features/sort';
import { Loader } from '../../features/loader';

import { LinkTo } from '../../entities/link';

import s from './Employees.module.scss';

export const Employees: FC = () => {
  const dispatch = useAppDispatch();
  const { employees, isLoading, error } = useAppSelector((state) => state.employeesReducer);

  const [sortField, setSortField] = React.useState<'name' | 'birthday' | ''>('');
  const [roleFilter, setRoleFilter] = React.useState<string>('');
  const [isArchiveFilter, setIsArchiveFilter] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value as 'name' | 'birthday' | '');
  };

  const handleRoleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleFilter(e.target.value);
  };

  const handleIsArchiveFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsArchiveFilter(e.target.checked);
  };

  const filteredAndSortedEmployees = employees
    .filter((el) => (roleFilter ? el.role === roleFilter : true))
    .filter((el) => (isArchiveFilter ? el.isArchive : true))
    .sort((a, b) => {
      if (sortField === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortField === 'birthday') {
        const dateA = new Date(a.birthday.split('.').reverse().join('-')).getTime();
        const dateB = new Date(b.birthday.split('.').reverse().join('-')).getTime();
        return dateA - dateB;
      } else {
        return 0;
      }
    });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Sort
        sortField={sortField}
        roleFilter={roleFilter}
        isArchiveFilter={isArchiveFilter}
        handleSortChange={handleSortChange}
        handleRoleFilterChange={handleRoleFilterChange}
        handleIsArchiveFilterChange={handleIsArchiveFilterChange}
      />
      <LinkTo path="/employees/add" label="Добавить сотрудника" />
      <ul className={s.parent}>
        {filteredAndSortedEmployees.map((el) => {
          return <Employee key={el.id} element={el} />;
        })}
      </ul>
    </>
  );
};
