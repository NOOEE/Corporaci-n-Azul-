<?php include("db.php")?>
<?php include("includes/header.php")?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<script language="javascript">
	function doSearch(){
		const tableReg = document.getElementById('datos');
		const searchText = document.getElementById('searchTerm').value.toLowerCase();
		let total = 0;
        for (let i = 1; i < tableReg.rows.length; i++){
                if (tableReg.rows[i].classList.contains("noSearch")) {
                	continue;
                }
                let found = false;
                const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                for (let j = 0; j < cellsOfRow.length && !found; j++) {
                	const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                	if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                        found = true;
                        total++;
                    }
                }
                if (found) {
                	tableReg.rows[i].style.display = '';
                }else{
                    tableReg.rows[i].style.display = 'none';
                }
            }
            const lastTR=tableReg.rows[tableReg.rows.length-1];
            const td=lastTR.querySelector("");
            lastTR.classList.remove("hide", "red");
            if (searchText == "") {
            	lastTR.classList.add("hide");
            }else if(total){
            	td.innerHTML="Se ha encontrado "+total+" coincidencia"+((total>1)?"s":"");
            } else {
            	lastTR.classList.add("red");
                td.innerHTML="No se encontro registro";
            }
        }
</script>
    <style>

        #datos {border:1px solid #CCC;padding:10px;font-size:1em;}

        #datos tr:nth-child(even) {background:;}

        #datos td {padding:5px;}

        #datos tr.noSearch {background:White;font-size:0.8em;}

        #datos tr.noSearch td {padding-top:10px;text-align:right;}

        .hide {display:none;}

        .red {color:Red;}

    </style>
</head>
<body>
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
			<h3 class="panel-title"><i class="fas fa-dolly-flatbed"></i> Listado de Materiales</h3>
			<div class="pull-right">
				<a href="reportes.php" class="btn btn-sm btn-success"><i class="fas fa-file-pdf"></i></a>
			</div>
			<br>
			<br>
		</div>
	</div>
			<?php
	if(isset($_GET["estatus"])){
		if($_GET["estatus"] == 2){
			?>
			<div class="alert alert-danger">
				<strong>¡OK!</strong>Eliminado Correctamente.
			</div>
			<?php
		}
	}

		?>
			<?php
	if(isset($_GET["estatus"])){
		if($_GET["estatus"] == 1){
			?>
			<div class="alert alert-info">
				<strong>¡OK!</strong>Registro Guardado Exitosamente.
			</div>
			<?php
		}
	}
		?>
		<?php
	if(isset($_GET["estatus"])){
		if($_GET["estatus"] == 3){
			?>
			<div class="alert alert-success">
				<strong>¡OK!</strong>Registro Editado Exitosamente.
			</div>
			<?php
		}
	}
		?>
		<center>
	<blockquote>Agregar Nuevo Registro</blockquote>
	<div class="container-fluid">
		<div class="panel-heading">
			<center>
			<form action="save.php" method="POST" id="form_materiales" class="form-horizontal row-fluid">
				<div class="col-sm-6">
					<div class="form-group">
						<label for="nombre" class="col-sm-4 control-label">Nombre:</label>
						<div class="col-sm-8">
							<input name="nombre" id="nombre" class="form-control span6 tip" type="text" required>
						</div>
					</div>
					<div class="form-group">
						<label for="medida" class="col-sm-4 control-label">Medida:</label>
						<div class="col-sm-8">
							<input name="medida" id="medida" class="form-control span6 tip" type="text" required>
						</div>
					</div>
					<div class="form-group">
						<label for="precio" class="col-sm-4 control-label">Precio:</label>
						<div class="col-sm-8">
							<input name="precio" id="precio" class="form-control span6 tip" type="text" required>
						</div>
					</div>
					<div class="form-group">
						<label for="stock" class="col-sm-4 control-label">Stock:</label>
						<div class="col-sm-8">
							<input name="stock" id="stock" class="form-control span6 tip" type="text" required>
						</div>
					</div>
					<div class="form-group">
						<label for="total" class="col-sm-4 control-label">Total:</label>
						<div class="col-sm-8">
							<input type="text" name="total" id="total" class="form-control span6 tip" type="text" required>
						</div>
					</div>
					<br>
					<center><input type="submit" class="btn btn-success" name="guardar" value="Guardar"></center>
				</form></center>
			</div>
		</div>
		</center>
		<br>
		<br>
		<div class="container-fluid">
			<div class="panel-heading">
				<table id="datos" class="table table-bordered-hover-fluid text-center">
					<input id="searchTerm" type="text" onkeyup="doSearch()" class="form-control span4 tip" placeholder="Buscar..." >
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Medida</th>
							<th>Precio</th>
							<th>Stock</th>
							<th>Total</th>
							<th>Fecha</th>
							<th class="text-center">Acciones</th>
							
						
						</tr>
					</thead>
					<tbody id="">
						<?php
						$query = "SELECT * FROM materiales";
						$result = mysqli_query($conn, $query);
						while ($row = mysqli_fetch_array($result)){ ?>
							<tr>
							<td><?php echo $row['nombre'] ?></td>
							<td><?php echo $row['medida'] ?></td>
							<td><?php echo $row['precio'] ?></td>
							<td><?php echo $row['stock'] ?></td>
							<td><?php echo $row['total'] ?></td>
							<td><?php echo date("d-m-Y")?></td>
							<td><a href="edit.php?id=<?php echo $row['id']?> " class="btn btn-secondary"><i class="fas fa-edit"></i></a>
								<a href="delete.php?id=<?php echo $row['id']?>" class="btn btn-danger"><i class="far fa-trash-alt"></i></a>
							</td>

							
						</tr>
					<?php }?>
				</tbody>
			</table>
		</div>
	</i>
	<div class="footer span-10">
		<div class="container">
			<center><b class="copyright"> &copy; <?php echo date("Y")?>|Noé Martínez Avalos|Cementos Cruz Azul, Tecnologias de la Información
				<br>
				<br>
				<img src="img/azul_c.png" width="120" height="120" href="https://www.cfe.mx"></b>
			</center>
		</div>
	</div>
	<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="datatables/jquery.dataTables.js"></script>
	<script src="datatables/dataTables.bootstrap.js"></script>

	<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
</html>