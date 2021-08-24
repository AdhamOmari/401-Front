import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

import { Col, Row, Card, Button } from 'react-bootstrap'
import Favcards from './Favcards';

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      show: false,
      updatedata: {},
      index: ''
    }
  }

  componentDidMount = async () => {
    const email = this.props.auth0.user.email;

    let item = await axios.get(`http://localhost:3030/fromDB?email=${email}`)
    this.setState({
      data: item.data
    })
    console.log(this.state.data)
  }

  deleteFan = async (idx) => {
    const email = this.props.auth0.user.email;



    let result = await axios.post(`http://localhost:3030/deleteFav/${idx}?email=${email}`)
    this.setState({
      data: result.data
    })

  }

  handelClose = async () => {
    this.setState({
      show: false,

    })
  }
  handelShow = async (index) => {
    this.setState({
      show: true,
      index: index,
      updatedata: {
        instructions: this.state.data[index].instructions,
        photo: this.state.data[index].photo,
        name: this.state.data[index].name,
      }

    })
  }

  handelUpdate = async (e) => {
    e.preventDefault();
    const requbdate = {
      email: this.props.auth0.user.email,
      instnameructions: e.target.name.value,
      photo: e.target.name.value,
      name: e.target.name.value


    }
    await axios.put(`http://localhost:3030/update/${this.state.index}`, requbdate)
  }




  render() {
    return (
      <>
        <Favcards data={this.state.data}
          deleteFan={this.deleteFan}
          handelShow={this.handelShow}
          handelClose={this.state.handelClose}
          handelUpdate={this.handelUpdate}
        />
      </>
    )
  }
}

export default withAuth0(FavFlowers);
