// import React from 'react'
// import axios from 'axios'
//
// export default class BodyData extends React.Component {
//     state = {
//         query: "",
//         data: [],
//     };
//
//     handleInputChange = event => {
//     const query = event.target.value;
//
//     this.setState(prevState => {
//
//     // const filteredData = prevState.data.filter(element => {
//     //     return element.name.toLowerCase().includes(query.toLowerCase());
//     // });
//
//     return {
//         query,
//         filteredData
//         };
//         });
// };
//
// getData = () => {
//     var result;
//     fetch(`https://dog.ceo/api/breed/pug/images/random/10`)
//         .then(response => response.json())
//         .then(data => {
//             result = data['message'];
//             const { query } = this.state;
//         });
//
//     this.setState({
//         result
//     });
// };
//
//
// componentWillMount() {
//     this.getData();
// }
//
// render() {
//     return (
//         <div className="searchForm">
//         <form>
//         <input
//     placeholder="Search for..."
//     value={this.state.query}
//     onChange={this.handleInputChange}
//     />
//     </form>
//     // <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
//     <div>{this.state.data.map(i => <img src="i"/>)}</div>
//     </div>
// );
// }
// }
