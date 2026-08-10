import "./AboutUs.css";

function AboutUs() {

    return (
        <main className="about">
            <title>Vision College Learning Centre - About Us</title>
            <div className="about_layout">
                <section className="about_content">
                    <h1>About Us</h1>
                    <p>Vision College is an education provider established over 40 years ago where we have been championing student success ever since. We have 3 campuses across New Zealand, Hamilton being Head Office, Auckland and Christchurch.
                        Vision College offers Tertiary Education through to a degree in Counselling, a well-established School of Information Technology, Youth programmes, ESOL and Early Childhood to name a few.
                        The learning Centre is an initiative of Vision College to assist secondary school students on their learning pathways initially in English and Chinese with more programmes to be added over time.
                    </p>
                </section>

                <img src="/about-img.jpg" alt="" className="about_img" />
            </div>
        </main>
    );
}

export default AboutUs;
