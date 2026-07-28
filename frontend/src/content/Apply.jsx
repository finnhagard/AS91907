import { useState } from "react";
import "./Apply.css";
//oi quit messing with my branch

// sorry for tampering!!! :) - finn

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5289";

// shows the API's validation message for one field, if there is one
function FieldError({ name, errors }) {
    if (!errors[name]) return null;
    return <span className="field-error">{errors[name][0]}</span>;
}

function Apply() {
    const [status, setStatus] = useState("idle"); // states include "idle", "submitting", "success", "error"
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        setStatus("submitting");
        setErrors({});
        setMessage("");

        // every input's name matches the API's JSON field, so this is nearly the
        // payload already. empty optional fields arrive as "" - send null instead,
        // otherwise an empty date blows up on the server side.
        const payload = {};
        new FormData(form).forEach((value, key) => {
            payload[key] = value === "" ? null : value;
        });

        try {
            const response = await fetch(`${API_URL}/api/applications`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.status === 201) {
                form.reset();
                setStatus("success");
                setMessage("Your application has been submitted.");
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
        <main className="apply">
            <title>Vision College Learning Centre - Apply</title>
            <section className="apply_content">
                <h1>Apply</h1>

                {status === "success" && (
                    <p className="form-status success" role="status">{message}</p>
                )}

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h2>Personal Details</h2>

                        <div className="multi-column">
                            <label htmlFor="firstName">Given name(s)*</label><br></br>
                            <input type="text" id="firstName" name="firstName" size="54" required/>
                            <FieldError name="firstName" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="lastName">Surname*</label><br></br>
                            <input type="text" id="lastName" name="lastName" size="54" required/>
                            <FieldError name="lastName" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="preferredName">Preferred name</label><br></br>
                            <input type="text" id="preferredName" name="preferredName" size="54"/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nsn">NSN (if known)</label><br></br>
                            <input type="text" id="nsn" name="nsn" size="54" />
                            <FieldError name="nsn" errors={errors}/>
                        </div><br></br><br></br>

                        <div className="multi-column">
                            <label htmlFor="email">Email*</label><br></br>
                            <input type="email" id="email" name="email" size="54" required/>
                            <FieldError name="email" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="phone">Phone*</label><br></br>
                            <input type="tel" id="phone" name="phone" size="54" required/>
                            <FieldError name="phone" errors={errors}/>
                        </div><br></br><br></br>

                        <div className="multi-column">
                            <label htmlFor="dateOfBirth">Date of birth*</label><br></br>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" className="dropdown" required/>
                            <FieldError name="dateOfBirth" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="gender">Gender*</label><br></br>
                            <select id="gender" name="gender" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <FieldError name="gender" errors={errors}/>
                        </div>

                        <div className="multi-column">
                          <label htmlFor="currentHighSchool">Current high school*</label><br></br>
                          <input type="text" id="currentHighSchool" name="currentHighSchool" size="54" required/>
                          <FieldError name="currentHighSchool" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="yearLevel">Year level*</label><br></br>
                            <select id="yearLevel" name="yearLevel" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="year9">Year 9</option>
                                <option value="year10">Year 10</option>
                                <option value="year11">Year 11</option>
                                <option value="year12">Year 12</option>
                                <option value="year13">Year 13</option>
                            </select>
                            <FieldError name="yearLevel" errors={errors}/>
                        </div>


                        <h2>Course Details</h2>

                        {/* fieldset/legend is the right pairing for a radio group -
                            a plain <label> can't point at a group of inputs */}
                        <fieldset className="radio-group">
                            <legend>Course*</legend>
                            <div className="coursesdiv">
                                <input type="radio" id="english" name="course" value="English" required/>
                                <label htmlFor="english" className="radio-label">English</label>
                                <input type="radio" id="chinese" name="course" value="Chinese" required/>
                                <label htmlFor="chinese" className="radio-label">Chinese</label>
                            </div>
                            <FieldError name="course" errors={errors}/>
                        </fieldset><br></br>

                        <div>
                            <label htmlFor="preferredTime">Preferred time*</label><br></br>
                            <select id="preferredTime" name="preferredTime" className="dropdown" required>
                                <option value="">--- Select ---</option>
                                <option value="tuesday-pm">Tuesday afternoon</option>
                                <option value="thursday-pm">Thursday afternoon</option>
                                <option value="saturday-am">Saturday morning</option>
                            </select>
                            <FieldError name="preferredTime" errors={errors}/>
                        </div>

                        <div>
                            <h2>Address</h2>

                            <label htmlFor="address">Address*</label><br></br>
                            <input type="text" id="address" name="address" required/>
                            <FieldError name="address" errors={errors}/><br></br><br></br>

                            <div className="multi-column">
                                <label htmlFor="suburb">Suburb</label><br></br>
                                <input type="text" id="suburb" name="suburb" size="54"/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="city">City*</label><br></br>
                                <input type="text" id="city" name="city" size="54" required/>
                                <FieldError name="city" errors={errors}/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="postcode">Post Code</label><br></br>
                                <input type="text" id="postcode" name="postcode" size="54"/>
                            </div>

                            <div className="multi-column">
                                <label htmlFor="country">Country*</label><br></br>
                                <input type="text" id="country" name="country" size="54" required/>
                                <FieldError name="country" errors={errors}/>
                            </div>
                        </div>


                        <h2>Emergency Contact Details</h2>

                        <div className="multi-column">
                            <label htmlFor="emergencyContactName">Full name*</label><br></br>
                            <input type="text" id="emergencyContactName" name="emergencyContactName" size="70" required/>
                            <FieldError name="emergencyContactName" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="emergencyContactRelationship">Relationship to you*</label><br></br>
                            <input type="text" id="emergencyContactRelationship" name="emergencyContactRelationship" size="38" required/>
                            <FieldError name="emergencyContactRelationship" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="emergencyContactEmail">Email*</label><br></br>
                            <input type="email" id="emergencyContactEmail" name="emergencyContactEmail" size="54" required/>
                            <FieldError name="emergencyContactEmail" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="emergencyContactPhone">Phone*</label><br></br>
                            <input type="tel" id="emergencyContactPhone" name="emergencyContactPhone" size="54" required/>
                            <FieldError name="emergencyContactPhone" errors={errors}/>
                        </div>


                        <h2>Next of Kin</h2>

                        <div className="multi-column">
                            <label htmlFor="nextOfKinName">Full name*</label><br></br>
                            <input type="text" id="nextOfKinName" name="nextOfKinName" size="70" required/>
                            <FieldError name="nextOfKinName" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nextOfKinRelationship">Relationship to you*</label><br></br>
                            <input type="text" id="nextOfKinRelationship" name="nextOfKinRelationship" size="38" required/>
                            <FieldError name="nextOfKinRelationship" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nextOfKinEmail">Email*</label><br></br>
                            <input type="email" id="nextOfKinEmail" name="nextOfKinEmail" size="54" required/>
                            <FieldError name="nextOfKinEmail" errors={errors}/>
                        </div>

                        <div className="multi-column">
                            <label htmlFor="nextOfKinPhone">Phone*</label><br></br>
                            <input type="tel" id="nextOfKinPhone" name="nextOfKinPhone" size="54" required/>
                            <FieldError name="nextOfKinPhone" errors={errors}/>
                        </div>

                        {status === "error" && (
                            <p className="form-status error" role="alert">{message}</p>
                        )}

                        <input type="submit"  value={submitting ? "Submitting..." : "Submit"} className="submit-button" disabled={submitting}/>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Apply;
