import React from "react";

export const GameCard = (props) => {
  const { firstUser, secondUser } = props;
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div id="timer">
                <h5 className="card-title mb-3">
                  <div className="p-3 bg-info bg-opacity-10 border border-info border-start-1 rounded text-danger">
                    Time Watch: 00:12:43
                  </div>
                  {/* <!-- Time Watch: 00:12:43 --> */}
                </h5>
              </div>
              <div className="row">
                <div className="col-md-4">
                  {/* <!-- This is just a place holder image. You wil need to replace your actual implementation of tic tac toe board component.--> */}
                  <svg
                    className="bd-placeholder-img img-fluid rounded"
                    width="100%"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image
                    </text>
                  </svg>
                </div>
                {/* <!-- This is the container to hold the players playing the game.--> */}
                <div className="col-md-8">
                  {/* <!-- This should be developed as independent component and should be replaced with these lines.--> */}
                  <div className="card-text">
                    <small className="text-muted"> </small>
                  </div>
                  {/* <!-- This is the container to hold on the current player list playing the game.--> */}
                  <div className="list-group w-auto">
                    {/* <!-- This is the composite component to be developed. It should have the avatar component as well as the name of the current players--> */}
                    <div
                      className="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true">
                      {/* <!-- This is pure HTML, CSS based element. Expectation is to develop the avatar component or use existing avatar component available on the internet.--> */}
                      <div className="rounded-circle avatar">
                        <div className="avatar-title">AR</div>
                      </div>
                      {/* <!-- This should be developed as the react component, which should hold the first name as wel as last name of the player. 
                                                Please be mindful that, you will need to make it re-usable. i.e. first name, last name should be taken as a props --> */}
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div style={{ width: "80%" }}>
                          {firstUser.firstName} {firstUser.lastName}
                          <h6 className="mb-0"></h6>
                        </div>
                        <small className="text-muted">Your turn...</small>
                      </div>
                    </div>
                    {/* <!-- Re-use this from above component list. We are expecting re-use of the components for avatar and player name.--> */}
                    <div
                      className="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true">
                      {/* <!-- This is pure HTML, CSS based element. Expectation is to develop the avatar component or use existing avatar component available on the internet.--> */}
                      <div className="rounded-circle avatar">
                        <div className="avatar-title">RA</div>
                      </div>
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div style={{ width: "80%" }}>
                          <h6 className="mb-0">
                            {" "}
                            {secondUser.firstName} {secondUser.lastName}
                          </h6>
                        </div>
                        <small className="text-muted">Played</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
