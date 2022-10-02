import { useState, useEffect } from 'react';

type ListItemProps = {
  text: string;
  id: string;
  // listArray: [];
  deleteTask: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ListItem({ text, deleteTask, id }: ListItemProps) {
  const [checked, setChecked] = useState(false);
  // const [isDeleted, setDeleted] = useState(false);

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
    console.log(event.target.checked);
    setChecked(event.target.checked);
  }

  // function deleteTask() {
  //   //
  //   setArray(listArray.splice(Number(id)));
  // }

  useEffect(() => {
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checked, setChecked]);

  // console.log(deleteTask);
  return (
    <div className="flex place-content-center space-x-4 py-1">
      <input type="checkbox" onChange={check} />
      <div className={strike()}>{text}</div>
      <button
        className="rounded border border-gray-500 px-2"
        onClick={deleteTask}
      >
        Delete
      </button>
    </div>
  );
}
