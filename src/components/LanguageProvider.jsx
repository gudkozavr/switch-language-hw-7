import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("");
  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
  }

  const texts = [
    {
      id: "en",
      name: "English",
      text: "Learning new skills is a continuous journey that helps us grow and adapt to the ever-changing world around us.",
    },
    {
      id: "ru",
      name: "Русский",
      text: "Обучение новым навыкам — это непрерывное путешествие, которое помогает нам расти и адаптироваться к постоянно меняющемуся миру вокруг нас.",
    },
    {
      id: "de",
      name: "Deutsch",
      text: "Das Erlernen neuer Fähigkeiten ist eine fortlaufende Reise, die uns hilft, zu wachsen und uns an die sich ständig verändernde Welt um uns herum anzupassen.",
    },
  ];

  // console.log(texts.ru);
  return (
    <LanguageContext.Provider value={{ texts, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
