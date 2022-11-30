import React from "react";

export const AddPlayer = (props) => {
  const { firstUser, setFirstUser, secondUser, setSecondUser } = props;

  const getFirstUser = (e) => {
    console.log(setFirstUser({ ...firstUser, [e.target.name]: e.target.value }));
  };

  const getSecondUser = (e) => {
    console.log(setSecondUser({ ...secondUser, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add Player</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  onChange={(e) => getFirstUser(e)}
                />
              </div>
              <div className="col-md-6">
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  onChange={(e) => getFirstUser(e)}
                />
              </div>
              <div className="col-md-6">
                <label for="firstName" className="form-label">
                  First name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={(e) => getSecondUser(e)}
                />
              </div>
              <div className="col-md-6">
                <label for="lastName" className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  onChange={(e) => getSecondUser(e)}
                  name="lastName"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Start Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
