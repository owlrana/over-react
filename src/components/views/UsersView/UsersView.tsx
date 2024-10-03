import React from 'react';
import { useUsers } from '../../../hooks/useUsers';

const UsersView: React.FC = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersView;
