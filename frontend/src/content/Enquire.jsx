import { useState } from "react";
import "./Enquire.css";

function Enquire() {
    const [enqNature, setEnqNature] = useState("");
    const [otherSpecify, setOtherSpecify] = useState("");
    const [error, setError] = useState(false);

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setEnqNature(value);
        setError(false);
        if (value !== "Other") {
            setOtherSpecify("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (enqNature === "Other" && otherSpecify.trim() === "") {
            setError(true);
            document.getElementById("otherSpecify").focus();
            return;
        }

        setError(false);
        alert("Form submitted successfully!");
        //things go here
    };

    return (
        <main className="enquire">
            <title>Vision College Learning Centre - Enquire</title>
            <section className="enquire_content">
                <h1>Enquire</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="multi-column">
                            <label htmlFor="egivenname">Given name(s)*</label><br />
                            <input type="text" id="egivenname" name="egivenname" size="54" required />
                        </div>

                        <div className="multi-column">
                            <label htmlFor="esurname">Surname*</label><br />
                            <input type="text" id="esurname" name="esurname" size="54" required />
                        </div><br />

                        <div>
                            <label htmlFor="ephone">Phone number*</label><br />
                            <input type="tel" id="e" name="ephone" size="54" required />
                        </div><br />

                        <div className="multi-column">
                            <label htmlFor="school">Current high school*</label><br />
                            <input type="text" id="school" name="school" size="54" required />
                        </div>

                        <div className="multi-column">
                            <label htmlFor="eyear">Year level*</label><br />
                            <select id="eyear" name="eyear" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="year9">Year 9</option>
                                <option value="year10">Year 10</option>
                                <option value="year11">Year 11</option>
                                <option value="year12">Year 12</option>
                                <option value="year13">Year 13</option>
                            </select>
                        </div><br />

                        <div>
                            <label htmlFor="ecourse" required>Course of interest*</label><br />
                            <div className="coursesdiv">
                                <input type="radio" id="e-english" name="ecourse" value="English" />
                                <label htmlFor="e-english" className="radio-label">English</label>
                                <input type="radio" id="echinese" name="ecourse" value="Chinese" />
                                <label htmlFor="echinese" className="radio-label">Chinese</label>
                            </div>
                        </div><br />

                        <div>
                            <label htmlFor="etime">Preferred teaching time*</label><br />
                            <select id="etime" name="etime" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="option1">Tuesday afternoon</option>
                                <option value="option2">Thursday afternoon</option>
                                <option value="option3">Saturday morning</option>
                            </select>
                        </div><br/>

                        <div>
                            <label htmlFor="enqnature">Nature of enquiry*</label><br />

                            <input type="radio" id="courseinfo" name="enqnature" value="Course Information" checked={enqNature === "Course Information"} onChange={handleRadioChange} />
                            <label htmlFor="courseinfo" className="radio-label">Course Information</label><br />

                            <input type="radio" id="pricing" name="enqnature" value="Pricing" checked={enqNature === "Pricing"} onChange={handleRadioChange} />
                            <label htmlFor="pricing" className="radio-label">Pricing</label><br />

                            <input type="radio" id="services" name="enqnature" value="Services" checked={enqNature === "Services"} onChange={handleRadioChange} />
                            <label htmlFor="services" className="radio-label">Services</label><br />

                            <input type="radio" id="other" name="enqnature" value="Other" checked={enqNature === "Other"} onChange={handleRadioChange} />
                            <label htmlFor="other" className="radio-label">Other</label><br /><br />

                            {enqNature === "Other" && (
                                <div id="otherInputContainer">
                                    <label htmlFor="otherSpecify">Please specify: </label>
                                    <input
                                        type="text"
                                        id="otherSpecify"
                                        name="otherSpecify"
                                        value={otherSpecify}
                                        onChange={(e) => setOtherSpecify(e.target.value)}
                                    />
                                    {error && <span id="errorMessage" style={{ color: "red" }}><br />⚠️ You must fill out this field</span>}
                                </div>
                            )}
                        </div><br/>
                        <div className="enquirybox">
                            <label htmlFor="enquiry" required>Enquiry:</label><br/>
                            <textarea id="enquiry" name="enquiry" rows="8" cols="60"></textarea>
                        </div>

                        <br/>
                        <button type="submit">Submit Enquiry</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Enquire;
