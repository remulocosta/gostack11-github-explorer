import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Header } from './style';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  // return <h1>Repository: {params.repository} </h1>;

  return (
    <Header>
      <img src={logoImg} alt="Github Explorer" />

      <Link to="/dashboard">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
