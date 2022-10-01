type ItemTextProps = {
  text: string;
};

export default function ItemText({ text }: ItemTextProps) {
  return <div>{text}</div>;
}
