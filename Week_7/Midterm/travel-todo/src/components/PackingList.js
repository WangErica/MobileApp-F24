import { useState } from 'react';

const PackingList = () => {
  const [packingItems, setPackingItems] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPackingItems([...packingItems, { title: item, checked: false }]);
    setItem('');
  };

  const handleDelete = (index) => {
    setPackingItems(packingItems.filter((_, i) => i !== index));
  };

  const handleCheck = (index) => {
    const updatedItems = packingItems.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setPackingItems(updatedItems);
  };

  return (
    <div>
      <h2>Packing Checklist</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} placeholder="Add item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {packingItems.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(index)} />
            <span className="item" style={{textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.title}
            </span>
            <div className="actions">
              <button onClick={() => handleDelete(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
