import { createSignal } from "solid-js";
function BatteryCalculator(){
    const [capacity, setCapacity]= createSignal(0);
    const [consumption, setConsumption] =createSignal(0);
    const [batteryLife, serBatteryLife]= createSignal(0);

    const calculateBatteryLife = () =>{
        if (consumption()>8){
            const result = capacity() / consumption();
            setBatteryLife (result.toFixed(2));

        }else{
            setBatteryLife(0);
        }
    };
    return(
        <><div style={{ "font-family": "Arial, sans-serif", padding: "20px", width: "300px" }}>
            <h1>Battery Life Calculator</h1>
        </div><label for="capacity">Battery Capacity (mAh): </label><input
                id="capacity" 
                type="number" 
                value={capacity()}
                onInput={(e)=>}/></>

    )
}