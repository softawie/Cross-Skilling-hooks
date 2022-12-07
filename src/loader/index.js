import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = (loading) => {
  return loading ? (
    <div className="overlay-content">
      <div className="wrapper">
        <ThreeDots
          height="180"
          width="180"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  ) : null;
};

export default Loader;
