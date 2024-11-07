import {useState} from 'react'
// might encounter this use of useState()
// import React from 'react'
// React.useState()
// library that we installed and naming favorite.svg as heart
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

export default function UserRating(){
    const[count, setCount] = useState(0) // 0 is the number/count you want to start at

    const handlePlusClick = () => {
        if (count < 5){
            setCount(count + 1)
        }
        return
    }

    const handleMinusClick = () => {
        if (count > 0){
            setCount(count - 1)
        }
        return
    }

    return(
        <div>
            <button onClick = {handleMinusClick}>[-]</button>
            <span>
                {/* {count} */}
                {[...Array(count)].map((heart, i)=>{
                    return (
                        <span key = "i">
                            <Heart/>
                        </span>
                    )
                })
                }
            </span>
            <button onClick = {handlePlusClick}>[+]</button>
        </div>
    )
}