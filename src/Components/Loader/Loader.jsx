import Loader from 'react-loader-spinner';
import { Loaderbtn } from './Loader.styled';

export const Spinner = () => {
  return (
    <Loaderbtn>
      <Loader
        type="Puff"
        color="blue"
        height={90}
        width={90}
        timeout={3000}
      />
    </Loaderbtn>
  );
};