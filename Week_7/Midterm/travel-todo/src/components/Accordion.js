// Used the Accordion class notes
// changed the GoChevronLeft to GoChevronRight 
import {useState} from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'

const Accordion = ({label, content}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const icon = (
    <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
    </span>
  )

  return (
    <div>
      <div onClick={handleClick} className="accordion-label">
        <span>
          {icon}
          <span>{label}</span>
        </span>
      </div>
      {isExpanded && <div>{content}</div>}
    </div>
  )
}

export default Accordion