import { useState } from "react";
import "./Enquire.css";
//finn you BETTER NOT touch this!!!

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5289";

// shows the API's validation message for one field, if there is one
function FieldError({ name, errors })  {
    if (!errors[name]) return null;
    return <span className="field-error">{errors[name][0]}</span>;
}

function Enquire() {
    //For the other enquiry text box
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

    //For submitting
    const [status, setStatus] = useState("idle"); // states include "idle", "submitting", "success", "error"
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        if (enqNature === "Other" && otherSpecify.trim() === "") {
            setError(true);
            document.getElementById("otherSpecify").focus();
            return;
        }

        event.preventDefault();
        const form = event.target;

        setStatus("submitting");
        setErrors({});
        setMessage("");

        //Send null if nothing, otherwise server goes kaboom
        const payload = {};
        new FormData(form).forEach((value, key) => {
            payload[key] = value === "" ? null : value;
        });

        try
        {
            const response = await fetch(`${API_URL}/api/enquiries`, {
                method: "POST",
                headers: { "Content-Type": "enquiry/json" },
                body: JSON.stringify(payload),
            });

            if (response.status === 201) {
                form.reset();
                setStatus("success");
                setMessage("Your enquiry has been submitted.");
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            if (response.status === 400) {
                const problem = await response.json();
                setErrors(problem.errors ?? {});
                setStatus("error");
                setMessage("Please check the highlighted fields and try again.");
                return;
            }

            setStatus("error");
            setMessage("Something went wrong on our end! Please try again later.");
        } catch {
            setStatus("error");
            setMessage("Couldn't reach the server! Check your internet connection and try again.");
        }
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
                            <input type="text" id="egivenname" name="egivenname" size="35" required />
                        </div>

                        <div className="multi-column">
                            <label htmlFor="esurname">Surname*</label><br />
                            <input type="text" id="esurname" name="esurname" size="35" required />
                        </div><br/>

                        <div>
                            <label htmlFor="ephone">Phone number*</label><br />
                            <input type="tel" id="e" name="ephone" size="54" required />
                        </div><br/>

                        <div className="multi-column">
                            <label htmlFor="school">Current high school*</label><br />
                            <input type="text" id="school" name="school" size="35" required />
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
                        </div><br/>

                        <div>
                            <label htmlFor="ecourse" required>Course of interest*</label><br />
                            <div className="coursesdiv">
                                <input type="radio" id="e-english" name="ecourse" value="English" />
                                <label htmlFor="e-english" className="radio-label">English</label>
                                <input type="radio" id="echinese" name="ecourse" value="Chinese" />
                                <label htmlFor="echinese" className="radio-label">Chinese</label>
                            </div>
                        </div><br/>

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
