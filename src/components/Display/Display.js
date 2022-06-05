import Result from '../Result';
import './Display.css';

function Display() {
  return (
    <div className="display">
      <Result
        name="Tip Amount"
        desc="person"
        value={0} />
    </div>
  );
}

export default Display;
