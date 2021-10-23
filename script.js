let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.querySelectorAll('#opr');
    let num1_status=false, num2_status=false, opr_status=false;
    let opr = '';

    if(num1 === '' || isNaN(num1)){
        document.getElementById('err_num1').innerHTML = 'Please provide a valid number';
    }else{
        document.getElementById('err_num1').innerHTML = '';
        num1_status = true;
    }

    if(num2 === '' || isNaN(num2)){
        document.getElementById('err_num2').innerHTML = 'Please provide a valid number';
    }else{
        document.getElementById('err_num2').innerHTML = '';
        num2_status = true;
    }

    for(let i=0; i<operation.length; i++){
        if(operation[i].checked)
            opr = operation[i].value;
    }

    if(opr === ''){
        document.getElementById('err_opr').innerHTML = 'Please provide an operation';
    }else{
        document.getElementById('err_opr').innerHTML = '';
        opr_status = true;
    }

    if(num1_status && num2_status && opr_status){
        let result = 0;
        let symbol = '';
        switch(opr){
            case '+':
                result = Number(num1) + Number(num2);
                symbol = '+';
                break;
            case '-':
                result = Number(num1) - Number(num2);
                symbol = '-';
                break;
            case '*':
                result = Number(num1) * Number(num2);
                symbol = '*';
                break;
            case '/':
                result = Number(num1) / Number(num2);
                symbol = '/';
                break;
        }
        document.getElementById('Output').innerHTML = num1 + " " + symbol + " " + num2 + " = " + result;
    }else{
        document.getElementById('Output').innerHTML = '';
    }
});