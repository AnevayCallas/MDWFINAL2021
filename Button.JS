<body>

<button id="myBtn" name="Cacti - 11.99,<bp> Colorful Greenery - 16.99, Large plants - 30.00"onclick="myFunction()">Shop</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myBtn").name;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
