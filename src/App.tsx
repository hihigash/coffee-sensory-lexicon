import { lexicon } from "./lexicon";
import Category from "./Category";
import "./App.css";

function App() {
  return (
    <div className="mx-auto">
      {lexicon.map((category) => {
        return <Category key={category.id} {...category} />;
      })}
    </div>
  );
}

export default App;
