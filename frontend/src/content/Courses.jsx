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
            <section className="courses_content">
                <h1>Our Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.</p>
                <div className="courses_grid">
                    <div className="course_card">
                        <h2>Consectetur Course (English)</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                        <button onClick={englishClick}>More Info</button>
                    </div>
                    <div className="course_card">
                        <h2>Dolor Sit Amet (Chinese)</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                        <button onClick={chineseClick}>More Info</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Courses;
