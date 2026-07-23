import "./Apply.css";

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
                            <input type="text" id="givenname" name="givenname" size="27" required/><br></br><br></br>
                            <label htmlFor="prefname">Preferred name</label><br></br>
                            <input type="text" id="prefname" name="prefname" size="27"/>
                        </div>
                        <div className="multi-column">
                            <label htmlFor="surname">Surname*</label><br></br>
                            <input type="text" id="surname" name="surname" size="27" required/><br></br><br></br>
                            <label htmlFor="nsn">NSN (if known)</label><br></br>
                            <input type="text" id="nsn" name="nsn" size="27" /><br></br>
                        </div><br></br>
                        <label htmlFor="email">Email*</label><br></br>
                        <input type="email" id="email" name="email" size="27" required/><br></br><br></br>
                        <div className="multi-column">
                            <label htmlFor="birthday">Date of birth*</label><br></br>
                            <input type="date" id="birthday" name="birthday" className="dategenderyear" required/>
                        </div>
                        <div className="multi-column">
                            <label htmlFor="gender">Gender*</label><br></br>
                            <select id="gender" name="gender" className="dategenderyear" required>
                                <option value="">--- Select ---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div><br></br>
                        <div className="multi-column">
                          <label htmlFor="school">Current high school*</label><br></br>
                          <input type="text" id="school" name="school" size="27" required/>
                        </div>
                        <div className="multi-column">
                            <label htmlFor="year">Year level*</label><br></br>
                            <select id="year" name="year" className="dategenderyear" required>
                                <option value="">--- Select ---</option>
                                <option value="year9">Year 9</option>
                                <option value="year10">Year 10</option>
                                <option value="year11">Year 11</option>
                                <option value="year12">Year 12</option>
                                <option value="year13">Year 13</option>
                            </select>
                        </div><br></br><br></br>
                        <h2>Course Details</h2>
                        <div>
                            <label htmlFor="course">Course*</label><br></br>
                            <input type="radio" id="english" name="course" value="English"/>
                            <label htmlFor="english">English</label>
                            <input type="radio" id="chinese" name="course" value="English"/>
                            <label htmlFor="chinese">Chinese</label>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Apply;
