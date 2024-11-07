import ReactDOM from 'react-dom'
import {useEffect} from 'react'

export default function Modal(props) {
  const {onClose, children, actionBar} = props
  // this is the useEffect hook from react
  // useEffect fires everytime the component is mounted/created in the dom
  // this first argument is an arrow function taht we want to fire
  // second argument is an array of pieces of state we want to watch for a change, 
  //when they change, useEffect arrow function fires
  // if you only want to fire when it is created, the second argument is an empty array[]
  useEffect(() =>{
    // disable scrolling down when the modal is open
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  },[])
  return ReactDOM.createPortal(
    <>
    {/* Overlay */}
    <div 
      onClick = {onClose} 
      className='absolute inset-0 bg-gray-300 opacity-50'
    ></div>
     {/* Modal BG */}
      <div className='absolute inset-40 p-10 bg-white'>
        {/* Modal Content */}
        <div className="flex flex-col jusitfy-between h-full">
          {/* Children Text */}
          <div>{children}</div>
          {/* Action Bar */}
        <div className="flex flex-row justify-end">{actionBar}</div>
      </div>
    </div>
    </>, 
    document.getElementById('portal')
  )
}
