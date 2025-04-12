import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Home.css"; 

const Home = () => (
  <div className="container text-center mt-5">
    <div className="row">
      {}
      <div className="col-md-6 d-flex align-items-center">
        <div>
          <h1 className="text-success fw-bold animate-text">Welcome to Organic Mart</h1>
          <p className="text-muted lead">
            Discover 100% organic, farm-fresh products delivered straight to your home.
          </p>
          <Link to="/form" className="btn btn-lg btn-success mt-3 shadow-sm animate-btn">
            🌿 Shop Now
          </Link>
        </div>
      </div>

      {}
      <div className="col-md-6">
        <img 
          src="https://tse4.mm.bing.net/th?id=OIP.hr4jFe2o5R1xeGHiQw-P7wHaE7&pid=Api&P=0&h=220" 
          alt="Organic Mart"
          className="img-fluid rounded shadow-lg animate-img"
        />
      </div>
    </div>

    {}
    <div className="row mt-5">
      <h2 className="text-success fw-bold">Why Choose Organic Mart?</h2>
      
      <div className="col-md-4">
        <div className="card p-3 shadow-sm feature-card">
          <h5 className="fw-bold text-success">🌱 100% Organic</h5>
          <p className="text-muted">Sourced directly from trusted farmers with no chemicals.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 shadow-sm feature-card">
          <h5 className="fw-bold text-success">🚚 Fast Delivery</h5>
          <p className="text-muted">Get fresh products delivered to your doorstep within hours.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 shadow-sm feature-card">
          <h5 className="fw-bold text-success">💚 Healthy & Fresh</h5>
          <p className="text-muted">Packed with nutrients to keep you and your family healthy.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
