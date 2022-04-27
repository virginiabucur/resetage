import {useState} from "react";

function AppOne(){
    const[age, setAge] = useState(20);

    const onAgeIncrease = ()=>{
        setAge(age+1);

    }

    const onAgeDecrease = ()=>{
        setAge(age-1);
    }
    return (
    <>
        <h1>Reset age</h1>
        <p>{age}</p>
        <button onClick={onAgeIncrease}>Creste varsta</button>
        <br></br>
        <br></br>
        <button onClick={onAgeDecrease}>Scade varsta</button>
    </>
    );
}
export default AppOne;