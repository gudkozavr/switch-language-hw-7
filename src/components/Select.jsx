import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const style = {
  select: {
    width: "200px",
    height: "40px",
    backgroundColor: "#ffe4e1",
    border: "2px solid #ffb6c1",
    borderRadius: "20px",
    fontSize: "16px",
    padding: "8px",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: "#333",
    outline: "none",
    transition: "0.3s",
    boxShadow: "0 4px 8px rgba(255, 182, 193, 0.2)",
  },
  option: {
    backgroundColor: "#ffe4e1",
    padding: "10px",
  },
  selectHover: {
    backgroundColor: "#ffb6c1",
  },
};

export default function Button() {
  const context = useContext(LanguageContext);

  function handleChange(e) {
    context.texts.forEach(
      (text) => e.target.value === text.id && context.changeLanguage(text.text)
    );
  }

  return (
    <select style={style.select} onChange={handleChange}>
      <option style={style.option}></option>
      <option style={style.option} value="ru">
        ru
      </option>
      <option style={style.option} value="en">
        en
      </option>
      <option style={style.option} value="de">
        de
      </option>
    </select>
  );
}
