import { useEffect, useState } from 'react';
import ListItem from './ListItem';

export default function ToDoList() {
  var [listArray, setArray] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);

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
      // console.log('after setCount append: ' + count);
      // setCount(count + 1);
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
    // delete listArray[item];
    const firstHalf = listArray.slice(0, item);
    const secondHalf = listArray.slice(item + 1, listArray.length);
    setArray(firstHalf.concat(secondHalf));
    // console.log('before setCount: ' + count);
    setCount((previousCount) => {
      // console.log('previousCount: ' + previousCount);
      if (previousCount > 0) {
        previousCount - 1;
      } else {
        setCount(listArray.length);
      }
    });
    // console.log('listarray: ' + listArray);
    // console.log('after setCount: ' + count);
  };

  useEffect(() => {
    if (listArray.length > 0) {
      setIsEmpty(false);
      // console.log('useEffect: ' + count);
    } else {
      setIsEmpty(true);
      setCount(0);
    }
  }, [listArray, isEmpty, setCount]);

  if (!isEmpty || isEmpty) {
    console.log(listArray);
    return (
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
        <br></br>
        {!isEmpty && (
          <div className="text-center">
            {listArray.map((item) => {
              // console.log(listArray.indexOf(item));
              return (
                <ListItem
                  key={Math.random() * 2}
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
        )}
      </div>
    );
  }

  return <div></div>;
}
