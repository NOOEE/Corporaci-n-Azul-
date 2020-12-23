<?php
include("db.php");
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$query = "SELECT * FROM materiales WHERE id = $id";
	$result = mysqli_query($conn, $query);
	if (mysqli_num_rows($result) == 1) {
		$row = mysqli_fetch_array($result);
		$nombre = $row['nombre'];
		$medida = $row['medida'];
		$precio = $row['precio'];
		$stock = $row['stock'];
		$total = $row['total'];
	}
}

if (isset($_POST['editar'])){
	$id = $_GET['id'];
	$nombre = $_POST['nombre'];
	$medida = $_POST['medida'];
	$precio = $_POST['precio'];
	$stock = $_POST['stock'];
	$total = $_POST['total'];
	$query = "UPDATE materiales SET nombre = '$nombre', medida = '$medida', precio = '$precio', stock = '$stock', total = '$total' WHERE id = $id";
	mysqli_query($conn, $query);
	$_SESSION['message']= 'Editado Exitosamente';
	$_SESSION['message_type']= 'warning';
	
	header("Location: index.php?estatus=3");


}
?>
<?php include("includes/header.php");?>
<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<center>
					<br>
					<img src="img/azul_c.png" width="180" height="120" class="d-inline-block align-top" alt="100">
				</center>
			</div>
		</div>
	</div>

         <div class="panel panel-default">
                        <div class="panel-heading">
                        <h3 class="panel-title"><i class=" 	glyphicon glyphicon-pencil"></i>Editar Registro</h3> 
                        </div>
                        <br>
                        <br>

<div class="container">
	<form action="edit.php?id=<?php echo $_GET['id']; ?>" method="POST">
		<div class="col-sm-6">
			<div class="form-group">
				<label for="nombre" class="col-sm-4 control-label">Nombre:</label>
				<div class="col-sm-8">
					<input name="nombre" id="nombre" class="form-control" type="text" required value="<?php echo($nombre)?>">
				</div>
			</div>
			<div class="form-group">
				<label for="medida" class="col-sm-4 control-label">Medida:</label>
				<div class="col-sm-8">
					<input name="medida" id="medida" class="form-control" type="text" required value="<?php echo($medida)?>">
				</div>
			</div>
			<div class="form-group">
				<label for="precio" class="col-sm-4 control-label">Precio:</label>
				<div class="col-sm-8">
					<input name="precio" id="precio" class="form-control" type="text" required value="<?php echo($precio)?>">
				</div>
			</div>
			<div class="form-group">
				<label for="stock" class="col-sm-4 control-label">Stock:</label>
				<div class="col-sm-8">
					<input name="stock" id="stock" class="form-control" type="text" required value="<?php echo($stock)?>">
				</div>
			</div>
			<div class="form-group">
				<label for="total" class="col-sm-4 control-label">Total:</label>
				<div class="col-sm-8">
					<input type="text" name="total" id="total" class="form-control" type="text" required value="<?php echo($total)?>">
				</div>
			</div>
	
			<button class="btn btn-success" name="editar">Editar</button>
    </form>
         </div>
</div>
<br>
<br><br><br>
<div class="footer span-10">
		<div class="container">
			<center><b class="copyright"> &copy; <?php echo date("Y")?>|Noé Martínez Avalos|, Tecnologias de la Información
				<br>
				<img src="img/azul_c.png" width="120" height="120" href="https://"></b>
			</center>
		</div>
	</div>
<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
