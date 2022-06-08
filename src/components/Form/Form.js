import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Label from '../Label';
import Input from '../Input';
import { Radio, RadioButton, RadioInput } from '../Radio';
import Icon from '../Icon';
import { changeAppContextValue } from '../../context/AppContext';
import './Form.css';

function Form() {
  const [{ bill, people }, dispatch] = useAppContext();
  const [peopleFieldError, setPeopleFieldError] = useState('');

  const changeHandle = (event) => changeAppContextValue(dispatch, event);

  return (
    <form className="form">
      <Label id="bill" title="Bill">
        <Input
          id="bill"
          icon={<Icon name="dollar" />}
          name="bill"
          type="number"
          placeholder="0"
          value={bill}
          onChange={changeHandle} />
      </Label>
      <Label id="select-tip" title="Select Tip %">
        <Radio name="tip" onChange={changeHandle}>
          <RadioButton id="tip-5" name="tip" value={5} placeholder="5%" />
          <RadioButton id="tip-10" name="tip" value={10} placeholder="10%" />
          <RadioButton id="tip-15" name="tip" value={15} placeholder="15%" />
          <RadioButton id="tip-25" name="tip" value={25} placeholder="25%" />
          <RadioButton id="tip-50" name="tip" value={50} placeholder="50%" />
          <RadioInput id="tip-custom" name="tip" type="number" placeholder="Custom" />
        </Radio>
      </Label>
      <Label id="number-of-people" title="Number of People" error={peopleFieldError}>
        <Input
          id="number-of-people"
          icon={<Icon name="person" />}
          min="1"
          name="people"
          type="number"
          placeholder="1"
          validation={{
            prohibitions: [
              { regexStr: '^0', message: 'Can\'t be zero' },
              { regexStr: '\\.', message: 'Must be an integer' },
              { regexStr: '-', message: 'Must be positive' },
            ],
            onError: setPeopleFieldError,
          }}
          value={people}
          onChange={changeHandle} />
      </Label>
    </form>
  );
}

export default Form;
