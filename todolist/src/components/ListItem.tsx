import { useState } from 'react';
import { useEffect } from 'react';
type ListItemProps = {
  text: string;
  id: string;
};

export default function ListItem(this: any, { text, id }: ListItemProps) {
  const [checked, setChecked] = useState(false);

  //if checked is true then it will update the styling for the text portion
  function strike() {
    if (checked) {
      return 'line-through';
    } else {
      return '';
    }
  }

  //function executes onChange of the input
  function check(event: { target: { checked: boolean } }) {
    setChecked(event.target.checked);
  }

  useEffect(() => {
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }),
    [checked, setChecked];

  return (
    <div className="flex place-content-center space-x-4">
      <input type="checkbox" onChange={check} />
      <div className={strike()}>{text}</div>
    </div>
  );
}
