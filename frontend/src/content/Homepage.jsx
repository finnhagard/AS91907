import "./Homepage.css";

const rowImages = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg"
];

function Homepage() {
    return (
        <main>
            <section className="hero" aria-label="Hero banner">
                <img src="/banner.jpg" alt="" className="hero-image" />
            </section>

            <section className="image-row" aria-label="images">
                {rowImages.map((src) => (<img key={src} src={src} alt="row of images" className="image-row-item" />))}
            </section>
        </main>
    );
}

export default Homepage;
