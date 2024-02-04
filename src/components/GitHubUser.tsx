import { useFetch } from "usehooks-ts";

interface IGitHubUser {
  name: string;
  login: string;
  avatar_url: string;
}

export const GitHubUser = ({ username }: { username: string }) => {
  // Fetch user details from the GitHub API V3.
  const { data, error } = useFetch<IGitHubUser>(
    `https://api.github.com/users/${username}`
  );
  const { name, login, avatar_url } = data || {};

  // Compose some conditional classes based on the request state.
  const containerClassNames = ["container", error && "error"]
    .filter(Boolean)
    .join(" ");

  // Eventually, render some markup.
  return (
    <div className={containerClassNames}>
      <div className="avatar-container">
        {avatar_url && <img className="avatar" src={avatar_url} alt={name} />}
      </div>
      {error ? (
        <div>
          <p>Failed to fetch a GitHub user.</p>
        </div>
      ) : (
        <div>
          <p className="name">{name}</p>
          <p className="username">{login}</p>
        </div>
      )}
    </div>
  );
};
