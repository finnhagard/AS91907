import "./Courses.css";
import {useNavigate} from "react-router-dom";

function Courses() {
    //TODO: Put button functions here
    const navigate = useNavigate();
    const englishClick = () => {
        navigate("/courses/english");
    };
    const chineseClick = () => {
        navigate("/courses/chinese");
    };

    return (
        <main className="courses">
            <title>Vision College Learning Centre - Courses</title>
            <section className="courses_content">
                <h1>Our Courses</h1>
                <div className="courses_grid">
                    <div className="course_card">
                        <h2>English</h2>
                        <p>Helping students strengthen reading, writing, listening, and speaking skills while working towards essential English credits.<br/><br/></p>
                        <button onClick={englishClick}>More Info</button>
                    </div>
                    <div className="course_card">
                        <h2>Chinese</h2>
                        <p>Whether you are learning Chinese for work, study, or personal growth, our courses are designed to help you communicate confidently in real-life situations. </p>
                        <button onClick={chineseClick}>More Info</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Courses;
