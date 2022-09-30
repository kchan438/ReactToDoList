import ActionButton from './ActionButton'
import ListItem from './ListItem'
import { useState } from 'react'

export default function ListActions() {
  const [emptyList, setEmptyList] = useState(false)

  function AddItem() {
    //adds list item to ToDoList
  }

  function ClearList() {
    //removes list item to ToDoList
    if (!emptyList) {
      //clear out list
    }
  }

  return (
    <div className="space-x-5 space-y-5 text-center">
      <ActionButton title="AddItem" value="Add Item" onClick={AddItem()} />
      <ActionButton
        title="ClearList"
        value="Clear List"
        onClick={ClearList()}
      />
    </div>
  )
}
