import './LoginForm.css';
import { useEffect, useRef, ChangeEventHandler, FormEvent, Dispatch, SetStateAction } from 'react';

import type { User } from '../../types/User';

type Props = {
  readonly data?: User;
  readonly setData?: Dispatch<SetStateAction<User>>;
  // readonly handleSubmit: FormEventHandler;
}

const LoginForm = (props: Props) => {
  const { data, setData }  = props;
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

    const user: User = {
      email: '',
      password: '',
      language: '',
    }

    if (languageFieldRef.current) {
      if (languageFieldRef.current.value.includes('php')) {
        languageFieldRef.current.style.border = '1px solid red';
      }
      user.language = languageFieldRef.current.value;
    }

    // Parent::handleSubmit(values, { setSubmiting: true })
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
