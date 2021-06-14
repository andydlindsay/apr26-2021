import React from 'react';
import axios from 'axios';
import {genFeedbackMessage} from '../helpers/helpers';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);

  const fetchHighScores = () => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores')
      .then(({ data }) => setHighScores(data))
      .catch(err => console.error(err));
  };
    
  return(
    <footer data-testid="result_footer">
      <h2>{genFeedbackMessage(props.status)}</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(({ id, name, points }) => <li key={id}>{name}: {points}</li>) }
    </footer>
  );
};

export default Result;
