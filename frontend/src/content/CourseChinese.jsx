import "./CoursePages.css";
import {useNavigate} from "react-router-dom";

function CourseChinese() {
    const navigate = useNavigate();
    const backClick = () => {
        navigate("/courses");
    };

    return (
        <main className="ChineseCourse">
            <title>Vision College Learning Centre - Chinese Course</title>
            <section className="lang_course_content">
                <button onClick={backClick}>Back to Courses</button>
                <h1>Learn Chinese</h1>
                <div className="lang_course_grid">
                    <div className="lang_course_flyer">
                        <img src="/VCLC_Chinese DL Flyer_Page_1.jpg" alt="amazing flyer of people learning!"></img>
                    </div>
                    <div className="lang_course_flyer">
                        <img src="/VCLC_Chinese%20DL%20Flyer_Page_2.jpg" alt="amazing flyer of people learning!"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CourseChinese;