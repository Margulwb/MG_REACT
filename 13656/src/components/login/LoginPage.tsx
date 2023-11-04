import { FC, useState } from "react";
import { UserProfile } from "./UserProfile";
import User from "./User";

interface LoginPageProps {
    users: User[];
  }

export const LoginPage: FC<LoginPageProps> = ({ users }) => {
  const [username, setUsername] = useState("Bret");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = () => {
    const foundUser = users.find((user) => user.username === username);
    if (foundUser) {
      setIsLoggedIn(true);
      setError("");
      setCurrentUser(foundUser);
    } else {
      setError("Zły użytkownik");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setError("");
    setCurrentUser(null);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="login-page">
            <div className="logout d-flex justify-content-end">
                <button onClick={handleLogout}>Wyloguj</button>
            </div>
            {currentUser && <UserProfile user={currentUser} />}
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
            <div className="login-form">
            <p>Enter username:</p>
            <input
                type="text"
                placeholder="Nazwa użytkownika"
                value={username}
                onKeyPress={handleEnterKeyPress}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Zaloguj</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
      )}
    </div>
  );
};
