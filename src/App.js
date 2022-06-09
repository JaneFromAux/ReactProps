import './App.css';
import CarItem from './components/CarItem';
import ListIncome from './components/ListIncome';
import glass from './images/glass.jpeg'

let cars = [
  {
    car: 'Audi',
    model: 'A4',
    year: 2021
  },
  {
    car: 'Audi',
    model: 'A7',
    year: 2018
  },
  {
    car: 'BMW',
    model: 'M3',
    year: 2022
  }
]


function App() {
  // hier oben geht Vanilla, Baby =) 
  return (// HIER beginnt das JSX
    <div className="App">
      {/* <CarItem
        car="Audi"
        carModel={'A3'}
        carYear={2009} // im JSX müssen Zahlen in {} übergeben werden!
      />
      <CarItem
        car={cars[0].car}
        carModel={cars[0].model}
        carYear={cars[0].year}
      />
      <CarItem
        car={cars[1].car}
        carModel={cars[1].model}
        carYear={cars[1].year}
      /> */}
      {cars.map((ele, i) => // beim Loopen in REACT will er einen key => i !
        <CarItem
          key={i}// durch den key werden die Objekte UNIQUE und dann kann der Compiler sie erst eindeutig zuordnen! KEY WIRD IMMER BENÖTIGT
          car={ele.car}
          carModel={ele.model}
          carYear={ele.year}
          isIncome={ele.isIncome}
        />
      )}
      <ListIncome />
      <img src="img/salat.jpeg" alt="salat" />
      <img src={glass} alt="glass" />
    </div>
  );
}

export default App;
