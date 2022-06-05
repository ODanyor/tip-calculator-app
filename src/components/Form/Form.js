import Input from '../Input';
import Icon from '../Icon';
import './Form.css';

function Form() {
  return (
    <form>
      <Input
        icon={<Icon name="dollar" />}
        type="number"
        placeholder="0" />
      <Input
        icon={<Icon name="person" />}
        type="number"
        placeholder="0" />
    </form>
  );
}

export default Form;
