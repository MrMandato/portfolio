// Styles
import "./styles/Copyright.css";

const Copyright = () => {
  return (
    <>
      <aside className="copyright-container">
        <button className="up-button">
          <a href="#home" className="fa-solid fa-angles-up"></a>
        </button>
        <p>Hecho por mi © Orlando López</p>
        <h5>Hecho con ReactJS</h5>
      </aside>
    </>
  );
};

export default Copyright;
