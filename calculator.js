const result = document.getElementById("display");

const number =(value) =>{
    result.value += value;
}

const clears = () => {
    result.value =" "
}

const equal =() =>{
    try {
        const out = eval(result.value);
        result.value = out;
    } catch (error) {
        error = "error"
    }
}

const remove =()=>{
    result.value = result.value.slice(0, -1)
}