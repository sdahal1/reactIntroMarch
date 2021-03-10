import logo from './logo.svg';
// import './App.css';

function App() {

  //pretend bootleg info from database User.objects.all()
  let topBreakfastIdeas = [
    {name: "French Toast", price: "5.99"},
    {name: "Avocado Toast", price: "100"},
    {name: "Pancakes", price: "8.99"},
    {name: "Crepes", price: "25.99"},
    {name: "Breakfast tacos", price: "3.50"}
  ]
  const x = "hi"

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ol>
      
      

      {
        topBreakfastIdeas.map(meal => {
        return <li>{meal.name}</li>
        })


      }


      
    </ol>
    </div>
    
  );
}

export default App;
