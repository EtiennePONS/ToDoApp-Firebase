import "./SignUpModal.css";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el) {
      inputs.current.push(el);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      {modalState.signUpModal && (
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
                <h1 className="modal-title">Sign Up</h1>
                <form className="sign-up-form" onSubmit={handleForm}>
                  <div className="mb-3">
                    <label htmlFor="signUpEmail" className="form-label">
                      Email adress
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="text"
                      className="form-control"
                      id="signUpEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signUpPwd" className="form-label">
                      Password
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signUpPwd"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="repeatPwd" className="form-label">
                      Confirm password
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="repeatPwd"
                    />
                  </div>
                  <button className="btn signUpSubmit">Submit</button>{" "}
                </form>
                {/* <button
                  onClick={() => {
                    toggleModals("close");
                  }}
                  className="btn cancel"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
