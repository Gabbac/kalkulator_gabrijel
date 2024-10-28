import BatteryCalculator from './kalkulator';

function App(){
  return(
    <div>
      <h1 style={{"text-align": "center", "font-family": "Arial, sans-serif"}}>
        Battery Life Calculator
      </h1>
      <div style = {{display: "flex", "justify-content": "center", "margin-top": "50px"}}>
        <BatteryCalculator/>
      </div>
    </div>
  );
}
export default App;
