import React from "react";
import "../css/main.css";
import axios from "axios";

function UrgentHelp() {
  const handleSubmit = async (event) => {

    const a = document.getElementById("ashu").value.length;
    const b = document.getElementById("ashu1").value.length;
    const c = document.getElementById("ashu2").value.length;
    const d = document.getElementById("ashu3").value.length;
    const e = document.getElementById("ashu4").value.length;
    
    if (a==0 || b==0 || c==0 || d==0 || e==0) {
      alert("Please Enter all details before Submitting!");
      event.preventDefault();
    }else{
      alert("Make Sure you have sent us the Reports and AADHAR card before submitting! If already sent, Press OK!");
      await axios.post("/urgenthelp").then((res)=>{
        if(res){
          alert("We have Submitted your details, Someone from our Team will contact you soon..");
        }
        
      })

    }
}

  

  
  return (
    <div class="wrap-contact100">
      <form
        class="contact100-form validate-form"
        method="POST"
        action="/urgenthelp"
      >
        <span
          style={{
            color: "#00738f",
            fontFamily: `"Poppins", sans-serif`,
            fontWeight: "bolder",
          }}
          class="contact100-form-title"
        >
          Urgent Help!
        </span>
        <p style={{ color: "black" }}>
          All the residents of UP are requested to inform us if they need any
          sort of help may it be availability of COVID-19 medicines,
          availability of beds in hospitals, or any other emergency caused by
          the deadly Corona Virus. We assure you that we will work at our level
          best to do the needful.{" "}
        </p>
        <label class="label-input100" for="first-name">
          Name of Patient *
        </label>
        <div
          class="wrap-input100 rs1-wrap-input100 validate-input"
          data-validate="Enter Name"
        >
          <input
            id="ashu"
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
            id="ashu1"
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
            id="ashu2"
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
            id="ashu3"
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
            id="ashu4"
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
          <a href="https://Wa.me/+91-8957885798" style={{ color: "cornsilk" }}>
            Send Report and AADHAR
          </a>
          <span class="focus-input100"></span>
        </div>
        
        <div class="container-contact100-form-btn">
          <button id="pay" onClick={handleSubmit} class="contact100-form-btn">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default UrgentHelp;
