
document.getElementById('btn-completed-1').addEventListener('click', function(){

    // console.log('hello');
    const val = document.getElementById('task-number').innerText;
    // console.log(val);
    const newVal = parseInt(val);
    const valInput = newVal - 1;
    console.log(valInput);
    document.getElementById('task-number').innerHTML = `<p>0${valInput}</p>`;

    
    let btn = document.getElementById("btn-completed-1");
    btn.disabled = true;
    btn.innerText = "Completed";
})

document.getElementById('btn-completed-2').addEventListener('click', function(){

    // console.log('hello');
    const val = document.getElementById('task-number').innerText;
    // console.log(val);
    const newVal = parseInt(val);
    const valInput = newVal - 1;
    console.log(valInput);
    document.getElementById('task-number').innerHTML = `<p>0${valInput}</p>`;

    let btn = document.getElementById("btn-completed-2");

    btn.disabled = true;
    btn.innerText = "Completed";

    
})