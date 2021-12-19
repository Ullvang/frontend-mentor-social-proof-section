import "./App.css";
import Stars from "./Stars";
import Colton from "./images/image-colton.jpg";
import Irene from "./images/image-irene.jpg";
import Anne from "./images/image-anne.jpg";

function App() {
  return (
    <>
      <header></header>
      <main>
        <section id="intro">
          <h1>10,000+ of our users love our products.</h1>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </section>
        <section id="ratings">
          <div className="ratingCard">
            <Stars />
            <p>Rated 5 Stars in Reviews</p>
          </div>
          <div className="ratingCard">
            <Stars />
            <p>Rated 5 Stars in Report Guru</p>
          </div>
          <div className="ratingCard">
            <Stars />
            <p>Rated 5 Stars in BestTech</p>
          </div>
        </section>
        <section id="customers">
          <article>
            <div className="profile-header">
              <img src={Colton} alt="colton" />
              <div>
                <h2>Colton Smith</h2>
                <h3>Verified Buyer</h3>
              </div>
            </div>
            <p>
              "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!"
            </p>
          </article>
          <article>
            <div className="profile-header">
              <img src={Irene} alt="irene" />
              <div>
                <h2>Irene Roberts</h2>
                <h3>Verified Buyer</h3>
              </div>
            </div>
            <p>
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery."
            </p>
          </article>
          <article>
            <div className="profile-header">
              <img src={Anne} alt="irene" />
              <div>
                <h2>Anne Wallace</h2>
                <h3>Verified Buyer</h3>
              </div>
            </div>
            <p>
              "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </article>
        </section>
      </main>
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Ullvang">Jon Erik Ullvang</a>.
      </footer>
    </>
  );
}

export default App;
