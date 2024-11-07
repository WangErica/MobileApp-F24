import {useState} from 'react'
import {GoChevronDown} from 'react-icons/go'
import cx from 'classnames'

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const {options, onChange, value} = props

  const handleClick = () => {
    //technically, we should be using functional updates for state
    //setIsOpen((currentIsOpen) => !currentIsOpen)
    // but this also works and you'll see this in examples a lot as well
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option)=> {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return( <div onClick={() => handleOptionClick(option)} className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value}>{option.label}</div>
  )})

  // let content = 'Select...'
  // if (value) {
  //   content = value.label
  // }
  const content = value ? value.label : 'Select...'

  return (
    <div className='w-48 relative'>
      <Panel onClick= {handleClick} className='flex justify-between item-center cursor-pointer'> {content}<GoChevronDown className='text-xl'/>
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

const Panel = ({children, className, ...otherProps}) => {
  return <div 
    {...otherProps}
    classname={cx(className,'border rounded p-3 shadow bg-white w-full')}>
    {children}
  </div>
}

export {Panel}
export default Dropdown
