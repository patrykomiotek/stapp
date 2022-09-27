import { useState } from 'react'

import { LoginForm } from '../components/LoginForm';
import type { User } from '../types/User';

const defaultUser: User = {
  email: '',
  password: '',
  language: '',
}

const LoginPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  const handleSubmit = (values: User) => {
    setUser(values);
    setIsSent(true);
    console.log('user: ', values);
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
      <LoginForm
        data={user}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export { LoginPage };
