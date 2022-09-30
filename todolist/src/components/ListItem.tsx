import ItemCheckbox from './ItemCheckbox'
import ItemText from './ItemText'

type ListItemProps = {
  text: string;
  isChecked: boolean;
}

export default function ListItem({ text, isChecked }: ListItemProps) {
  return (
    <div className="flex place-content-center space-x-4">
      <ItemCheckbox isChecked={isChecked}/>
      <ItemText text={text} />
    </div>
  )
}
