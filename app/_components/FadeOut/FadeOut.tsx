import "./style.css";

interface FadeBlackProps {
  visible: boolean;
}

export const FadeBlack = ({ visible }: FadeBlackProps) => {
  return (
    <div
      id="bg"
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="waves"></div>
    </div>
  );
};
