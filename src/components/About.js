
import React from 'react';
import ApiCalls from './ApiCalls';

class About extends React.Component {

  state = {
    patients: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  constructor(props) {
  super(props);
  }

  // componentWillMount() {
  //   ApiCalls.search(value, (patients) => {
  //     console.log(patients);
  //     this.setState({
  //       foods: foods.slice(0, MATCHING_ITEM_LIMIT),
  //     });
  //   });
  // }

  // handleSearchChange = (e) => {
  //   const value = e.target.value;
  //
  //   this.setState({
  //     searchValue: value,
  //   });
  //
  //   if (value === '') {
  //     this.setState({
  //       foods: [],
  //       showRemoveIcon: false,
  //     });
  //   } else {
  //     this.setState({
  //       showRemoveIcon: true,
  //     });
  //
  //     ApiCalls.search(value, (foods) => {
  //       this.setState({
  //         foods: foods.slice(0, MATCHING_ITEM_LIMIT),
  //       });
  //     });
  //   }
  // };
  //
  // handleSearchCancel = () => {
  //   this.setState({
  //     foods: [],
  //     showRemoveIcon: false,
  //     searchValue: '',
  //   });
  // };

  render() {

    return (
      <div>
        <h1> About page </h1>
        <form method="post" encType="multipart/form-data" action="/api/files/upload">
            <input type="text" name="fname" />
            <input type="file" name="upl"/>
            <input type="submit" value="Upload"/>
        </form>

      </div>
    );
  }
}

export default About;
