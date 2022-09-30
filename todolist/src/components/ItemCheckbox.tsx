type ItemCheckboxProps = {
  isChecked: boolean;
}

export default function ItemCheckbox({ isChecked }: ItemCheckboxProps) {

  return (
    <div>
      <input type="checkbox" className={isChecked ? "line-through" : ""}/>
    </div>
  )
}
