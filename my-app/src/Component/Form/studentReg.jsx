import React from "react";

function StudentReg() {
    return (        
        <>
        <h1>Student Registration Details</h1>
        <form>
            <input type="text" placeholder="Enter Name" /><br />
            <input type="email" placeholder="Enter Email" /><br />
            <input type="password" placeholder="Enter Password " /><br />
            <button type="submit">Register</button> 
            </form>
        </>
    )
}
export default StudentReg;
