import React from 'react';
import { useDrag } from 'react-dnd';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Owner {
  login: string;
  avatar_url: string;
}

export interface Repository {
  uuid: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepoProps {
  repository: Repository;
}

const Card: React.FC<RepoProps> = ({ repository }: RepoProps) => {
  const { uuid, full_name: fullName, description, owner } = repository;

  const [{ isDragging }, dragRef] = useDrag({
    item: { uuid, type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <Link to={`/repositories/${fullName}`}>
        <img src={owner.avatar_url} alt={owner.login} />
        <div>
          <strong>{fullName}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Container>
  );
};

export default Card;
