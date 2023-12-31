import { lexicon } from './lexicon'
import Category from './Category'
import './App.css'

function App() {
  return (
    lexicon.map((category) => {
      return (
        <div key={category.id} className='container mx-auto border rounded'>
          <Category {...category} />
        </div>
      );
    })
  );
}

export default App
