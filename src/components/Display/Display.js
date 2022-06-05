import Result from '../Result';
import Button from '../Button';
import './Display.css';

function Display() {
  return (
    <div className="display">
      <div className="display-items">
        <Result
          name="Tip Amount"
          desc="person"
          value={0} />
        <Result
          name="Total"
          desc="person"
          value={0} />
      </div>
      <Button>Reset</Button>
    </div>
  );
}

export default Display;
