import { FC } from 'react';
import { IEmployee } from '../../models/IEmployee';
import { Link } from 'react-router-dom';

import s from './Employee.module.scss';

type EmployeeProps = {
  element: IEmployee;
};

export const NAME = 'Имя:';
export const JOB = 'Работа:';
export const PHONE = 'Телефон:';
export const IS_ARCHIVE = 'В архиве';
export const BIRTHDAY = 'Дата рождения:';

export const Employee: FC<EmployeeProps> = ({ element }) => {
  return (
    <li className={s.element}>
      <Link to={`/employees/${element.id}`} className={s.link}>
        <div>
          <div>
            <span className={s.label}>{NAME}</span>
            <span className={s.labelInfo}>{element.name}</span>
          </div>
          <div>
            <span className={s.label}>{JOB}</span>
            <span className={s.labelInfo}>{element.role}</span>
          </div>
          <div>
            <span className={s.label}>{PHONE}</span>{' '}
            <span className={s.labelInfo}>{element.phone}</span>
          </div>
        </div>
        {element.isArchive && <img width={70} height={70} src="/archive.png" />}
      </Link>
    </li>
  );
};
