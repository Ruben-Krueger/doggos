import React from "react"
import { Link } from 'react-router-dom'
import "./category.css"


export default class Category extends React.Component {

    abortController = new AbortController();

    constructor(props) {
        super(props);
        this.state = {
            img: null,
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

    async componentDidMount() {
        fetch(`https://dog.ceo/api/breed/${this.props.name}/images/random/1`, {signal: this.abortController.signal})
            .then(res => res.json())
            .then(
                (data) => {
                    let url = data['message'];

                    this.setState({
                        img: url
                    });

                })
            .catch((error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    }


    render() {
        let name = this.toTitleCase(this.props.name);


        return(
            <div className="card category" >
                <div className="card-body">
                    <img alt={this.props.name} src={this.state.img} width="320" height="180" />
                    <h5 className="card-title">{name}</h5>
                    <Link className="btn btn-primary" to={'/' + this.props.name}>Woof!</Link>
                </div>
            </div>
        );

    }
}



