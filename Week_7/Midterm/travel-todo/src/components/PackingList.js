import {useState} from 'react'
import Accordion from './Accordion'

const PackingList = () => {
    // keep track of packing items
    const [packingItems, setPackingItems] = useState([]) 
    const [item, setItem] = useState('')

    // Update while user types in the input field
    const handleChange = (event) => {
        setItem(event.target.value)
    }

    // Add a new item to the packing list
    const handleSubmit = (event) => {
        event.preventDefault()
        // Add new item with default 'unchecked' status, so the box isn't checked
        setPackingItems([...packingItems, { title: item, checked: false }]) 
        setItem('') // Clear the input field after adding
    }

    // Remove the item from the packing list by index
    const handleDelete = (index) => {
        // Filter out the item to delete
        setPackingItems(packingItems.filter((_, i) => i !== index)) 
    }

    // If clicked, add a check to the box 
    const handleCheck = (index) => {
        const updatedItems = packingItems.map((item, i) => {
        if (i === index) {
            return { ...item, checked: !item.checked } // Flip the 'checked' status
        }
        return item
        })
        setPackingItems(updatedItems)
    }

    const content = (
        <div>
            <center>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" value={item} onChange={handleChange} placeholder="Add item" />
                    <button type="submit">Add</button>
                </form>
            </center>
            <ul>
            {packingItems.map((item, index) => (
            <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={() => handleCheck(index)} />
                    <span className="item" style={{textDecoration: item.checked ? 'line-through' : 'none'}}>
                    {item.title}
                    </span>
                <div className="actions">
                <button onClick={() => handleDelete(index)}>Remove</button>
                </div>
            </li>
            ))}
            </ul>
        </div>
    )

    // Accordion wrap the content, content being the checklist
    return <Accordion label="Packing Checklist" content={content} /> 
}

export default PackingList
