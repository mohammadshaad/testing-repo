import ContentBox from "../ContentBox";

const AboutSection = () => {
  return (
    <div className="min-h-screen" id="about">
      <ContentBox
        title="About Me"
        content={
          "GDSC Wonder of Wonders is an astronomical, country-wide, in-person, annual, student-centric technical fest maneuvered by 400+ GDSCs and 200+ colleges with over 20K events each year all over India."
        }
      />
    </div>
  );
};

export default AboutSection;
