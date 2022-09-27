type Props<T> = {
  value: T;
  onChange(val: T): void;
}

function Dropdown<T>(props: Props<T>) {
  return (
    <div>

    </div>
  );
}

<Dropdown<number>
  value={1}
  onChange={(val) => console.log(val)}
/>

export { Dropdown }