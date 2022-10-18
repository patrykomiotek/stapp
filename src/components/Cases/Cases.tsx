import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchCases } from '../../services/cases';

export const Cases = () => {
  const { isLoading, isError, data: response, refetch } = useQuery(['cases'], fetchCases);
  const cases = response?.data.records;

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (isError) {
    return <p>Oh no, error!</p>
  }

  console.log('response: ', cases);

  return (
    <div>
      {cases && cases.map((item) => (
        <div key={item.id}>
          <h2><Link to={`/case/${item.id}`}>{item.fields.case_number}</Link></h2>
        </div>
      ))}
    </div>
  );
}