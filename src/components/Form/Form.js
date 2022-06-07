import Label from '../Label';
import Input from '../Input';
import { Radio, RadioButton, RadioInput } from '../Radio';
import Icon from '../Icon';
import './Form.css';

function Form() {
  return (
    <form className="form">
      <Label id="bill" title="Bill">
        <Input id="bill" icon={<Icon name="dollar" />} type="number" placeholder="0" />
      </Label>
      <Label id="select-tip" title="Select Tip %">
        <Radio onChange={(value) => console.log('radio:', value)}>
          <RadioButton id="tip-5" name="tip" value={5} placeholder="5%" />
          <RadioButton id="tip-10" name="tip" value={10} placeholder="10%" />
          <RadioButton id="tip-15" name="tip" value={15} placeholder="15%" />
          <RadioButton id="tip-25" name="tip" value={25} placeholder="25%" />
          <RadioButton id="tip-50" name="tip" value={50} placeholder="50%" />
          <RadioInput type="number" id="tip-custom" name="tip" placeholder="Custom" />
        </Radio>
      </Label>
      <Label id="number-of-people" title="Number of People" error="Can't be zero">
        <Input
          id="number-of-people"
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
      </Label>
    </form>
  );
}

export default Form;
