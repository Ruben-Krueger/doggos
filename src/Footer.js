import React from 'react'
import {Navbar} from 'reactstrap';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="fixed-bottom footer">
                <Navbar color="white">
                    <p>Made with <span role="img" aria-label="heart">❤️</span> by Ruben</p>
                    <p>Images from <a href="https://dog.ceo/api/">https://dog.ceo/api/</a> </p>
                </Navbar>
            </div>
        )
    }

}
