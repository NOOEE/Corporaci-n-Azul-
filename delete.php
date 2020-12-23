<?php
include("db.php");
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$query = "DELETE FROM materiales WHERE id = $id";
	$result= mysqli_query($conn, $query);
	if (!$result) {
		die("Query Error");
	}
	$_SESSION['message'] = 'Eliminado Exitosamente';
	$_SESSION['message_type'] = 'danger';
	header("Location: index.php?estatus=2");
 } 
?>