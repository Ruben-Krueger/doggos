import React from 'react'
import Header from './Header.js'
import InfiniteScroll from 'react-infinite-scroller'
import './image_grid.css'
import Footer from './Footer'
import ModalImage from "react-modal-image";



export default class Dog extends React.Component {

    abortController = new AbortController();


    constructor(props) {
        super(props);
        this.state = {
            imgs: [],
            error: null
        };
    }

    toTitleCase = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    componentWillUnmount() {
        this.abortController.abort();
    }



    load = () => {
        fetch(`https://dog.ceo/api/breed/${this.props.match.params.breed}/images/random/10`, {signal: this.abortController.signal})
            .then(res => res.json())
            .then(
                (data) => {

                    var newImg = [];

                    data['message'].forEach((url) => {
                        newImg.push({"src": url, "thumbnail": url});
                    });

                    newImg = [...new Set(newImg)];


                    this.setState({
                        imgs: this.state.imgs.concat(newImg)
                    });

                })
            .catch((error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    };


    render() {
        console.log(this.state.imgs);
        if(this.state.error) {
            return(
                <div className="container">
                    <h2>Rut roh! {this.state.error}</h2>
                </div>
            )
        }
        else {
            return(
                <div className="container text-center">

                <Header/>

                <h1>{this.toTitleCase(this.props.match.params.breed.replace("doggos/",""))} dogs</h1>

                <div className="container text-center">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore ={this.load}
                        hasMore={true}
                        loader={<div><p>Loading cuteness...</p></div>}>

                        <div className="image-grid" style={{ marginTop: "20px" }}>
                            {this.state.imgs.map((image, index) => (
                                    <div className="image-item" key={index} >
                                        <img src={image['src']}/>
                                    </div>
                                ))}
                        </div>
                    </InfiniteScroll>

                </div>

                    <Footer/>


                </div>
            )}
        }
}
