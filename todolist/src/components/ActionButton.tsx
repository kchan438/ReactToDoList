type ActionButtonProps = {
  title: string
  value: string
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ActionButton({
  title,
  value,
  handleClick
}: ActionButtonProps) {
  return (
    <button
      className="border rounded px-2 py-1 border-gray-500"
      title={title}
      onClick={handleClick}
    >
      {value}
    </button>
  )
}
