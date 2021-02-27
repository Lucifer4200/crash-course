import { Link } from 'react-router-dom'
import food_img from './img/food.jpg'

const About = () => {
    return (
        <div>
            <img src= {food_img} className='about-thumb' height='250px' width='100%' />
            <h4>Prince Yeasin Arafat</h4>
            <p>Find To Build A Website safe and secure! Simple in use. Fast and trusted. Multiple sources combined. Easy Acces To Information. Discover us now! All the Answers. Types: Information, Combined Web Results, Easy & Fast, 99% Match.</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
