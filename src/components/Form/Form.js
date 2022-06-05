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
        placeholder="0"
        validation={{
          rules: [
            { regexStr: '^0', message: 'Can\'t be zero' },
            { regexStr: '\\.', message: 'Must be an integer' },
          ],
          onError: console.log,
        }} />
    </form>
  );
}

export default Form;
