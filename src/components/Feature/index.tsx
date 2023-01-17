import "./styles.css";

type FeatureProps = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container_feature-title">
        <div />
        <h2>{title}</h2>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
