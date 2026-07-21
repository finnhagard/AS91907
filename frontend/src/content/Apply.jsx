import "./Apply.css";

function Apply() {
    return (
        <main className="apply">
            <section className="apply_content">
                <form>
                    <table align="center" width="700" cellPadding="10">
                        <thead>
                            <tr>
                                <td colSpan="2" align="center">
                                    <h1>Student Application Form</h1>
                                </td>
                        </tr>
                        </thead>
                        <tbody>
                            {/*name input*/}
                            <tr>
                                <td>
                                    <label htmlFor="fname">First name:</label>
                                </td>
                                <td>
                                    <label htmlFor="lname">Last name:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" size="21" placeholder="First Name" id="fname"  name="fname"/>
                                </td>
                                <td>
                                    <input type="text" size="21" placeholder="Last Name" id="lname"  name="lname"/>
                                </td>
                            </tr>

                            {/*NSN input*/}
                            <tr>
                                <td>
                                    <label htmlFor="nsn">NSN (if known):</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number" size="21" placeholder="NSN" id="nsn"  name="nsn"/>
                                </td>
                            </tr>

                            {/*email input*/}
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                            </tr>
                            <tr>
                                <td><input type="email" placeholder="Email" id="email" name="email"/></td>
                            </tr>

                            {/*DOB input*/}
                            <tr>
                                <td>
                                    <label htmlFor="birthday">Date of Birth:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" id="birthday" name="birthday"/>
                                </td>
                            </tr>

                            {/*gender input*/}
                            <tr>
                                <td>
                                    <label htmlFor="gender">Gender:</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <input type="radio" name="gender" id="female"/>
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" name="gender" id="male"/>
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="other"/>
                                    <label htmlFor="other">Other</label>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>

                            {/*current high school*/}

                            {/*year level*/}

                            <tr>
                                <td>
                                    <label htmlFor="school">Current high school:</label>
                                </td>
                                <td>
                                    <label htmlFor="year">Current year level:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="school" id="school"/>
                                </td>
                                <td>
                                    <select id="year" name="year">
                                        <option value="">--- Select ---</option>
                                        <option value="ynine">Year 9</option>
                                        <option value="yten">Year 10</option>
                                        <option value="yeleven">Year 11</option>
                                        <option value="ytwelve">Year 12</option>
                                        <option value="ythirteen">Year 13</option>
                                    </select>
                                </td>
                            </tr>

                            {/*course input*/}
                            <tr>
                                <td>
                                    <label htmlFor="course">Course:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select id="course" name="course">
                                        <option value="">--- Select ---</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="english">English</option>
                                    </select>
                                </td>
                            </tr>

                            {/*preferred time*/}
                            <tr>
                                <td>
                                    <label htmlFor="time">Preferred time:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select id="time" name="time">
                                        <option value="">--- Select ---</option>
                                        <option value="monafternoon">Monday afternoons</option>
                                        <option value="wedsafternoon">Wednesday afternoons</option>
                                        <option value="satmorning">Saturday mornings</option>
                                    </select>
                                </td>
                            </tr>

                            {/*phone input*/}
                            <tr>
                                <td><label htmlFor= "phone">Phone Number:</label> </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="tel" size="20" placeholder="Phone" id="phone" name="phone"/>
                                </td>
                            </tr>

                            {/*address input*/}
                            <tr>
                                <td>Address :</td>
                                <td><textarea cols="48" rows="5"></textarea></td>
                            </tr>

                            {/*emergency contact*/}

                            {/*next of kin*/}

                            <tr>
                                <td colSpan="2" align="center">
                                    <input type="submit"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        </main>
    );
}

export default Apply;
