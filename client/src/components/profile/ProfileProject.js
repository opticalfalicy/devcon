import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { project } = this.props;
    // const { count, sort, clientId, clientSecret } = this.state;

    // fetch(
    //   `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ repos: data });
    //   })
    //   .catch(err => console.log(err));
  }
  render() {
    const { project } = this;

    console.log("proj props", this);

    const projectItem = project.map(item => (
      <div className="card card-body mb-2">
        <iframe
          title="project"
          src={project.featuredproject}
          width="200"
          height="200"
        />
      </div>
    ));

    return (
      <div>
        <hr />
        <h3 className="mb-4">Featured Project</h3>
        {projectItem}
      </div>
    );
  }
}

ProfileProject.propTypes = {
  featuredproject: PropTypes.string
};

export default ProfileProject;
