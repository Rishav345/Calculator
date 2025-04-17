let string = "";
let buttons = document.querySelectorAll('.buttons');

let arr = Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch{
                string = "Error";
                document.querySelector('input').value = string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'D'){
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});
