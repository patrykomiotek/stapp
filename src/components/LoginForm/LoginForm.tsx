import './LoginForm.css';
import { useState, FormEvent, ChangeEventHandler } from 'react';

type User = {
  email: string;
  password: string;
}

const defaultUser: User = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const [user, setUser] = useState<User>(defaultUser);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <div>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
