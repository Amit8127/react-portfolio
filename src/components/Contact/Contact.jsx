import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const [sendername, setSendername] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    emailjs.init("Qxpkn8FQ_ppfr09OU");

    var params = {
      sendername: sendername,
      from: from,
      subject: subject,
      message: message,
    };

    var serviceId = "service_nxs163z";
    var templateId = "template_e63xzwn";

    emailjs
      .send(serviceId, templateId, params)
      .then((response) => {
        alert("Email sent successfully!");
        // Reset form fields after sending email
        setSendername("");
        setFrom("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        alert("Failed to send the Email, please try again");
      });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // Cleanup function to clear timeout when component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <h2 style={{ color: "white" }}>Let's work Together</h2>
          <p>
            Excited to embark on a collaborative journey as a software
            developer, eager to contribute fresh ideas, learn, and work together
            to create impactful and cutting-edge solutions. Also interested in
            freelance opportunities - especially on ambitious or large projects.
            However, if you have any other requests or questions, don't hesitate
            to contact me using the form below.
          </p>
          <div className="contact-form">
            <form id="myForm" onSubmit={sendMail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={sendername}
                    onChange={(e) => setSendername(e.target.value)}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          A-31 / 23, Sulabh Awas, Sector 1
          <br />
          Gomti Nagar, Lucknow, 226020
          <br />
          Uttar Pradesh, India
          <br />
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to="tel:+918127494878"
            target="_blank"
          >
            <span>+91 8127494878</span>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to="mailto:amitmonu0000@gmail.com"
            target="_blank"
          >
            <span>amitmonu0000@gmail.com</span>
          </Link>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.83793, 81.0008]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.83793, 81.0008]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader/>
    </>
  );
};

export default Contact;
