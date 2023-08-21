import React from "react";

const FormAddOns = ({ formData, handleAddOns }) => {
  return (
    <form className="form-plan">
      <div className="plan add-ons">
        <div
          onClick={() => handleAddOns("service")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.includes("service") ? "selected" : ""
          }`}
        >
          <input type="checkbox" name="" id="" />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Online Service
              </span>
              <span className="card-price">Access to multiplayer games</span>
            </div>
            <span className="card-price">+ $1/mo</span>
          </div>
        </div>

        <div
          onClick={() => handleAddOns("storage")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.includes("storage") ? "selected" : ""
          }`}
        >
          <input type="checkbox" name="" id="" />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Larger Storage
              </span>
              <span className="card-price">Extra 1TB of cloud save</span>
            </div>
            <span className="card-price">$2/mo</span>
          </div>
        </div>

        <div
          onClick={() => handleAddOns("profile")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.includes("profile") ? "selected" : ""
          }`}
        >
          <input type="checkbox" name="" id="" />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Customizable Profile
              </span>
              <span className="card-price">Custom theme on your profile</span>
            </div>
            <span className="card-price">$2/mo</span>
          </div>
        </div>
      </div>
      <footer className="mt-32">
        <button className="p-4 px-8 font-medium rounded-lg">Next Step</button>
      </footer>
    </form>
  );
};

export default FormAddOns;
