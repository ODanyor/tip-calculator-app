import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Label from '../Label';
import Input from '../Input';
import { Radio, RadioButton, RadioInput } from '../Radio';
import Icon from '../Icon';
import { updateAppContextValue } from '../../context/AppContext';
import './Form.css';

const percentages = [5, 10, 15, 25, 50];

function Form() {
  const [{ bill, people }, dispatch] = useAppContext();
  const [peopleFieldError, setPeopleFieldError] = useState('');

  const changeHandle = (event) => updateAppContextValue(dispatch, event);

  const renderRadioButtons = () => percentages.map(percentage => (
    <RadioButton
      id={`tip-${percentage}`}
      name="tip"
      value={percentage}
      placeholder={`${percentage}%`}
    />
  ));

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
          onChange={changeHandle}
        />
      </Label>
      <Label id="select-tip" title="Select Tip %">
        <Radio name="tip" onChange={changeHandle}>
          {renderRadioButtons()}
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
          onChange={changeHandle}
        />
      </Label>
    </form>
  );
}

export default Form;
