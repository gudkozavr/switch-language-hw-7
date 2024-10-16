import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
const textStyle = {
  paragraph: {
    backgroundColor: "#ffe4e1",
    padding: "10px 20px",
    borderRadius: "15px",
    fontSize: "18px",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: "#333",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(255, 182, 193, 0.2)",
    width: "fit-content",
    margin: "20px auto",
  },
};

export default function LanguageSwitcher() {
  const context = useContext(LanguageContext);
  return <p style={textStyle.paragraph}>{context.language}</p>;
}
