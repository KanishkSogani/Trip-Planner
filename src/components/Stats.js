export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your list 📝 </em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPert = Math.floor((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {packedPert === 100 ? (
        <em>👜 You Packed Everything!</em>
      ) : (
        <em>
          👜 You have {numItems} items on your list, and you already packed{" "}
          {packedItems} ({packedPert}%)
        </em>
      )}
    </footer>
  );
}
