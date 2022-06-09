import { useCallback } from 'react';
import useAppContext from '../../hooks/useAppContext';
import { resetAppContext } from '../../context/AppContext';
import Result from '../Result';
import Button from '../Button';
import './Results.css';

function Results() {
  const [{ bill, tip, people }, dispatch] = useAppContext();

  const reset = useCallback(() => resetAppContext(dispatch), [dispatch]);

  const getCalculations = useCallback(() => {
    const amount = people || 1;
    const calculatedTip = bill * tip / 100 / amount;
    const calculatedTotal = bill / amount + calculatedTip;

    return {
      calculatedTip,
      calculatedTotal,
    };
  }, [bill, tip, people]);

  const { calculatedTip, calculatedTotal } = getCalculations();

  return (
    <div className="results">
      <div className="results-items">
        <Result name="Tip Amount" desc="person" value={calculatedTip} />
        <Result name="Total" desc="person" value={calculatedTotal} />
      </div>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default Results;
