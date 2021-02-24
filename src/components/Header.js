import Button from './Button'

const Header = ({title}) => {
    const  onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

// css in js

// const headingSytle = {
//     color: 'red' , 
//     backgroundColor: 'black'
// }


export default Header