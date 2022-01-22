
import { useState } from 'react';
const Home = () => {
    const [name, setName] = useState('mario');
    const [location, setLocation] = useState('cali')

    const handleClick = () => {
        setName('mariaaa');
        setLocation('italy');
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } lives in { location }</p>
            <button onClick={handleClick}> Click Me</button>
        </div>
    );
}
 
export default Home;