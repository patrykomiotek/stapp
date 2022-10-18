import { Profiler } from 'react';
import { AuthInfo } from '@components/Auth/AuthInfo';
import { Text } from '../components/Text';

import { useAuthContext } from '../components/Auth/AuthProvider';

const UserPage = () => {
  const context = useAuthContext();
  console.log('render: UserPage');

  // const handleRender = (
  //   id, // the "id" prop of the Profiler tree that has just committed
  //   phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  //   actualDuration, // time spent rendering the committed update
  //   baseDuration, // estimated time to render the entire subtree without memoization
  //   startTime, // when React began rendering this update
  //   commitTime, // when React committed this update
  //   interactions) => {
  //   console.log('result: ', id, phase, actualDuration, baseDuration, startTime, interactions);
  //   debugger;
  // }

  return (
    // <Profiler id="UserPage" onRender={handleRender}>
      <div>
        <h2>User</h2>
        <AuthInfo />
        <Text>{context?.tmp || ""}</Text>
      </div>
    // </Profiler>
  );
}

export { UserPage };
