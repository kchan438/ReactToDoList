import { useEffect, useState } from 'react'

import ListItem from './ListItem'

export default function ToDoList() {
  const listArray = ['test1', 'test2', 'test3']
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    if (listArray.length > 0) {
      setIsEmpty(false)
    }
  }),
    [isEmpty]

  if (!isEmpty) {
    return (
      <div className="text-center">
        {listArray.map((item) => {
          console.log()
          return <ListItem key={listArray.indexOf(item)} text={item} />
        })}
      </div>
    )
  }

  return <div></div>
}
