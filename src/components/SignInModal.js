import "./SignInModal.css";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await signIn(inputs.current[0].value, inputs.current[1].value);
      formRef.current.reset();
      toggleModals("close");
      navigate("/ToDoApp-Firebase/private/private-home");
      setValidation("");
    } catch (err) {
      setValidation("wOopsy, email and/or password incorrect");
    }
  };
  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => {
              closeModal();
            }}
            className="w-100 h-100 bg-dark bg opacity-75"
          ></div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="modal-dialog">
              <div className="modal-content">
                <h1 className="modal-title">Connexion</h1>
                <form
                  ref={formRef}
                  className="sign-In-form"
                  onSubmit={handleForm}
                >
                  <div className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">
                      Adresse Email
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="text"
                      className="form-control"
                      id="signInEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signInPwd" className="form-label">
                      Mot de Passe
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signInPwd"
                    />
                    <p className="text-danger mt-1">{validation}</p>
                  </div>
                  <button className="btn signInSubmit">Soumettre</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
