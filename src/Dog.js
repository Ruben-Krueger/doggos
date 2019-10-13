// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
//
// export default function Dog(props) {
//     // Setting initial state
//     const initialUserState = {
//         user: {},
//         loading: true,
//     }
//
//     // Getter and setter for user state
//     const [user, setUser] = useState(initialUserState)
//
//     // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
//     useEffect(() => {
//         const getUser = async () => {
//         // Pass our param (:id) to the API call
//         const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)
//
//     // Update state
//     setUser(data)
// }
//
//     // Invoke the async function
//     getUser()
// }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop
//
//     // Return a table with some data from the API.
//     return user.loading ? (
//         <div>Loading...</div>
// ) : (
//     <div className="container">
//         <h1>{props.match.params.id}</h1>
//
//     <table>
//     <thead>
//     <tr>
//     <th>Name</th>
//     <th>Location</th>
//     <th>Website</th>
//     <th>Followers</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//     <td>{user.name}</td>
//     <td>{user.location}</td>
//     <td>
//     <a href={user.blog}>{user.blog}</a>
//     </td>
//     <td>{user.followers}</td>
//     </tr>
//     </tbody>
//     </table>
//     </div>
// )
// }

import React from 'react'

export default class Dog extends React.Component {
    render() {
        return (
            <header className="component-header">
            <div className = "footer mt-auto py-3">
                <p>{this.props.name}</p>
                <img src={this.props.imgURL} alt="pic of doggo" width="100" height="100" />
            </div>
            </header>
        );
    }
}
