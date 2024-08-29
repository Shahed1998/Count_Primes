import { getDataAndvalidate } from './validation.js';

const checker = document.querySelector('#checker');

checker.addEventListener('click', () => {
  const num = document.querySelector('#num').value;
  let result = getDataAndvalidate(num);

  var dynamicTable = "";

  if(result.length > 0)
  {
    dynamicTable += "<table class='table w-100 table-bordered'>";

    dynamicTable += "<tr><th class='text-start'>SL No.</th><th class='text-start'>Numbers</th></tr>"

    result.forEach((num, i)=>{
      dynamicTable += "<tr><td class='text-start'>"+(i+1)+"</th><th class='text-start'>"+num+"</th></tr>"
    })
    
    dynamicTable += "</table>";

  }
  else {
    dynamicTable += "No prime numbers";
  }

  document.querySelector('.total').innerHTML = "Total: "+ result.length;
  document.querySelector('.numbers').innerHTML = dynamicTable;
});
