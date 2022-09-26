import { useState, FormEvent } from 'react'

import { LoginFormControlled } from '../components/LoginForm';
import type { User } from '../types/User';

const defaultUser: User = {
  email: '',
  password: '',
  language: '',
}

const LoginPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSent(true);
    console.log('user: ', user);
  }

  const showFormInfo = () => {
    if (isSent) {
      return <p>Form sent {JSON.stringify(user, null, 2)}</p>
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      {showFormInfo()}
      <LoginFormControlled
        data={user}
        setData={setUser}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export { LoginPage };
