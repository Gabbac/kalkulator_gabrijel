import { createSignal } from "solid-js";
function BatteryCalculator(){
    const [capacity, setCapacity]= createSignal(0);
    const [consumption, setConsumption] =createSignal(0);
    const [batteryLife, setBatteryLife]= createSignal(0);
    const [capacityError, setCapacityError]= createSignal(0);
    const [consumptionError, setConsumptionError]= createSignal(0);

    const calculateBatteryLife = () =>{
        if (consumption() && capacity()>0){
            const result = capacity() / consumption();
            setBatteryLife (result.toFixed(2));

        }else{
            setBatteryLife(0);
        }

   
        if (capacity() <= 0){
            setCapacityError("Capacity must be greater than 0.");

        }else{
            setCapacityError("");
        }

        if(consumption() <=0){
            setConsumptionError("Consumption must be greater than 0.");
        }else{
            setConsumptionError("");
        }
    

        
    };
    return(
        <div style={{ "font-family": "Arial, sans-serif", padding: "20px", width: "300px" }}>
            <h1>Battery Life Calculator</h1>
        <div>
        <label for="capacity">Battery Capacity (mAh): </label>
        <input
                id="capacity" 
                type="number" 
                value={capacity()}
                onInput={(e)=> setCapacity(parseFloat(e.target.value) || 0)}
                stye = {{"margin-bottom": "10px", width: "100%"}}/>
                {capacityError() && <p style={{color: "red"}}>{capacityError()}</p>}
                </div>

                <div>
                    <label for = "consumption"> Device Consumption (mA):</label>
                    <input id="consumption"
                    type="number"
                    value={consumption()}
                    onInput={(e)=> setConsumption(parseFloat(e.target.value) || 0)}
                    style={{"margin-bottom": "10px", width: "100%"}}
                    />
                     {consumptionError() && <p style={{color: "red"}}>{consumptionError()}</p>}
                    </div>
                    <button onClick={calculateBatteryLife} style={{padding: "10px", width: "100%"}}>
                        Calculate
                    </button>
                    <div style ={{"margin-top": "20px"}}>

                      
                        <h2>Estimated Battery Life:</h2>
                        <p>{batteryLife()} hours</p>
                        </div>
                </div>

    );
}

export default BatteryCalculator;