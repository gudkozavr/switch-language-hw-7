import "./App.css";
import LanguageProvider from "./components/LanguageProvider";
import Select from "./components/Select";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="container">
      <LanguageProvider>
        <LanguageSwitcher></LanguageSwitcher>
        <Select></Select>
      </LanguageProvider>
    </div>
  );
}

export default App;
