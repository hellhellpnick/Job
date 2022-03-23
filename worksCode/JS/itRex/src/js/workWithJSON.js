import addElementToPage from './renderPages';
import listeners from './listeners';
import fillingInTheSelector from './fillingSelec';

const url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';

const getJSONData = async (v) => {
  try {
    await fetch(`${url}`)
      .then((data) => data.json())
      .then((data) => {
        addElementToPage(data);
        listeners(data);
        fillingInTheSelector(data);
      });
  } catch (e) {
    console.log(e);
  }
};

export default getJSONData;
