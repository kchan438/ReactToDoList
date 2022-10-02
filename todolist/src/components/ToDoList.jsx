import { useEffect, useState } from 'react';
import ListItem from './ListItem';

export default function ToDoList() {
  var [listArray, setArray] = useState(['test1', 'test2', 'test3']);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(listArray.length);

  //append item to end of array
  const appendItem = () => {
    const getText = window.prompt('Enter your task:');
    if (getText === '') {
      return;
    } else {
      setArray((current) => [...current, getText]);
      setCount((previousCount) => {
        previousCount + 1;
      });
    }
  };

  //clear the to do list
  const clearArray = () => {
    setArray([]);
    setCount(0);
  };

  //delete task based on index(item)
  const deleteTask = (item) => {
    console.log('Delete Clicked for index: ' + item);
    // console.log(item);
    delete listArray[item];
    // setArray(listArray.splice(item));
    console.log('before setCount: ' + count);
    setCount((previousCount) => {
      console.log('previousCount: ' + previousCount);
      if (previousCount > 0) {
        previousCount - 1;
      } else {
        setCount(listArray.length);
      }
    });
    console.log('listarray: ' + listArray);
    console.log('after setCount: ' + count);
  };

  useEffect(() => {
    console.log('useEffect: ' + count);
    if (listArray.length > 0) {
      setIsEmpty(false);
    }
  }, [listArray, setArray]),
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
          // console.log(listArray.indexOf(item));
          return (
            <ListItem
              key={Math.random() * 1}
              id={listArray.indexOf(item).toString()}
              text={item}
              // array={listArray}
              // setArrayState={setArray}
              deleteTask={() => {
                deleteTask(listArray.indexOf(item));
              }}
            />
          );
        })}
      </div>
    );
  }

  return <div></div>;
}
