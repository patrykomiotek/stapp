import './LoginForm.css';
import { useState, useEffect, FormEvent, ChangeEventHandler } from 'react';

type User = {
  email: string;
  password: string;
  language: string;
}

const defaultUser: User = {
  email: '',
  password: '',
  language: '',
}

const LoginForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    console.log('debug: useEffect - password');
    if (user.language.includes('kura')) {
      setUser({
        ...user,
        password: '***',
      });
    }
  }, [user.password]);

  useEffect(() => {
    console.log('debug: useEffect - language');
    if (user.language.includes('php')) {
      setUser({
        ...user,
        language: 'python',
      });
    }
  }, [user.language]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSent(true);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  const showFormInfo = () => {
    if (isSent) {
      return <p>Form sent {JSON.stringify(user, null, 2)}</p>
    }
  }

  return (
    <div>
      <h2>Login form</h2>
      {/* {isSent ? (<p>Form sent {JSON.stringify(user, null, 2)}</p>) : null} */}
      {/* {isSent ? (
        1 === 1 ?
          <p>Form sent {JSON.stringify(user, null, 2)}</p>
          : ''
        )
      : ''} */}
      {/* {isSent && <FormInfo />} */}
      {showFormInfo()}
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
          <label htmlFor="language">Programming language</label>
          <input
            id="language"
            type="text"
            onChange={handleChange}
            value={user.language}
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
