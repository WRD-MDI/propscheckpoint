import React from "react";
import PropTypes from "prop-types";

function Profile({
  handelName,
  information: { fullName, profession, bio },
  children,
}) {
  return (
    <div>
      {children}
      <h1>{fullName}</h1>
      <h2>{profession}</h2>
      <h2>{bio}</h2>
      <button onClick={() => handelName(fullName)}>Show name</button>
    </div>
  );
}

Profile.defaultProps = {
  handelName: () => {
    alert("there is no functionw");
  },
};

Profile.propTypes = {
  information: PropTypes.shape({
    fullName: PropTypes.number.isRequired,
  }),
};

export default Profile;
