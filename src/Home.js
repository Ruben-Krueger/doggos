import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import Footer from './Footer.js'
// import SearchBar from './SearchBar';
import InfiniteScroll from 'react-infinite-scroller'
import Dog from './Dog.js'
import axios from 'axios'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        };
    }


    load = async () => {
        const { data } = await axios('https://dog.ceo/api/breed/pug/images/random/10');

        var newDogs = data['message'].map((imgURL) => <Dog imgURL = {imgURL}></Dog>)

        this.setState({
            dogs: this.state.dogs.concat(newDogs)
        });

    }


    // async load () {
    //
    //     const { data } = await axios('https://dog.ceo/api/breed/pug/images/random/10');
    //     // var newDogs = data['message'].map((imgURL) => );
    //
    //
    //     this.setState({
    //         dogs: this.state.dogs.concat(data['message'])
    //     });
    // };

    render() {
        return (
            <div className="container">

            <Header></Header>

            <InfiniteScroll
                pageStart={0}
                loadMore= {this.load}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading cuteness...</div>} >
                {this.state.dogs}
            </InfiniteScroll>

            <p> <Link to="/taniarascia">taniarascia</Link> on GitHub. </p>

            <Footer></Footer>

            </div>
        )
    }
}

