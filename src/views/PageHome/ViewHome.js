import Home from '../../components/HomePage/Home';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';


const ViewHome = ({ title }) => {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);


  return (<Home />);
};

export default ViewHome;
