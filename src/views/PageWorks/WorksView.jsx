import Works from '../../components/Wokrs/Works';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

const WorksView = ({ title }) => {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <Works />;
};

export default WorksView;
