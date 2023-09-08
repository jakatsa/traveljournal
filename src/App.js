
import './App.css';
import data from './data'; // Import your data array from the data.js file
import Card from './components/Card';
import Header from './Header';



function App() {
  const dataObjects = data.map((datas) => (
    <Card 
      key={datas.id} 
      title={datas.title} 
      location={datas.location}
      startDate={datas.startDate}
      endDate={datas.endDate}
      description={datas.description}
      imageUrl={datas.imageUrl} // Use imageUrl instead of image
    />
  ))

  return (
    

    <div className="App">
      <Header />
      {dataObjects}
    </div>
  );

}

export default App;
