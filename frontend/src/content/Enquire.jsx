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
    const [radioError, setRadioError] = useState(false);

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setEnqNature(value);
        setRadioError(false);
        if (value !== "Other") {
            setOtherSpecify("");
        }
    };

    //For submitting
    const [status, setStatus] = useState("idle"); // states include "idle", "submitting", "success", "error"
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        if (enqNature === "Other" && otherSpecify.trim() === "") {
            setRadioError(true);
            document.getElementById("otherSpecify").focus();
            return;
        }

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
                headers: { "Content-Type": "application/json" },
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
    }

    const submitting = status === "submitting";

    return (
        <main className="enquire">
            <title>Vision College Learning Centre - Enquire</title>
            <section className="enquire_content">
                <h1>Enquire</h1>

                {status === "success" && (
                    <p className="form-status success" role="status">{message}</p>
                )}

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="multi-column left">
                            <label htmlFor="firstName">Given name(s)*</label><br />
                            <input type="text" id="egivenname" name="firstName" size="35" required />
                            <FieldError name="firstName" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="lastName">Surname*</label><br />
                            <input type="text" id="esurname" name="lastName" size="35" required />
                            <FieldError name="lastName" errors={errors}/>
                        </div><br/>

                        <div className="left">
                            <label htmlFor="phone">Phone number*</label><br />
                            <input type="tel" id="e" name="phone" size="35" required />
                            <FieldError name="phone" errors={errors}/>
                        </div><br/>

                        <div className="multi-column left">
                            <label htmlFor="currentHighSchool">Current high school*</label><br />
                            <input type="text" id="school" name="currentHighSchool" size="35" required />
                            <FieldError name="currentHighSchool" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="yearLevel">Year level*</label><br />
                            <select id="eyear" name="yearLevel" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="year9">Year 9</option>
                                <option value="year10">Year 10</option>
                                <option value="year11">Year 11</option>
                                <option value="year12">Year 12</option>
                                <option value="year13">Year 13</option>
                            </select>
                            <FieldError name="yearLevel" errors={errors}/>
                        </div><br/>

                        <div className="left">
                            <label htmlFor="course" required>Course of interest*</label><br />
                            <div className="coursesdiv">
                                <input type="radio" id="e-english" name="course" value="English" />
                                <label htmlFor="e-english" className="radio-label">English</label>
                                <input type="radio" id="echinese" name="course" value="Chinese" />
                                <label htmlFor="echinese" className="radio-label">Chinese</label>
                            </div>
                            <FieldError name="course" errors={errors}/>
                        </div><br/>

                        <div className="left">
                            <label htmlFor="preferredTime">Preferred teaching time*</label><br />
                            <select id="etime" name="preferredTime" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="tuesday-pm">Tuesday afternoon</option>
                                <option value="thursday-pm">Thursday afternoon</option>
                                <option value="saturday-am">Saturday morning</option>
                            </select>
                            <FieldError name="preferredTime" errors={errors}/>
                        </div><br/>

                        <div className="left">
                            <label htmlFor="enquiryNature">Nature of enquiry*</label><br />

                            <input type="radio" id="courseinfo" name="enquiryNature" value="Course Information" checked={enqNature === "Course Information"} onChange={handleRadioChange} />
                            <label htmlFor="courseinfo" className="radio-label">Course Information</label><br />

                            <input type="radio" id="pricing" name="enquiryNature" value="Pricing" checked={enqNature === "Pricing"} onChange={handleRadioChange} />
                            <label htmlFor="pricing" className="radio-label">Pricing</label><br />

                            <input type="radio" id="services" name="enquiryNature" value="Services" checked={enqNature === "Services"} onChange={handleRadioChange} />
                            <label htmlFor="services" className="radio-label">Services</label><br />

                            <input type="radio" id="other" name="enquiryNature" value="Other" checked={enqNature === "Other"} onChange={handleRadioChange} />
                            <label htmlFor="other" className="radio-label">Other</label><br /><br />

                            <FieldError name="enquiryNature" errors={errors}/>

                            {enqNature === "Other" && (
                                <div id="otherInputContainer">
                                    <label htmlFor="otherEnquiry">Please specify: </label>
                                    <input
                                        type="text"
                                        id="otherSpecify"
                                        name="otherEnquiry"
                                        value={otherSpecify}
                                        onChange={(e) => setOtherSpecify(e.target.value)}
                                    />
                                    {radioError && <span id="errorMessage" style={{ color: "red" }}><br />⚠️ You must fill out this field</span>}
                                </div>
                            )}
                        </div><br/>
                        <div className="enquirybox left">
                            <label htmlFor="enquiryText" required>Enquiry:</label><br/>
                            <textarea id="enquiry" name="enquiryText" rows="8" cols="60"></textarea>
                            <FieldError name="enquiryText" errors={errors}/>
                        </div>

                        <br/>

                        {status === "error" && (
                            <p className="form-status error" role="alert">{message}</p>
                        )}

                        <div className="submit-container">
                            <input type="submit" value={submitting ? "Submitting..." : "Submit"} className="submit-button" disabled={submitting}/>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Enquire;
