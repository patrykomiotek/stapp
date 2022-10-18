import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchCase, postCase } from '../../services/cases';

export const Case = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const isDataEqual = (oldData: any, newData: any) => {

    console.log('old: ', oldData, ' new: ', newData)

    return false;
  }

  const { isLoading, isError, data: response, refetch } = useQuery(['cases', params.id], () => fetchCase(params.id), {
    isDataEqual: isDataEqual,
  });
  const item = response?.data;

  const mutation = useMutation(postCase , {
    onSuccess: () => {
      queryClient.invalidateQueries(['cases'])
    }
  })

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (isError) {
    return <p>Oh no, error!</p>
  }

  console.log('isDataEqual: ', isDataEqual);

  return (
    <div>
      <h1>{item?.fields.case_number}</h1>
      <p>{item?.fields.created_at}</p>
      <p>{item?.fields.updated_at}</p>
      <button onClick={() => {
        mutation.mutate({
          id: item?.id,
          fields: {
            case_number: Math.random() + "",
          }
        })
      }}>Refresh</button>
      <p><Link to="/cases">Go back</Link></p>
    </div>
  );
}