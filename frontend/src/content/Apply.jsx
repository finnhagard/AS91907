import "./Apply.css";
//oi quit messing with my branch

function Apply() {
    return (
        <main className="apply">
            <section className="apply_content">
                <h1>Apply</h1>
                <div className="form">
                    <form>
                        <h2>Personal Details</h2>

                        <div className="multi-column">
                            <label htmlFor="givenname">Given name(s)*</label><br></br>
                            <input type="text" id="givenname" name="givenname" size="27" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="surname">Surname*</label><br></br>
                            <input type="text" id="surname" name="surname" size="27" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="prefname">Preferred name</label><br></br>
                            <input type="text" id="prefname" name="prefname" size="27"/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nsn">NSN (if known)</label><br></br>
                            <input type="text" id="nsn" name="nsn" size="27" />
                        </div>

                        <div className="multi-column">
                            <label htmlFor="email">Email*</label><br></br>
                            <input type="email" id="email" name="email" size="27" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="phone">Phone*</label><br></br>
                            <input type="tel" id="phone" name="phone" size="27" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="birthday">Date of birth*</label><br></br>
                            <input type="date" id="birthday" name="birthday" className="dropdown" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="gender">Gender*</label><br></br>
                            <select id="gender" name="gender" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="multi-column">
                          <label htmlFor="school">Current high school*</label><br></br>
                          <input type="text" id="school" name="school" size="27" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="year">Year level*</label><br></br>
                            <select id="year" name="year" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="year9">Year 9</option>
                                <option value="year10">Year 10</option>
                                <option value="year11">Year 11</option>
                                <option value="year12">Year 12</option>
                                <option value="year13">Year 13</option>
                            </select>
                        </div>


                        <h2>Course Details</h2>

                        <div>
                            <label htmlFor="course">Course*</label><br></br>
                            <input type="radio" id="english" name="course" value="English"/>
                            <label htmlFor="english" className="radio-label">English</label>
                            <input type="radio" id="chinese" name="course" value="Chinese"/>
                            <label htmlFor="chinese" className="radio-label">Chinese</label>
                        </div>

                        <div>
                            <label htmlFor="time">Preferred time*</label><br></br>
                            <select id="time" name="time" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="option1">Monday afternoon</option>
                                <option value="option2">Wednesday afternoon</option>
                                <option value="option3">Saturday morning</option>
                            </select>
                        </div>

                        <div>
                            <h2>Address</h2>

                            <label htmlFor="address">Address*</label><br></br>
                            <input type="text" id="address" name="address" size="27" required/><br></br><br></br>

                            <div className="multi-column">
                                <label htmlFor="suburb">Suburb</label><br></br>
                                <input type="text" id="suburb" name="suburb" size="27"/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="city">City*</label><br></br>
                                <input type="text" id="city" name="city" size="27" required/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="postcode">Post Code</label><br></br>
                                <input type="text" id="postcode" name="postcode" size="27"/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="country">Country*</label><br></br>
                                <input type="text" id="country" name="country" size="27" required/>
                            </div>
                        </div>


                        <h2>Emergency Contact Details</h2>

                        <div className="multi-column">
                            <label htmlFor="contactname">Full name*</label><br></br>
                            <input type="text" id="contactname" name="contactname" size="35" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="relationship">Relationship to you*</label><br></br>
                            <input type="text" id="relationship" name="relationship" size="20" required/>
                        </div>

                        <div className>
                            <label htmlFor="contactemail">Email*</label><br></br>
                            <input type="email" id="contactemail" name="contactemail" size="27" required/>
                        </div>

                        <div className>
                            <label htmlFor="contactphone">Phone*</label><br></br>
                            <input type="tel" id="contactphone" name="contactphone" size="27" required/>
                        </div>


                        <h2>Next of Kin</h2>

                        <div className="multi-column">
                            <label htmlFor="nokname">Full name*</label><br></br>
                            <input type="text" id="nokname" name="nokname" size="35" required/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nokrelationship">Relationship to you*</label><br></br>
                            <input type="text" id="nokrelationship" name="nokrelationship" size="20" required/>
                        </div>

                        <div>
                            <label htmlFor="nokemail">Email*</label><br></br>
                            <input type="email" id="nokemail" name="nokemail" size="27" required/>
                        </div>

                        <div>
                            <label htmlFor="nokphone">Phone*</label><br></br>
                            <input type="tel" id="nokphone" name="nokphone" size="27" required/>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Apply;
