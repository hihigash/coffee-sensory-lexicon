import { lexicon } from './lexicon'
import Category from './Category'
import './App.css'

function App() {
  return (
    lexicon.map((category) => {
      return (
        <div className='container mx-auto border rounded'>
          <Category key={category.id} {...category} />
        </div>
      );
    })
  );
}

export default App
