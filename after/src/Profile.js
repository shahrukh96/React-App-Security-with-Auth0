import React, { Component } from "react";

class Profile extends Component {
  state = {
    Profile: null,
    err: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((Profile, error) =>
      this.setState({ Profile, error })
    );
  }
  render() {
    const { Profile } = this.state;
    if (!Profile) return null;

    return (
      <React.Fragment>
        <h1>Profile</h1>
        <p>{Profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={Profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(Profile, null, 2)}</pre>
      </React.Fragment>
    );
  }
}

export default Profile;
