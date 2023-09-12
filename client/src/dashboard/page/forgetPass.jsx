import React, {useState} from 'react'

function ForgetPass() {
    const [email, setEmail] = useState('');

    const handleSendEmail = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const jsondata = {
            email: data.get('email'),
          }
        setEmail(data.get('email'))
          async function postJSON(jsondata) {
            try {
              const response = await fetch("http://127.0.0.1:8080/forget", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(jsondata),
              });
              const result = await response.json();
              console.log("Success:", result);
              if(result.status==='ok'){
                alert(result.message)
              }if(result.status==='error'){
                alert(result.message)
              }
            } catch (error) {
              console.error("Error:", error);
            }
          }
          postJSON(jsondata);
      };

      const handleverifyResetPass = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const jsondata = {
            email: email,
            otp: data.get('otp')
          }
          async function postJSON(jsondata) {
            try {
              const response = await fetch("http://127.0.0.1:8080/verifyresetpass", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(jsondata),
              });
              const result = await response.json();
              console.log("Success:", result);
              if(result.status==='ok'){
                alert(result.message)
                localStorage.setItem('data',JSON.stringify(jsondata))
                window.location='/resetpass'
              }if(result.status==='error'){
                alert(result.message)
              }
            } catch (error) {
              console.error("Error:", error);
            }
          }
          postJSON(jsondata);
      };
    
  return (
    <div>
        <h1 className="text-center">Forget Password</h1><br/>
        <p>Please verify your email</p>
        <div>
            <form onSubmit={handleSendEmail}>
                <label htmlFor="">Enter email:</label>
                <input type='email' name='email' required/>
                <button>Send email</button>
            </form>
            <form onSubmit={handleverifyResetPass}>
                <label htmlFor="">Enter OTP:</label>
                <input type="text" name='otp' required/>
                <button>Reset password</button>
            </form>
        </div>
    </div>
  )
}

export default ForgetPass