import BatteryCalculator from './Kalkulator trajanja baterije uređaja';

function App(){
  return(
    <div>
      <h1 style={{"text-align": "center", "font-family": "Arial, sans-serif"}}>
        Kalkulator za izračun trajanja baterije nekog uređaja
      </h1>
      <div style = {{display: "flex", "justify-content": "center", "margin-top": "50px"}}>
        <Kalkulator za baterije/>
      </div>
    </div>
  );
}
export default App;
