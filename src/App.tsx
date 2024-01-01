import { lexicon } from "./lexicon";
import Category from "./Category";
import "./App.css";

function App() {
  return (
    <>
      {lexicon.map((category) => {
        return <Category key={category.id} {...category} />;
      })}
    </>
  );
}

export default App;
