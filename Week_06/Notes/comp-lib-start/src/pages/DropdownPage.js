import Dropdown from '../components/Dropdown'
import {useState} from 'react'


// Use later for filter
const DATA_TO_FILTER = [
  {id: 1, label: 'Katie', team: 'red'},
  {id: 2, label: 'Tony', team: 'green'},
  {id: 3, label: 'Amy', team: 'blue'},
  {id: 4, label: 'Andy', team: 'red'},
  {id: 5, label: 'Billy', team: 'green'},
  {id: 6, label: 'Pete', team: 'blue'}
]

// Select option dropdown data
const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Blue', value: 'blue'},
  {label: 'Green', value: 'green'},
]

const DropdownPage = () => {
  const[value,setValue] = useState(null)

  let filteredData = DATA_TO_FILTER
  if (value?.value){
    filteredData = DATA_TO_FILTER.filter(
      (student) => student.team === value.value
    )
  }
  
  const handleChange = (option) => {
    setValue(option)
  }

  const colorMap = {
    red: 'bg-red-500',
    green:'bg-green-400',
    blue: 'bg-blue-500'
  }
  
  return (
    <div>
      <h1 className="text-xl">{value?.label}</h1>
      <Dropdown options={OPTIONS} value={value} onChange={handleChange}/>
      <h2 className = {colorMap[value?.value]}>Students from {value?.label} team</h2>
      {
        filteredData.map((student) => {return<p key={student.id}>{student.label}</p>})
      }
    </div>
  )
}

export default DropdownPage
