export default function Dropdown({ isOpen }) {
  return (
    isOpen
      ? (
        <div id="drop-down">
          드롭다운
        </div>
      )
      : null
  );
}
