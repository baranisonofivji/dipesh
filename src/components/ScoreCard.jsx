import React from "react";

export const ScoreCard = (props) => {
  const { firstUser, secondUser } = props;

  return (
    <>
      {/* <!-- The Container for Score Card only --> */}
      <div className="col-12 col-lg-6">
        <br className="d-none-md" />
        {/* <!-- This is the actual component to show the score card for the games played in the past.--> */}
        <div className="card">
          <div className="card-body">
            {/* <!-- Score card component --> */}
            <div>
              <h5 className="card-title">Score Card</h5>
              <div className="card-subtitle mb-2 text-muted">Total Game Played : 5</div>
            </div>
            {/* <!-- This is the container holding the players list along with their game's score e.g. wins and lost for each of the player.--> */}
            <div className="list-group w-auto">
              <div
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true">
                {/* <!-- This is pure HTML, CSS based element. Expectation is to develop the avatar component or use existing avatar component available on the internet.--> */}
                <div className="rounded-circle avatar">
                  <div className="avatar-title">AR</div>
                </div>

                <div className="d-flex gap-2 w-100 justify-content-between">
                  {/* <!-- Resuable component for player name--> */}
                  <div style={{ width: "50%" }}>
                    <h6 className="mb-0">
                      {firstUser.firstName} {firstUser.lastName}
                    </h6>
                  </div>
                  {/* <!-- Reusbale button component wins & losses that each player has so far. Expectation is to build re-usable component.--> */}
                  <button type="button" className="btn btn-success" style={{ width: "25%" }}>
                    Won <span className=" badge rounded-pill bg-danger">2</span>
                  </button>
                  {/* <!-- Reusbale button component wins & losses that each player has so far. Expectation is to build re-usable component.--> */}
                  <button type="button" className="btn btn-warning" style={{ width: "25%" }}>
                    Lost <span className=" badge rounded-pill bg-danger">3</span>
                  </button>
                </div>
              </div>
              <div
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true">
                {/* <!-- This is pure HTML, CSS based element. Expectation is to develop the avatar component or use existing avatar component available on the internet.--> */}
                <div className="rounded-circle avatar">
                  <div className="avatar-title">RA</div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  {/* <!-- Resuable component for player name--> */}
                  <div style={{ width: "50%" }}>
                    <h6 className="mb-0">
                      {secondUser.firstName} {secondUser.lastName}
                    </h6>
                  </div>
                  {/* <!-- Reusbale button component wins & losses that each player has so far. Expectation is to build re-usable component.--> */}
                  <button type="button" className="btn btn-success" style={{ width: "25%" }}>
                    Won <span className=" badge rounded-pill bg-danger">3</span>
                  </button>
                  {/* <!-- Reusbale button component wins & losses that each player has so far. Expectation is to build re-usable component.--> */}
                  <button type="button" className="btn btn-warning" style={{ width: "25%" }}>
                    Lost <span className=" badge rounded-pill bg-danger">2</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
