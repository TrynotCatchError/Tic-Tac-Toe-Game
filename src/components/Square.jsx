export default function Square({ value, onClick }) {
  return (
    <button className={`square ${value}`} onClick={onClick}>
      {value}
    </button>
  );
}
