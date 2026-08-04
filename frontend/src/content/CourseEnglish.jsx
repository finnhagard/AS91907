import "./CoursePages.css";
import {useNavigate} from "react-router-dom";

function CourseEnglish() {
    const navigate = useNavigate();
    const backClick = () => {
        navigate("/courses");
    };

    return (
        <main className="EnglishCourse">
            <section className="lang_course_content">
                <button onClick={backClick}>Back to Courses</button>
                <h1>Learn English</h1>
                <div className="lang_course_grid">
                    <div className="lang_course_flyer">
                        <img src="/VCLC_English DL Flyer_Page_1.jpg" alt="amazing flyer of people learning!"></img>
                    </div>
                    <div className="lang_course_flyer">
                        <img src="/VCLC_English DL Flyer_Page_2.jpg" alt="another amazing flyer!"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CourseEnglish;