import useFetch from "../hooks/useFetch";

function UserList() {
  const { data, error, isLoading } = useFetch("https://api.example.com/users");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;