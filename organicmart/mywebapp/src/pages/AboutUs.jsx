import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-success fw-bold animate-heading">🌿 About Organic Mart</h2>
      <p className="text-muted lead">
        We are committed to delivering fresh, organic, and chemical-free products directly from farmers to your home.
      </p>

      {}
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.xAfVX_YMYIdNSQj98QVJKQHaF7&pid=Api&P=0&h=220"
            alt="Organic Farm"
            className="img-fluid rounded shadow-lg animate-img"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h4 className="text-success fw-bold">Our Mission</h4>
            <p className="text-muted">
              To promote sustainable farming and provide people with healthy, organic food choices.
            </p>
            <h4 className="text-success fw-bold">Our Vision</h4>
            <p className="text-muted">
              A healthier world where everyone has access to fresh, organic, and chemical-free products.
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="row mt-5">
        <h3 className="text-success fw-bold">📞 Get in Touch</h3>
        <p className="text-muted">We'd love to hear from you! Feel free to reach out.</p>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm contact-card">
            <h5 className="fw-bold text-success">📍 Location</h5>
            <p className="text-muted">123 Organic Street, Erode</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm contact-card">
            <h5 className="fw-bold text-success">📧 Email</h5>
            <p className="text-muted">support@organicmart.com</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm contact-card">
            <h5 className="fw-bold text-success">📞 Phone</h5>
            <p className="text-muted">+91 9123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
