import NotFound from '../../components/NotFound/NotFound';
import useChangeTitle from '../../hooks/useChangeTitlePage';

const ViewNotFound = ({ title }) => {
  const { ChangeTitle } = useChangeTitle();
  ChangeTitle(title);

  return <NotFound />;
};

export default ViewNotFound;
