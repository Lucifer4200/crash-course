import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button color='green' text='Hello' />
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