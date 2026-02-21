interface CheckListProps {
  items: (string | React.ReactNode)[];
}

export function CheckList({ items }: CheckListProps) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 items-start">
          <span className="text-success font-bold shrink-0 mt-0.5">&#10003;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
