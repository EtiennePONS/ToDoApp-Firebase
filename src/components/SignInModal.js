import "./SignInModal.css";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function SignInModal() {
  const { modalState, toggleModals } = useContext(UserContext);

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => {
              toggleModals("close");
            }}
            className="w-100 h-100 bg-dark bg opacity-75"
          ></div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="modal-dialog">
              <div className="modal-content">
                <h1 className="modal-title">Sign In</h1>
                <form className="sign-in-form">
                  <div className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">
                      Email adress
                    </label>
                    <input
                      // ref={addInputs}
                      name="email"
                      required
                      type="text"
                      className="form-control"
                      id="signInEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signInPwd" className="form-label">
                      Password
                    </label>
                    <input
                      // ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signInPwd"
                    />
                  </div>
                  <button className="btn signInSubmit">Submit</button>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SignInModal;
