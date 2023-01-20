import React, { useState } from "react";
import "./multipleinputes.css"

const Multipleinputes = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const [record, setRecord] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        // console.log(record);
        setRecord([...record, newRecord]);
        console.log(record);

        setUserRegistration({ username: "", email: "", phone: "", password: "" });
    }
    return (
        <>
            <center>
                <h1>Registration form</h1>
            </center>

            <form action="#" onSubmit={handleSubmit} >
                <center>
                    <div className="id1">
                        <label htmlFor="username">User name</label><br />
                        <input type="text" autoComplete="off"
                            value={userRegistration.username}
                            onChange={handleInput}
                            name="username"  
                            id="username" 
                            placeholder="Enter your username" 
                            className="id2" /><br /><br />
                    </div>
                    
                    <div className="id1">
                        <label htmlFor="email">Email</label><br />
                        <input type="text" autoComplete="off"
                            value={userRegistration.email}
                            onChange={handleInput}
                            name="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            className="id2" /><br /><br />
                    </div>
                    
                    <div className="id1">
                        <label htmlFor="phone">Phone</label><br />
                        <input type="text" autoComplete="off"
                            value={userRegistration.phone}
                            onChange={handleInput}
                            name="phone" 
                            id="phone" 
                            placeholder="Enter your Phone" 
                            className="id2" /><br /><br />
                    </div>
                    
                    <div className="id1">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" autoComplete="off"
                            value={userRegistration.password}
                            onChange={handleInput}
                            name="password" 
                            id="password" 
                            placeholder="Enter your Password" 
                            className="id2" /><br /><br />
                    </div>
                </center >
                <button type="submit">Registration</button>
            </form>
            <div>
                {
                    record.map((curElem) => {
                        const { id, username, email, phone, password } = curElem;
                        return (
                            <center className="Showdata">
                                <div className="showdata" key={id}>
                                    <button><p>{username}</p></button>
                                    <button><p>{email}</p></button>
                                    <button><p>{phone}</p></button>
                                    <button><p>{password}</p></button><br />
                                </div>
                            </center>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Multipleinputes