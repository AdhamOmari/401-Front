import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AllData from './AllData';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = async () => {

   let item= await axios.get('http://localhost:3030/allData')
   this.setState({
    data:item.data
   })
   console.log(this.state.data)
  }

  addtoFav = async (idx) => {

    let addBody = {
      email: this.props.auth0.user.email,
      instructions: this.state.data[idx].instructions,
      photo: this.state.data[idx].photo,
      name: this.state.data[idx].name
    }
   let result= await axios.post('http://localhost:3030/addToDb',addBody)
    this.setState({
      data: result.data
    })

  }
  render() {
    return (
      <>
        <AllData
          data={this.state.data}
          addtoFav={this.addtoFav} />
      </>
    )
  }
}

export default withAuth0(Home);
