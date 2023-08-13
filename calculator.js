<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buttons</title>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
  </head>
<body>
  
<p><button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator +='1';
  console.log(calculator);">1</button> 
 <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator +='2';
  console.log(calculator);">2</button> 
 <button type="button" class="btn btn-warning rounded-pill shadow"onclick="calculator +='3';
  console.log(calculator);">3</button> 
 <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator +=' + ';
  console.log(calculator);">+</button></p>
  <p>

    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator += '4'; console.log(calculator)">4</button>

    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator += '5'; console.log(calculator)">5</button>

    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator +='6'; console.log(calculator) ">6</button>

    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator += ' - '; console.log(calculator)">-</button>
    
  </p>
  <p>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+='7'; console.log(calculator)">7</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+='8'; console.log(calculator)">8</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+='9'; console.log(calculator)">9</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+=' * '; console.log(calculator)">*</button>
  </p>
  <p>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+='0'; console.log(calculator)">0</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+='.'; console.log(calculator)">.</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator=eval(calculator); console.log(calculator)">=</button>
    <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator+=' / '; console.log(calculator)">/</button>
  </p>
    <p>
      <button type="button" class="btn btn-warning rounded-pill shadow" onclick="calculator = '';console.log('Cleared')">Clear</button>
    </p>


<script>
let calculator = "";
 
 

</script>

</body>
</html>
