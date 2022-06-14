import { useQuery } from "react-query";

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export default function GithubUser({ username }) {
  const { data, isLoading, isError, isSuccess, error } = useQuery([username], () =>
    fetchUser(username)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }
}
