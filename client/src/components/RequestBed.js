import React from "react";
import axios from "axios"

function RequestBed() {
  const handleSubmit = async (event) => {

    const a = document.getElementById("first-name").value.length;
    const b = document.getElementById("email").value.length;
    const c = document.getElementById("phone").value.length;
    const d = document.getElementById("message").value.length;
    const e = document.getElementById("second-name").value.length;
    
    
    if (a==0 || b==0 || c==0 || d==0 || e==0 ) {
      alert("Please Enter all details before Submitting!");
      event.preventDefault();
    }else{
      alert("Make Sure you have sent us the Reports and AADHAR card before submitting! If already sent, Press OK!");
      await axios.post("/requestbed").then((res)=>{
        if(res){
          alert("We have Submitted your details, Someone from our Team will contact you soon..");
        }
        
      })

    }
}
 
  return (
    <div>
      <div class="wrap-contact100">
        <form
          class="contact100-form validate-form"
          method="POST"
          action="/requestbed"
        >
          <span
            style={{
              color: "#00738f",
              fontFamily: `"Poppins", sans-serif`,
              fontWeight: "bolder",
            }}
            class="contact100-form-title"
          >
            Request Bed
          </span>

          <label class="label-input100" for="first-name">
            Name of Patient *
          </label>
          <div
            class="wrap-input100 rs1-wrap-input100 validate-input"
            data-validate="Enter Name"
          >
            <input
              id="first-name"
              class="input100"
              type="text"
              name="first"
              placeholder="Enter Name of Patient"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="email">
            Age of Patient *
          </label>
          <div class="wrap-input100 validate-input" data-validate="Enter Age">
            <input
              id="email"
              class="input100"
              type="number"
              name="age"
              placeholder="Enter Age of Patient"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="phone">
            Enter Phone number
          </label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Phone Number is required"
          >
            <input
              id="phone"
              class="input100"
              type="number"
              name="phone"
              placeholder="Eg. +91 98765 43210"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="amount">
            Address*
          </label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Address is required"
          >
            <input
              type="text"
              id="message"
              class="input100"
              name="address"
              placeholder="Enter Address"
            />
            <span class="focus-input100"></span>
          </div>
          <label class="label-input100" for="amount">
            Help Needed!?
          </label>
          <div
            class="wrap-input100 validate-input"
            style={{ height: "100px" }}
            data-validate="Mention Help Needed"
          >
            <textarea
              type="text"
              id="second-name"
              class="input100"
              name="help"
              placeholder="Mention help needed from us"
            ></textarea>
            <span class="focus-input100"></span>
          </div>
          <label class="label-input100" for="amount">
            Send Reports and AADHAR before Submitting
          </label>
          <p class="notice">Please Note: Your Submission will only be considered if you send us the Reports and AADHAR !</p>
          <div class="contact100-form-btn vol">
            <a
              href="https://Wa.me/+91-8957885798"
              style={{ color: "cornsilk" }}
            >
              Send Report and AADHAR
            </a>
            <span class="focus-input100"></span>
          </div>

          <div class="container-contact100-form-btn">
            <button onClick={handleSubmit} id="pay" class="contact100-form-btn">
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestBed;
