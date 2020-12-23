<?php
include ("db.php");
if (isset($_POST['guardar'])){
	$nombre = $_POST['nombre'];
	$medida = $_POST['medida'];
	$precio = $_POST['precio'];
	$stock = $_POST['stock'];
	$total = $_POST['total'];
	$query = "INSERT INTO materiales(nombre, medida, precio, stock, total) VALUES ('$nombre', '$medida', '$precio', 
	'$stock', '$total')";
	$result = mysqli_query($conn, $query);
	

		header("Location: index.php?estatus=1");
}
?>