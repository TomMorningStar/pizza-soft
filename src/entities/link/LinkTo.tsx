import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './linkTo.module.scss';

type LinkToProps = {
  path: string;
  label: string;
};

export const LinkTo: FC<LinkToProps> = ({ path, label }) => {
  return (
    <Link className={s.link} to={path}>
      {label}
    </Link>
  );
};
