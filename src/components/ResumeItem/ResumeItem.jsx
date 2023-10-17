import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <>
      <div className="resume__item">
        <div className="resume__icon">{icon}</div>

        <span className="resume__date">{year}</span>
        <h3 className="resume__subtitle">{parse(title)}</h3>
        <p className="resume__">{desc}</p>
      </div>
    </>
  );
};

export default ResumeItem;
