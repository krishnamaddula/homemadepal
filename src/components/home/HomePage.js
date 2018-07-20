import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div className = "jumbotron">
                    <h1>Home Page</h1>
                    <p> Welcome to the app where you can buy and sell home made stuff</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;