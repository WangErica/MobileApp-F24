import {FaAngry} from 'react-icons/fa'
import Button from '../components/button'

export default function ButtonPage(props){
    const valueForCondition = false

    return(
        <div>
        {valueForCondition && <Button primary/>}
        {valueForCondition || <Button danger/>}

            <div>
            <Button primary onClick = {() => console.log('click')} className = "mb-8"> Click Me</Button>
            </div>
            <div>
            <Button secondary> 
                <FaAngry/>Click Me</Button>
            </div>
            <div>
            <Button success rounded> Click Me</Button>
            </div>
            <div>
            <Button warning outline> Click Me</Button>
            </div>
            <div>
            <Button danger outline rounded> Click Me</Button>
            </div>
        </div>
    )
}