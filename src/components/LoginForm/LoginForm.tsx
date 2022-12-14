import './LoginForm.css';
import { useEffect, useRef, FormEvent } from 'react';

import type { User } from '../../types/User';

type Props = {
  readonly data?: User;
  readonly onSubmit: (values: User) => void;
}

const LoginForm = (props: Props) => {
  const { data, onSubmit }  = props;
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (languageFieldRef.current) {
      languageFieldRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const emailField = emailFieldRef.current;
    const passwordField = passwordFieldRef.current;
    const languageField = languageFieldRef.current;

    const user: User = {
      email: '',
      password: '',
      language: '',
    }

    if (emailField) {
      user.email = emailField.value;
    }

    if (passwordField) {
      user.password = passwordField.value;
    }

    if (languageField) {
      if (languageField.value.includes('php')) {
        languageField.style.border = '1px solid red';
      }
      user.language = languageField.value;
    }

    // Parent::handleSubmit(values, { setSubmiting: true })
    onSubmit(user);
  }

  return (
    <div>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            ref={emailFieldRef}
            type="text"
            defaultValue={data?.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={passwordFieldRef}
            type="password"
            defaultValue={data?.password}
          />
        </div>
        <div>
          <label htmlFor="language">Programming language</label>
          <input
            id="language"
            ref={languageFieldRef}
            type="text"
            defaultValue={data?.language}
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
