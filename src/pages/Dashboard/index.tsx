import React, { useState, useEffect, FormEvent } from 'react';
import { useDrop } from 'react-dnd';
import { FiTrash2, FiSearch, FiLoader } from 'react-icons/fi';

import { uuid } from 'uuidv4';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import Card from '../Card';
import { Title, Form, Repositories, Error, ContainerDel } from './styles';

export interface Repository {
  uuid: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [searching, setSearching] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  async function handleDeleteRepository(id: string): Promise<void> {
    try {
      const repositoriesFilter = repositories.filter(repo => repo.uuid !== id);

      setRepositories(repositoriesFilter);
    } catch (error) {
      console.log('Falha ao excluir o repositório');
    }
  }

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: item => {
      const { uuid: id } = JSON.parse(JSON.stringify(item));
      handleDeleteRepository(id);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let opacity = 0.0;
  if (isActive) {
    opacity = 0.9;
  } else if (canDrop) {
    opacity = 0.4;
  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    setSearching('true');

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      repository.uuid = uuid();

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
      setSearching('');
    } catch (err) {
      setSearching('');
      setInputError('Erro na busca por este repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios do Github</Title>

      <Form
        hasError={!!inputError}
        onSubmit={handleAddRepository}
        loading={searching}
      >
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">
          {searching ? (
            <FiLoader color="#FFF" size={24} />
          ) : (
            <FiSearch color="#FFF" size={18} />
          )}
          Pesquisar
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Card key={repository.uuid} repository={repository} />
        ))}
      </Repositories>

      {!!repositories.length && (
        <ContainerDel ref={drop} hasOpacity={opacity}>
          <FiTrash2 size={80} />
        </ContainerDel>
      )}
    </>
  );
};

export default Dashboard;
