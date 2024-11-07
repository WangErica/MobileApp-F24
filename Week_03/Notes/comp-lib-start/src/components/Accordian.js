import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

export default function Accordian(props){
    const[expandedIndex, setExpandedIndex] = useState(-1)
    // [setting up state, what we are calling it]
    //starting with -1 because it will keep all accordians closed

    const {items} = props
    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex
        const icon = (<span className="text-2xl">
            {/* Our First ternary! 1- condition that we are checking to be true 
            2- what to return if 1 is true,
            3- what to redner else, aka if the first condition is false*/}
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>
        )
        const handleClick = (nextIndex) => {
            // setExpandedIndex(nextIndex)

            setExpandedIndex((currentExpandedIndex) => {
                //if the item is already open, close it. Else, open it.
                if (currentExpandedIndex === nextIndex){
                    return -1
                } else{
                    return nextIndex
                }
            })
        }
        return (
            <div key ={item.id}>
                <div 
                onClick = {() => handleClick(index)} //need to wrap it in a function to call it
                className= "flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer">
                    {item.label}{icon}
                </div>
                    {/* {If the content index matches the expanded index in state (isExpanded is true),
                     render it, otherwise render nothing} */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return (<div>
        {renderedItems}
    </div>)
}