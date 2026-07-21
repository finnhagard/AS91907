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

                            {/*phone input*/}
                            <tr>
                                <td>Phone number:</td>
                                <td>
                                    <input type="tel" size="50" placeholder="Phone"/>
                                </td>
                            </tr>

                            {/*DOB input*/}
                            <tr>
                                <td>Date of birth:</td>
                                <td>
                                    <input type="date" id="birthday"/>
                                </td>
                            </tr>

                            {/*gender input*/}
                            <tr>
                                <td>Gender :</td>
                                <td>
                                    <input type="radio" name="g"/> Male
                                    <input type="radio" name="g"/> Female
                                    <input type="radio" name="g"/> Other
                                </td>
                            </tr>

                            {/*course input*/}
                            <tr>
                                <td>Course :</td>
                                <td><select>
                                    <option>Select</option>
                                    <option>Chinese</option>
                                    <option>English</option>
                                </select>
                                </td>
                            </tr>

                            {/*address input*/}
                            <tr>
                                <td>Address :</td>
                                <td><textarea cols="48" rows="5"></textarea></td>
                            </tr>


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
