import React from 'react'
import axios from 'axios'
import Category from './Category.js'
import Header from './Header.js'
import Footer from './Footer'


// import React, { useState, useEffect } from "react";
//
// export default function Page() {
//     const value = usePromise("https://something.com/api/");
//     return (
//         <p>{value ? value : "fetching data..."}</p>
//     );
// }
//
// function usePromise(url) {
//     const [value, setState] = useState(null);
//
//     useEffect(() => {
//         let isMounted = true; // track whether component is mounted
//
//         request.get(url)
//             .then(result => {
//                 if (isMounted) {
//                     setState(result);
//                 }
//             });
//
//         return () => {
//             // clean up
//             isMounted = false;
//         };
//     }, []); // only on "didMount"
//
//     return value;
// }

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: true,
            categories: []
        };
    }



    async componentDidMount() {
        const { data } = await axios('https://dog.ceo/api/breeds/list/all');

        let dogs = [];

        for (var type in data['message']) {
            dogs.push(type);
        }

        let categories = dogs.map((dog) => <Category name={dog}/>);

        this.setState({
            loading: false,
            categories: categories
        });
    }


    render() {



        const { error, loading, categories} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            return(
                <div className="container text-center">
                    <Header/>
                    <h2>View all the types of cuteness!</h2>
                    <div className="row">
                        <div className="col">
                            <div>
                                {categories.filter((_, index) => index % 3 === 0)}
                            </div>
                        </div>

                        <div className="col">
                            <div>
                                {categories.filter((_, index) => index % 3 === 1)}
                            </div>
                        </div>

                        <div className="col">
                            <div>
                                {categories.filter((_, index) => index % 3 === 2)}
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            );
        }

    }

}




