import { useEffect, useState } from "react";
import { User } from "../types/User";
import { SERVER_HOST } from "../constants";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${SERVER_HOST}/users`);
        // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.log(err);
        setUsers([]);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
