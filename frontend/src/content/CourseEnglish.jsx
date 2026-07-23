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
                <p>Course info stuff goes here</p>
                <div className="lang_course_grid">
                    <div className="lang_course_flyer">
                        <h2>See this amazing flyer of people learning!</h2>
                        <p>image goes here and lorem ipsum</p>
                    </div>
                    <div className="lang_course_flyer">
                        <h2>See another amazing flying of people talking!</h2>
                        <p>image goes here and lorem ipsum</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CourseEnglish;