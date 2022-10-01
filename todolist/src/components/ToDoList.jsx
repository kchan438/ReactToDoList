import { useEffect, useState } from 'react';
import ListItem from './ListItem';

export default function ToDoList() {
  var [listArray, setArray] = useState(['test1', 'test2', 'test3']);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(1);

  //append item to end of array
  const appendItem = () => {
    const getText = window.prompt('Enter your task:');
    setArray((current) => [...current, getText]);
    setCount((previousCount) => {
      previousCount + 1;
    });
  };

  //clear the to do list
  const clearArray = () => {
    setArray([]);
    setCount(0);
  };

  useEffect(() => {
    if (listArray.length > 0) {
      setIsEmpty(false);
      console.log(listArray);
    }
  }, [listArray]),
    [isEmpty, count];

  if (!isEmpty) {
    return (
      <div className="text-center">
        <div className="space-x-5 space-y-5 text-center">
          <button
            className="rounded border border-gray-500 px-2 py-1"
            onClick={appendItem}
          >
            Add Task
          </button>
          <button
            className="rounded border border-gray-500 px-2 py-1"
            onClick={clearArray}
          >
            Clear List
          </button>
        </div>
        <br></br>
        {listArray.map((item) => {
          console.log();
          return <ListItem key={Math.random() * 1} text={item} />;
        })}
      </div>
    );
  }

  return <div></div>;
}
