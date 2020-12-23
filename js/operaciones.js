
function opciones(){
	if(tipoP==4){
		document.getElementById('info').outerHTML="<span id='info'><i class='fa fa-user fa-lg' ></i> Bienvenido "+nom+"</span>";
		document.getElementById('info').innerText="Bienvenido "+nom;
  		var node = document.getElementById("student");
		node.parentNode.removeChild(node);
		

	}else if(tipoP==3){
		document.getElementById('info').outerHTML="<span id='info'><i class='fa fa-user fa-lg' ></i> Bienvenido "+nom+"</span>";
  		var node = document.getElementById("student");
		node.parentNode.removeChild(node);
		var node = document.getElementById("prof")
		node.parentNode.removeChild(node);

	}
	else if(tipoP==2){
		document.getElementById('info').outerHTML="<span id='info'><i class='fa fa-user fa-lg' ></i> Bienvenido "+nom+"</span>";
     	var node = document.getElementById("admin");
		node.parentNode.removeChild(node);
		var node = document.getElementById("student")
		node.parentNode.removeChild(node);

	}else{
		document.getElementById('info').outerHTML="<span id='info'><i class='fa fa-user fa-lg' ></i> Bienvenido "+nom+"</span>";
		var node = document.getElementById("admin");
		node.parentNode.removeChild(node);
		var node = document.getElementById("prof")
		node.parentNode.removeChild(node);
	}
}


$(document).ready(function() {

 

	
	
  $(document).on('click', '#AgregPers', (e) => {
  	let titulo=$('#titulo').text("Agregar Personal");
  	let titPanel=$('#titPanel').text("Datos Personal");
  	let selection="<br><label for='selectAgg' style='font-size:20px;'> Seleccione el Tipo de Persona</label>\
  				  <select id='selectAgg' required='' class='custom-select custom-select-lg mb-3'>\
				  <option selected disabled value=''>Seleccione una opcion...</option>\
				  <option value='1'>Estudiante</option>\
				  <option value='2'>Profesor</option>\
				  <option value='3'>Administrador</option>\
				  <option value='4'>Administrador-Profesor</option>\
				  </select>";
  	$('#pbody').html(selection);
  	let tipoPer=$('#selectAgg').change(function(){
      if(tipoPer.val()==4){///////////////////////AGREGAR ADMINISTRADOR Y PROFESOR
      let titulo=$('#titulo').text("Agregar Personal");
      let titPanel=$('#titPanel').text("Datos Personal del Administrador/Profesor");
      let template="<form id='formAddAdmin2'>\
          <div class='form-group'>\
            <div class='container' style='width: 100%;'>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Nombre'>Nombre</label>\
                <input type='text' required='' class='form-control' id='Nombre' placeholder='Introduce un nombre'>\
                </div>\
                <div class='col-6'>\
                  <label for='Profesion'>Profesion</label>\
                  <input type='text'  required='' class='form-control' id='Profesion' placeholder='Introduce una profesion'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-4'>\
                  <label for='Fecha'>Fecha de Nacimiento</label>\
                  <input type='date' required='' class='form-control' id='Fecha'>\
                </div>\
                <div class='col-6'>\
                  <label for='Calle'>Calle</label>\
                <input type='text' required='' class='form-control' id='Calle' placeholder='Introduce una calle'>\
                </div>\
                <div class='col-2'>\
                  <label for='Num'>Num. Ext</label>\
                <input type='text' required='' class='form-control' maxlength='5' onkeypress='return justNumbers(event);' id='Num' placeholder='Num'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Colonia'>Colonia</label>\
                <input type='text' required='' class='form-control' id='Colonia' placeholder='Introduce una colonia'>\
                </div>\
                <div class='col-3'>\
                  <label for='CP'>Codigo Postal</label>\
                <input type='text' required='' class='form-control' id='CP' maxlength='5' onkeypress='return justNumbers(event);' placeholder='C.P.'>\
                </div>\
                <div class='col-3'>\
                  <label for='status'>Estatus</label>\
                <select class='custom-select custom-select-lg' required='' id='status'>\
                  <option disabled val=''selected>Estatus</option>\
                  <option value='1'>Activo</option>\
                  <option value='0'>Inactivo</option>\
                </select>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Muni'>Municipio</label>\
                  <input type='text' required='' class='form-control' id='Muni' placeholder='Introduce un municipio'>\
                </div>\
                <div class='col-6'>\
                  <label for='Estado'>Estado</label>\
                  <input type='text' required='' class='form-control' id='Estado' placeholder='Introduce un estado'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Cel'>Celular</label>\
                  <input type='text' required='' maxlength='10' onkeypress='return justNumbers(event);' class='form-control' id='Cel' placeholder='Introduce un No. de Celular'>\
                </div>\
                <div class='col-6'>\
                  <label for='Email'>Correo</label>\
                  <input type='email' required='' class='form-control' id='Email' placeholder='Introduce un correo'>\
                </div>\
              </div><br><button type='submit' class='btn btn-warning btn-lg'>AGREGAR</button>\
              <button onclick=' (function(){ $(`#AgregPers`).click(); })();' class='btn btn-danger btn-lg'>REGRESAR</button>\
            </div>\
          </div>\
        </form>";
      $('#pbody').html(template);
     
    }
  		else if(tipoPer.val()==3){///////////////////////AGREGAR ADMINISTRADOR
  		let titulo=$('#titulo').text("Agregar Personal");
      let titPanel=$('#titPanel').text("Datos Personal del Administrador");
  		let template="<form id='formAddAdmin'>\
          <div class='form-group'>\
            <div class='container' style='width: 100%;'>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Nombre'>Nombre</label>\
                <input type='text' required='' class='form-control' id='Nombre' placeholder='Introduce un nombre'>\
                </div>\
                <div class='col-6'>\
                  <label for='Profesion'>Profesion</label>\
                  <input type='text'  required='' class='form-control' id='Profesion' placeholder='Introduce una profesion'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-4'>\
                  <label for='Fecha'>Fecha de Nacimiento</label>\
                  <input type='date' required='' class='form-control' id='Fecha'>\
                </div>\
                <div class='col-6'>\
                  <label for='Calle'>Calle</label>\
                <input type='text' required='' class='form-control' id='Calle' placeholder='Introduce una calle'>\
                </div>\
                <div class='col-2'>\
                  <label for='Num'>Num. Ext</label>\
                <input type='text' required='' maxlength='5' onkeypress='return justNumbers(event);' class='form-control' id='Num' placeholder='Num'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Colonia'>Colonia</label>\
                <input type='text' required='' class='form-control' id='Colonia' placeholder='Introduce una colonia'>\
                </div>\
                <div class='col-3'>\
                  <label for='CP'>Codigo Postal</label>\
                <input type='text' required='' class='form-control' maxlength='5' onkeypress='return justNumbers(event);' id='CP' placeholder='C.P.'>\
                </div>\
                <div class='col-3'>\
                  <label for='status'>Estatus</label>\
                <select class='custom-select custom-select-lg' required='' id='status'>\
                  <option disabled val=''selected>Estatus</option>\
                  <option value='1'>Activo</option>\
                  <option value='0'>Inactivo</option>\
                </select>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Cel'>Celular</label>\
                  <input type='text' maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' placeholder='Introduce un No. de Celular'>\
                </div>\
                <div class='col-6'>\
                  <label for='Email'>Correo</label>\
                  <input type='email' required='' class='form-control' id='Email' placeholder='Introduce un correo'>\
                </div>\
              </div><br><button type='submit' class='btn btn-warning btn-lg'>AGREGAR</button>\
              <button onclick=' (function(){ $(`#AgregPers`).click(); })();' class='btn btn-danger btn-lg'>REGRESAR</button>\
            </div>\
          </div>\
        </form>";

    	$('#pbody').html(template);
    	
  	}else if(tipoPer.val()==2){ ////////////////////AGREGAR PROFESOR
  		let titulo=$('#titulo').text("Agregar Personal");
  		let titPanel=$('#titPanel').text("Datos Personal del Profesor");
  		let template="<form id='formAddProf'>\
          <div class='form-group'>\
            <div class='container' style='width: 100%;'>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Nombre'>Nombre</label>\
                <input type='text' required='' class='form-control' id='Nombre' placeholder='Introduce un nombre'>\
                </div>\
                <div class='col-6'>\
                  <label for='Profesion'>Profesion</label>\
                  <input type='text'  required='' class='form-control' id='Profesion' placeholder='Introduce una profesion'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-4'>\
                  <label for='Fecha'>Fecha de Nacimiento</label>\
                  <input type='date' required='' class='form-control' id='Fecha'>\
                </div>\
                <div class='col-6'>\
                  <label for='Calle'>Calle</label>\
                <input type='text' required='' class='form-control' id='Calle' placeholder='Introduce una calle'>\
                </div>\
                <div class='col-2'>\
                  <label for='Num'>Num. Ext</label>\
                <input type='text' maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' placeholder='Num'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Colonia'>Colonia</label>\
                <input type='text' required='' class='form-control' id='Colonia' placeholder='Introduce una colonia'>\
                </div>\
                <div class='col-3'>\
                  <label for='CP'>Codigo Postal</label>\
                <input type='text' required='' class='form-control' maxlength='5' onkeypress='return justNumbers(event);' id='CP' placeholder='C.P.'>\
                </div>\
                <div class='col-3'>\
                  <label for='status'>Estatus</label>\
                <select class='custom-select custom-select-lg' required='' id='status'>\
                  <option disabled val=''selected>Estatus</option>\
                  <option value='1'>Activo</option>\
                  <option value='0'>Inactivo</option>\
                </select>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Muni'>Municipio</label>\
                  <input type='text' required='' class='form-control' id='Muni' placeholder='Introduce un municipio'>\
                </div>\
                <div class='col-6'>\
                  <label for='Estado'>Estado</label>\
                  <input type='text' required='' class='form-control' id='Estado' placeholder='Introduce un estado'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Cel'>Celular</label>\
                  <input type='text' maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' placeholder='Introduce un No. de Celular'>\
                </div>\
                <div class='col-6'>\
                  <label for='Email'>Correo</label>\
                  <input type='email' required='' class='form-control' id='Email' placeholder='Introduce un correo'>\
                </div>\
              </div><br><button type='submit' class='btn btn-warning btn-lg'>AGREGAR</button>\
              <button onclick=' (function(){ $(`#AgregPers`).click(); })();' class='btn btn-danger btn-lg'>REGRESAR</button>\
            </div>\
          </div>\
        </form>";
        $('#pbody').html(template);

  	}else if(tipoPer.val()==1){ ////////////////////////AGREGAR ALUMNO
  		let titulo=$('#titulo').text("Agregar Personal");
  		let titPanel=$('#titPanel').text("Datos Personal del Alumno");
  		let template="<form id='formAddAlumno'>\
          <div class='form-group'>\
            <div class='container' style='width: 100%;'>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Nombre'>Nombre</label>\
                <input type='text' required='' class='form-control' id='Nombre' placeholder='Introduce un nombre'>\
                </div>\
                <div class='col-6'>\
                  <label for='Carrera'>Carrera</label>\
                  <select class='custom-select custom-select-lg ' id='Carrera' required=''>\
                        <option disabled selected value=''>Carrera</option>\
                        <option value='ITICS'>ITICS</option>\
                        <option value='Administración'>Administración</option>\
                        <option value='Gestión Empresarial'>Gestión Empresarial</option>\
                        <option value='Contabilidad'>Contabilidad</option>\
                        <option value='Derecho'>Derecho</option>\
                        <option value='Mercadoctenia'>Mercadoctenia</option>\
                        <option value='Nutricion'>Nutricion</option>\
                        <option value='Administración'>Administración</option>\
                        <option value='Criminologia'>Criminologia</option>\
                        <option value='Psicologia'>Psicologia</option>\
                        <option value='Educacion fisica'>Educacion fisiica</option>\
                        <option value='Diseño grafico'>Diseño grafico</option>\
                  </select>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-4'>\
                  <label for='Fecha'>Fecha de Nacimiento</label>\
                  <input type='date' required='' class='form-control' id='Fecha'>\
                </div>\
                <div class='col-6'>\
                  <label for='Calle'>Calle</label>\
                <input type='text' required='' class='form-control' id='Calle' placeholder='Introduce una calle'>\
                </div>\
                <div class='col-2'>\
                  <label for='Num'>Num. Ext</label>\
                <input type='text' maxlength='5' onkeypress='return justNumbers(event);'  required='' class='form-control' id='Num' placeholder='Num'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Colonia'>Colonia</label>\
                <input type='text' required='' class='form-control' id='Colonia' placeholder='Introduce una colonia'>\
                </div>\
                <div class='col-3'>\
                  <label for='CP'>Codigo Postal</label>\
                <input type='text' required=''  maxlength='5' onkeypress='return justNumbers(event);' class='form-control' id='CP' placeholder='C.P.'>\
                </div>\
                <div class='col-3'>\
                  <label for='status'>Estatus</label>\
                <select class='custom-select custom-select-lg' required='' id='status'>\
                  <option disabled val=''selected>Estatus</option>\
                  <option value='1'>Activo</option>\
                  <option value='0'>Inactivo</option>\
                </select>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Muni'>Municipio</label>\
                  <input type='text' required='' class='form-control' id='Muni' placeholder='Introduce un municipio'>\
                </div>\
                <div class='col-6'>\
                  <label for='Estado'>Estado</label>\
                  <input type='text' required='' class='form-control' id='Estado' placeholder='Introduce un estado'>\
                </div>\
              </div><br>\
              <div class='row'>\
                <div class='col-6'>\
                  <label for='Cel'>Celular</label>\
                  <input type='text' maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' placeholder='Introduce un No. de Celular'>\
                </div>\
                <div class='col-6'>\
                  <label for='Email'>Correo</label>\
                  <input type='email' required='' class='form-control' id='Email' placeholder='Introduce un correo'>\
                </div>\
              </div><br><button type='submit' class='btn btn-warning btn-lg'>AGREGAR</button>\
              <button onclick=' (function(){ $(`#AgregPers`).click(); })();' class='btn btn-danger btn-lg'>REGRESAR</button>\
            </div>\
          </div>\
        </form>";

    	$('#pbody').html(template);
  	}
  	});    
    e.preventDefault();
  });



  $(document).on('click', '#InfoPers', (e) => {
    e.preventDefault();
    let titulo=$('#titulo').text("Informacion del Personal");
    let titPanel=$('#titPanel').text("Mostrar/Modificar/Eliminar Personal");
    let selection="<br><label for='selectAgg' style='font-size:20px;'> Seleccione el Tipo de Persona</label>\
            <select id='selectAgg' required='' class='custom-select custom-select-lg mb-3'>\
              <option selected disabled value=''>Seleccione una opcion...</option>\
              <option value='1'>Estudiantes</option>\
              <option value='2'>Profesores</option>\
              <option value='3'>Administradores</option>\
            </select>";
    $('#pbody').html(selection);
    let tipoPer=$('#selectAgg').change(function(){

      if (tipoPer.val()==1){
          MostrarAlumnos();

      }else if(tipoPer.val()==2){
          MostrarProfesores();

      }else if(tipoPer.val()==3){
          MostrarAdministradores();  
          
      }

    });    
    e.preventDefault();
  });

$(document).on('click', '#ModAlumno', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnAlumno'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Alumno");
        let titPanel=$('#titPanel').text("Datos Personal");
        let template=
        `<form id='ActualizarAlumno'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-4'>\
                    <label for='Carrera'>Carrera</label>\
                    <input type='text' disabled class='form-control' id='Carrera' value='${task.Carrera}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='Password'>Contraseña</label>\
                    <input type='text' class='form-control' id='Password' value='${task.Password}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Fecha'>Fecha de Nacimiento</label>\
                    <input type='date' required='' class='form-control' id='Fecha' value='${task.Fecha}'>\
                  </div>\
                  <div class='col-5'>\
                    <label for='Calle'>Calle</label>\
                  <input type='text' required='' class='form-control' id='Calle' value='${task.Calle}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Num'>Num. Ext</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' value='${task.Num}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Colonia'>Colonia</label>\
                  <input type='text' required='' class='form-control' id='Colonia' value='${task.Col}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='CP'>Codigo Postal</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='CP' value='${task.CP}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Status</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Muni'>Municipio</label>\
                    <input type='text' required='' class='form-control' id='Muni' value='${task.Muni}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Estado'>Estado</label>\
                    <input type='text' required='' class='form-control' id='Estado' value='${task.Estado}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Cel'>Celular</label>\
                    <input type='text'  maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' value='${task.Celular}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Email'>Correo</label>\
                    <input type='email' required='' class='form-control' id='Email' value='${task.Correo}'>\
                  </div>\
                </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
                <button id='RegAlum' class='btn btn-danger btn-lg'>REGRESAR</button>\
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });
     });
  
    
  });








$(document).on('click', '#ModAlumno2', (e) => {
    e.preventDefault();
    //var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnAlumno'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Alumno");
        let titPanel=$('#titPanel').text("Datos Personal");
        let template=
        `<form id='ActualizarAlumno2'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-4'>\
                    <label for='Carrera'>Carrera</label>\
                    <input type='text' disabled class='form-control' id='Carrera' value='${task.Carrera}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='Password'>Contraseña</label>\
                    <input type='text' class='form-control' id='Password' value='${task.Password}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Fecha'>Fecha de Nacimiento</label>\
                    <input type='date' required='' class='form-control' id='Fecha' value='${task.Fecha}'>\
                  </div>\
                  <div class='col-5'>\
                    <label for='Calle'>Calle</label>\
                  <input type='text' required='' class='form-control' id='Calle' value='${task.Calle}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Num'>Num. Ext</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' value='${task.Num}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Colonia'>Colonia</label>\
                  <input type='text' required='' class='form-control' id='Colonia' value='${task.Col}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='CP'>Codigo Postal</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='CP' value='${task.CP}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Status</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Muni'>Municipio</label>\
                    <input type='text' required='' class='form-control' id='Muni' value='${task.Muni}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Estado'>Estado</label>\
                    <input type='text' required='' class='form-control' id='Estado' value='${task.Estado}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Cel'>Celular</label>\
                    <input type='text'  maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' value='${task.Celular}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Email'>Correo</label>\
                    <input type='email' required='' class='form-control' id='Email' value='${task.Correo}'>\
                  </div>\
                </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
               
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });
     });
  
    
  });


 $(document).on('submit', '#ActualizarAlumno2', (e) => {
         e.preventDefault();

          const postData = {
          ID: $('#Id').val(),
          NOMBRE: $('#Nombre').val(),
          CARRERA: $('#Carrera').val(),
          FECHA_NACIMIENTO: $('#Fecha').val(),
          CALLE: $('#Calle').val(),
          NUM_EXT: $('#Num').val(),
          COLONIA: $('#Colonia').val(),
          CP: $('#CP').val(),      
          MUNICIPIO: $('#Muni').val(),
          ESTADO: $('#Estado').val(),
          ESTATUS: $('#status').val(),
          CELULAR: $('#Cel').val(),
          CORREO: $('#Email').val(),
          PASSWORD: $('#Password').val(),
          idOp: 'ActualizarAlumno'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Actualizo el Alumno Exitosamente!');

          }else if(v==0){
            alert('NO se pudo Actualizar al Alumno!');
          }else{
            alert('Algo salio mal!');
          }

        });
         
       });

      $(document).on('click', '#RegAlum', (e) => {
        e.preventDefault();
        MostrarAlumnos();
      });

       $(document).on('submit', '#ActualizarAlumno', (e) => {
         e.preventDefault();

          const postData = {
          ID: $('#Id').val(),
          NOMBRE: $('#Nombre').val(),
          CARRERA: $('#Carrera').val(),
          FECHA_NACIMIENTO: $('#Fecha').val(),
          CALLE: $('#Calle').val(),
          NUM_EXT: $('#Num').val(),
          COLONIA: $('#Colonia').val(),
          CP: $('#CP').val(),      
          MUNICIPIO: $('#Muni').val(),
          ESTADO: $('#Estado').val(),
          ESTATUS: $('#status').val(),
          CELULAR: $('#Cel').val(),
          CORREO: $('#Email').val(),
          PASSWORD: $('#Password').val(),
          idOp: 'ActualizarAlumno'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Actualizo el Alumno Exitosamente!');
            MostrarAlumnos();

          }else if(v==0){
            alert('NO se pudo Actualizar al Alumno!');
          }else{
            alert('Algo salio mal!');
          }

        });
         
       });

  


$(document).on('click', '#ElimAlumno', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    if(confirm('Estas Seguro de eliminar la Matricula: '+ id +' ?') == true){
        const postData = {
          Id: id,
          idOp: 'BorrarAlumno'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Elimino al Alumno Exitosamente!');
            MostrarAlumnos();      
          }else if(v==0){
            alert('NO se pudo Eliminar al Alumno!');
          }else{
            alert('Algo salio mal!');
          }

        });
    }
  });

$(document).on('click', '#ModProf', (e) => {
   e.preventDefault();
   var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnProf'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Profesor");
        let titPanel=$('#titPanel').text("Datos Personal");
        let template=
        `<form id='ActualizarProfesor'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-4'>\
                    <label for='Profesion'>Profesion</label>\
                  <input type='text'  required='' class='form-control' id='Profesion' value='${task.Carrera}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='Password'>Contraseña</label>\
                  <input type='text'  required='' class='form-control' id='Password' value='${task.Password}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Fecha'>Fecha de Nacimiento</label>\
                    <input type='date' required='' class='form-control' id='Fecha' value='${task.Fecha}'>\
                  </div>\
                  <div class='col-5'>\
                    <label for='Calle'>Calle</label>\
                  <input type='text' required='' class='form-control' id='Calle' value='${task.Calle}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Num'>Num. Ext</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' value='${task.Num}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Colonia'>Colonia</label>\
                  <input type='text' required='' class='form-control' id='Colonia' value='${task.Col}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='CP'>Codigo Postal</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);'  required='' class='form-control' id='CP' value='${task.CP}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Estatus</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Muni'>Municipio</label>\
                    <input type='text' required='' class='form-control' id='Muni' value='${task.Muni}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Estado'>Estado</label>\
                    <input type='text' required='' class='form-control' id='Estado' value='${task.Estado}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Cel'>Celular</label>\
                    <input type='text'  maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' value='${task.Celular}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Email'>Correo</label>\
                    <input type='email' required='' class='form-control' id='Email' value='${task.Correo}'>\
                  </div>\
                </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
                <button id='RegProf' class='btn btn-danger btn-lg'>REGRESAR</button>\
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });
     });
  
  });


$(document).on('click', '#ModProf2', (e) => {
   e.preventDefault();
   //var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnProf'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Profesor");
        let titPanel=$('#titPanel').text("Datos Personal");
        let template=
        `<form id='ActualizarProfesor2'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-4'>\
                    <label for='Profesion'>Profesion</label>\
                  <input type='text'  required='' class='form-control' id='Profesion' value='${task.Carrera}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='Password'>Contraseña</label>\
                  <input type='text'  required='' class='form-control' id='Password' value='${task.Password}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Fecha'>Fecha de Nacimiento</label>\
                    <input type='date' required='' class='form-control' id='Fecha' value='${task.Fecha}'>\
                  </div>\
                  <div class='col-5'>\
                    <label for='Calle'>Calle</label>\
                  <input type='text' required='' class='form-control' id='Calle' value='${task.Calle}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Num'>Num. Ext</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' value='${task.Num}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Colonia'>Colonia</label>\
                  <input type='text' required='' class='form-control' id='Colonia' value='${task.Col}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='CP'>Codigo Postal</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);'  required='' class='form-control' id='CP' value='${task.CP}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Estatus</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Muni'>Municipio</label>\
                    <input type='text' required='' class='form-control' id='Muni' value='${task.Muni}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Estado'>Estado</label>\
                    <input type='text' required='' class='form-control' id='Estado' value='${task.Estado}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Cel'>Celular</label>\
                    <input type='text'  maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' value='${task.Celular}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Email'>Correo</label>\
                    <input type='email' required='' class='form-control' id='Email' value='${task.Correo}'>\
                  </div>\
                </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
             
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });
     });
  
  });
      
       $(document).on('submit', '#ActualizarProfesor2', (e) => {
         e.preventDefault();
          const postData = {
          ID: $('#Id').val(),
          NOMBRE: $('#Nombre').val(),
          CARRERA: $('#Profesion').val(),
          FECHA_NACIMIENTO: $('#Fecha').val(),
          CALLE: $('#Calle').val(),
          NUM_EXT: $('#Num').val(),
          COLONIA: $('#Colonia').val(),
          CP: $('#CP').val(),      
          MUNICIPIO: $('#Muni').val(),
          ESTADO: $('#Estado').val(),
          ESTATUS: $('#status').val(),
          CELULAR: $('#Cel').val(),
          CORREO: $('#Email').val(),
          PASSWORD: $('#Password').val(),
          idOp: 'ActualizarProfesor'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Actualizo el Profesor Exitosamente!');
        
          }else if(v==0){
            alert('NO se pudo Actualizar al Profeso!');
          }else{
            alert('Algo salio mal!');
          }

        });
         
       });






    $(document).on('click', '#RegProf', (e) => {
        e.preventDefault();
        MostrarProfesores();
      });

       $(document).on('submit', '#ActualizarProfesor', (e) => {
         e.preventDefault();
          const postData = {
          ID: $('#Id').val(),
          NOMBRE: $('#Nombre').val(),
          CARRERA: $('#Profesion').val(),
          FECHA_NACIMIENTO: $('#Fecha').val(),
          CALLE: $('#Calle').val(),
          NUM_EXT: $('#Num').val(),
          COLONIA: $('#Colonia').val(),
          CP: $('#CP').val(),      
          MUNICIPIO: $('#Muni').val(),
          ESTADO: $('#Estado').val(),
          ESTATUS: $('#status').val(),
          CELULAR: $('#Cel').val(),
          CORREO: $('#Email').val(),
          PASSWORD: $('#Password').val(),
          idOp: 'ActualizarProfesor'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Actualizo el Profesor Exitosamente!');
            MostrarProfesores();
          }else if(v==0){
            alert('NO se pudo Actualizar al Profeso!');
          }else{
            alert('Algo salio mal!');
          }

        });
         
       });

   




$(document).on('click', '#ElimProf', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    if(confirm('Estas Seguro de eliminar la Matricula: '+ id+' ?') == true){
        const postData = {
          Id: id,
          idOp: 'BorrarProf'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Elimino al Profesor Exitosamente!');
            MostrarProfesores();  
          }else if(v==0){
            alert('NO se pudo Eliminar al Profesor!');
          }else{
            alert('Algo salio mal!');
          }

        });
      }
  });

$(document).on('click', '#ModAdmin', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnAdmin'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      console.log(response);
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Administrador");
        let titPanel=$('#titPanel').text("Datos Personal");
        let template=
        `<form id='ActualizarAdmin'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Password'>Contraseña</label>\
                  <input type='text' required='' class='form-control' id='Password' value='${task.Password}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Fecha'>Fecha de Nacimiento</label>\
                    <input type='date' required='' class='form-control' id='Fecha' value='${task.Fecha}'>\
                  </div>\
                  <div class='col-5'>\
                    <label for='Calle'>Calle</label>\
                  <input type='text' required='' class='form-control' id='Calle' value='${task.Calle}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Num'>Num. Ext</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='Num' value='${task.Num}'>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-5'>\
                    <label for='Colonia'>Colonia</label>\
                  <input type='text' required='' class='form-control' id='Colonia' value='${task.Col}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='CP'>Codigo Postal</label>\
                  <input type='text'  maxlength='5' onkeypress='return justNumbers(event);' required='' class='form-control' id='CP' value='${task.CP}'>\
                  </div>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Estatus</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Cel'>Celular</label>\
                    <input type='text'  maxlength='10' onkeypress='return justNumbers(event);' required='' class='form-control' id='Cel' value='${task.Celular}'>\
                  </div>\
                  <div class='col-6'>\
                    <label for='Email'>Correo</label>\
                    <input type='email' required='' class='form-control' id='Email' value='${task.Correo}'>\
                  </div>\
                </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
                <button id='RegAdmin' class='btn btn-danger btn-lg'>REGRESAR</button>\
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });
     });
  });


        $(document).on('click', '#RegAdmin', (e) => {
          e.preventDefault();
          MostrarAdministradores();
        });

         $(document).on('submit', '#ActualizarAdmin', (e) => {
         e.preventDefault();
          const postData = {
          ID: $('#Id').val(),
          NOMBRE: $('#Nombre').val(),
          FECHA_NACIMIENTO: $('#Fecha').val(),
          CALLE: $('#Calle').val(),
          NUM_EXT: $('#Num').val(),
          COLONIA: $('#Colonia').val(),
          CP: $('#CP').val(),      
          ESTATUS: $('#status').val(),
          CELULAR: $('#Cel').val(),
          CORREO: $('#Email').val(),
          PASSWORD: $('#Password').val(),
          idOp: 'ActualizarAdmin'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Actualizo al Administrador Exitosamente!');
            MostrarAdministradores();
          }else if(v==0){
            alert('NO se pudo Actualizar al Administrador!');
          }else{
            alert('Algo salio mal!');
          }

        });
         
       });

    

$(document).on('click', '#ElimAdmin', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    if(confirm('Estas Seguro de eliminar la Matricula: '+ id +' ?') == true){
        const postData = {
          Id: id,
          idOp: 'BorrarAdmin'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Elimino el Administrador Exitosamente!');
            $('#InfoPers').click();
            MostrarAdministradores();  
          }else if(v==0){
            alert('NO se pudo Eliminar al Administrador!');
          }else{
            alert('Algo salio mal!');
          }

        });
    }
  });

$(document).on('click', '#AgregMat', (e) => {
    e.preventDefault();
    let titulo=$('#titulo').text("Agregar Materia");
    let titPanel=$('#titPanel').text("Datos de la Materia");
    let selection="<form id='NewMat' >\
        <div class='form-group'>\
          <label >Nombre de la materia</label>\
          <input type='text' class='form-control' id='nombre'  placeholder='Nombre de la materia' required>\
         </div>\
         <div class='form-group'>\
          <label >Semestre</label>\
          <select class='custom-select custom-select-lg' id='semestre'>\
            <option value='1'>1</option>\
            <option value='2'>2</option>\
            <option value='3'>3</option>\
            <option value='4'>4</option>\
            <option value='5'>5</option>\
            <option value='6'>6</option>\
            <option value='7'>7</option>\
            <option value='8'>8</option>\
            <option value='9'>9</option>\
          </select>\
        </div>\
         <div class='form-group'>\
          <label >Status</label>\
          <select class='custom-select custom-select-lg' required='' id='status'>\
                  <option disabled val='' selected>Estatus</option>\
                  <option value='1'>Activo</option>\
                  <option value='0'>Inactivo</option>\
          </select>\
        </div>\
         <div class='form-group'>\
          <label >Créditos</label>\
          <select class='custom-select custom-select-lg' id='creditos'>\
            <option value='3'>3</option>\
            <option value='4'>4</option>\
            <option value='5'>5</option>\
          </select>\
        </div>\
          <input type=hidden name='paso' value=1>\
        <button type='submit' class='btn btn-warning' >AGREGAR MATERIA</button>\
      </form>";
    $('#pbody').html(selection);
    
  });

$(document).on('submit', '#NewMat', (e) => {
   e.preventDefault();
   const postData = {
      NOMBRE: $('#nombre').val(),
      SEMESTRE: $('#semestre').val(),
      CREDITOS: $('#creditos').val(),
      ESTATUS: $('#status').val(),
      idOp: 'NewMat'
    };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      console.log(v);
      if(v==1){
        alert('Se registro la Materia Exitosamente!');
      }else if(v==0){
        alert('NO se pudo registrar la Materia!');
      }else if(v==2){
        alert('Ya existe la Materia!');
      }else{
        alert('Algo salio mal!');
      }

    });

  });

$(document).on('click', '#InfoMat', (e) => {
    e.preventDefault();
    MostrarMaterias();
     
});





$(document).on('click', '#verCalif', (e) => {
     e.preventDefault();
    let titulo=$('#titulo').text("Ver Calificaciones");
    let titPanel=$('#titPanel').text("");
    let template='';
          const postData = {
            id: id,
            idOp: 'verCalfAlumno'
          };
          const url='querys.php';
          $.post(url, postData, (response) => {
            console.log(response);
            const tasks = JSON.parse(response);

            template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 100%;''>\
            <thead>\
              <tr>\
                <th style='font-size: 16px'; scope='col'>NOMBRE</th>\
                <th style='font-size: 16px'; scope='col'>PARCIAL 1</th>\
                <th style='font-size: 16px'; scope='col'>PARCIAL 2</th>\
                <th style='font-size: 16px'; scope='col'>PARCIAL 3</th>\
                <th style='font-size: 16px'; scope='col'>PROMEDIO</th>\
              </tr>\
            </thead>\
            <tbody>";
             tasks.forEach(task => {
                template += 
                    `
               <tr> 
                      <td style='font-size: 16px'; >${task.Nombre}</td>
                      <td style='font-size: 16px'; >${task.Cal1}</td>
                      <td style='font-size: 16px'; >${task.Cal2}</td>
                      <td style='font-size: 16px'; >${task.Cal3}</td>
                      <td style='font-size: 16px'; >${task.CalF}</td>
                     
                      
                    </tr>
                      `
                     
            });
           template += '</tbody>\
              </table>';
           $('#pbody').html(template);

           });
        });



$(document).on('click', '#ModMat', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnaMat'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      console.log(response);
      const tasks = JSON.parse(response);
      tasks.forEach(task => {

        let titulo=$('#titulo').text("Modificar Materia");
        let titPanel=$('#titPanel').text("Datos de la Materia");
        let template=
        `<form id='ActualizarMateria'>\
            <input type='hidden' id='Id' value='${task.Id}'>\
            <div class='form-group'>\
              <div class='container' style='width: 100%;'>\
                <div class='row'>\
                  <div class='col-6'>\
                    <label for='Nombre'>Nombre</label>\
                  <input type='text' required='' class='form-control' id='Nombre' value='${task.Nombre}'>\
                  </div>\
                  <div class='col-2'>\
                    <label for='Semestre'>Semestre</label>\
                    <select class='custom-select custom-select-lg' id='Semestre'>\
                      <option disabled selected value='${task.Semestre}'>Semestre</option>\
                      <option value='1'>1</option>\
                      <option value='2'>2</option>\
                      <option value='3'>3</option>\
                      <option value='4'>4</option>\
                      <option value='5'>5</option>\
                      <option value='6'>6</option>\
                      <option value='7'>7</option>\
                      <option value='8'>8</option>\
                      <option value='9'>9</option>\
                    </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  <div class='col-3'>\
                    <label for='status'>Estatus</label>\
                  <select class='custom-select custom-select-lg' id='status'>\
                    <option disabled selected value='${task.Estatus}'>Estatus</option>\
                    <option value='1'>Activo</option>\
                    <option value='0'>Inactivo</option>\
                  </select>\
                  </div>\
                  <div class='col-4'>\
                    <label for='Creditos'>Creditos</label>\
                    <select class='custom-select custom-select-lg' id='Creditos'>\
                      <option disabled selected value='${task.Creditos}'>Creditos</option>\
                      <option value='3'>3</option>\
                      <option value='4'>4</option>\
                      <option value='5'>5</option>\
                    </select>\
                  </div>\
                </div><br>\
                <div class='row'>\
                  </div><br><button type='submit' class='btn btn-warning btn-lg'>MODIFICAR DATOS</button>\
                  <button id='regMostMat' class='btn btn-danger btn-lg'>REGRESAR</button>\
              </div>\
            </div>\
          </form>`;

        $('#pbody').html(template);
       });

     });
  });


         $(document).on('submit', '#ActualizarMateria', (e) => {
           e.preventDefault();
            const postData = {
            ID: $('#Id').val(),
            NOMBRE: $('#Nombre').val(),
            ESTATUS: $('#status').val(),
            CREDITOS: $('#Creditos').val(),
            CARRERA: $('#Carrera').val(),
            SEMESTRE: $('#Semestre').val(),
            idOp: 'ActualizarMateria'
          };
          
          const url='querys.php';
          $.post(url, postData, (response) => {
            let v =response;
            console.log(v);
            if(v==1){
              alert('Se Actualizo la Materia Exitosamente!');
              MostrarMaterias();
            }else if(v==0){
              alert('NO se pudo Actualizar la Materia!');
            }else{
              alert('Algo salio mal!');
            }

          });
         
       });


$(document).on('click', '#regMostMat', (e) => {
         e.preventDefault();
         MostrarMaterias();

      });
$(document).on('click', '#ElimMat', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    if(confirm('Estas Seguro de eliminar la Materia con Id: '+ id +' ?') == true){
        const postData = {
          Id: id,
          idOp: 'BorrarMat'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Elimino la Materia Exitosamente!');
            MostrarMaterias();
          }else if(v==0){
            alert('NO se pudo Eliminar ala Materia!');
          }else{
            alert('Algo salio mal!');
          }

        });
     }
  });



$(document).on('click', '#AgregClass', (e) => {
  e.preventDefault();
  let titulo=$('#titulo').text("Agregar Clase");
  let titPanel=$('#titPanel').text("Datos para la Clase");
  let template='';
   idOp='BuscMats';
      $.ajax({
        url: 'querys.php',
        data:{idOp},
        type: 'POST',
        success: function(response) {
            const tasks = JSON.parse(response);
             let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: 10%; width: 80%;'>\
                  <thead>\
                    <tr>\
                      <th style='font-size: 12px'; scope='col'>SEL.</th>\
                      <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                    </tr>\
                  </thead>\
                  <tbody>";
                   tasks.forEach(task => {
                      template += 
                          `
                     <tr> 
                            <form>
                            <td><input style='position: relative;' required class='form-check-input' type="radio" id='radio' name='radioClases2'  value='${task.Id}'></td>\
                            <td style='font-size: 12px'; >${task.Nombre}</td>
                                                                           
                          </tr>
                            `
                           
                    });
                 template += "</tbody>\
                    </table><br>\
                    <button type='submit' id='aceptarClass' class='btn btn-warning'>ACEPTAR</button>\
                    </form>";
                 $('#pbody').html(template);
        }

      });
});


$(document).on('click', '#aceptarClass', (e) => { //CONFIRMAR CLASE PARA PROFESOR
   e.preventDefault();
   let x = $('input:radio[name="radioClases2"]:checked').val();
   if(x != null){
    let selection="<form id='formAgregClass'>\
        <div class='form-row'>\
            <div class='col-3'>\
                <label>Id Materia</label>\
                <input type='text' class='form-control' disabled id='id_mat'  value='"+x+"' >\
            </div>\
            <div class='form-group'>\
            <label >Carrera</label>\
            <select class='custom-select custom-select-lg ' id='carrera' required=''>\
                          <option disabled selected value=''>Carrera</option>\
                          <option value='ITICS'>ITICS</option>\
                          <option value='Administración'>Administración</option>\
                          <option value='Gestión Empresarial'>Gestión Empresarial</option>\
                          <option value='Contabilidad'>Contabilidad</option>\
                          <option value='Derecho'>Derecho</option>\
                          <option value='Mercadoctenia'>Mercadoctenia</option>\
                          <option value='Nutricion'>Nutricion</option>\
                          <option value='Administración'>Administración</option>\
                          <option value='Criminologia'>Criminologia</option>\
                          <option value='Psicologia'>Psicologia</option>\
                          <option value='Educacion fisica'>Educacion fisiica</option>\
                          <option value='Diseño grafico'>Diseño grafico</option>\
            </select>\
           </div>\
           <div class='col-3'>\
                <label for='capacidad'>Capacidad</label>\
                <input type='text' class='form-control' required='' maxlength='2' onkeypress='return justNumbers(event);' id='capacidad' value='' placeholder='Capacidad..' >\
          </div>\
        </div><br>\
        <div class='form-row'>\
            <div class='col'>\
                <label>Salón</label>\
                <input type='text' class='form-control' maxlength='3' onkeypress='return justNumbers(event);' required='' id='salon' placeholder='Ingresa salón'>\
            </div>\
            <div class='col'>\
                <label>Sección</label>\
                <input type='text' class='form-control' maxlength='1' onkeypress='return justNumbers(event);'  required='' id='seccion' placeholder='Ingresa sección'>\
            </div>\
            <div class='col'>\
                <label>Ciclo</label>\
                <input type='text' class='form-control' maxlength='6' onkeypress='return justNumbers(event);' required='' id='ciclo' placeholder='Ingresa ciclo escolar'>\
            </div>\
        </div><br>\
        <div class='form-row'>\
        ";
        var hora = ['Lunes_entrada','Lunes_salida','Martes_entrada','Martes_salida','Miercoles_entrada','Miercoles_salida','Jueves_entrada','Jueves_salida','Viernes_entrada','Viernes_salida'];
        for (var i = 0; i < 10; i++) {
          selection+="<br><div class='col-5'>\
                <label>"+hora[i]+"</label>\
                <select class='custom-select custom-select-lg'  id='"+hora[i]+"'>\
                    <option disabled selected value='' >Seleccione una Hora</option>\
                    <option value='07:00'>07:00</option>\
                    <option value='08:00'>08:00</option>\
                    <option value='09:00'>09:00</option>\
                    <option value='10:00'>10:00</option>\
                    <option value='11:00'>11:00</option>\
                    <option value='12:00'>12:00</option>\
                    <option value='13:00'>13:00</option>\
                    <option value='14:00'>14:00</option>\
                    <option value='15:00'>15:00</option>\
                    <option value='16:00'>16:00</option>\
                    <option value='17:00'>17:00</option>\
                    <option value='18:00'>18:00</option>\
                    <option value='19:00'>19:00</option>\
                    <option value='20:00'>20:00</option>\
                </select>\
            </div>";
        }
        selection+="</div>\
        <br>\
        <button type='submit' class='btn btn-warning btn-lg'>Insertar Clase</button>\
        <button id='RegAgregClass' class='btn btn-danger btn-lg'>REGRESAR</button>\
        </form>";

        $('#pbody').html(selection);
   }else{
      alert('Selecciona un Clase!');
   }
    
   
  });





$(document).on('click', '#RegAgregClass', (e) => {
   e.preventDefault();
  $('#AgregClass').click();
});

$(document).on('submit', '#formAgregClass', (e) => {

    e.preventDefault();
    if(($('#Lunes_entrada').val() != null && $('#Lunes_entrada').val() == $('#Lunes_salida').val() )|| ($('#Lunes_entrada').val() != null && $('#Lunes_entrada').val() > $('#Lunes_salida').val())  || ($('#Lunes_entrada').val() == null && $('#Lunes_salida').val() != null) || ($('#Lunes_salida').val() == null && $('#Lunes_entrada').val() != null) ||
       ($('#Martes_entrada').val() != null && $('#Martes_entrada').val() == $('#Martes_salida').val() )|| ($('#Martes_entrada').val() != null && $('#Martes_entrada').val() > $('#Martes_salida').val()) || ($('#Martes_entrada').val() == null && $('#Martes_salida').val() != null) || ($('#Martes_salida').val() == null && $('#Martes_entrada').val() != null) || 
       ($('#Miercoles_entrada').val() != null && $('#Miercoles_entrada').val() == $('#Miercoles_salida').val()) || ($('#Miercoles_entrada').val() != null &&  $('#Miercoles_entrada').val() > $('#Miercoles_salida').val()) || ($('#Miercoles_entrada').val() == null && $('#Miercoles_salida').val() != null) || ($('#Miercoles_salida').val() == null && $('#Miercoles_entrada').val() != null) ||
       ($('#Jueves_entrada').val() != null && $('#Jueves_entrada').val() == $('#Jueves_salida').val() )|| ($('#Jueves_entrada').val() != null && $('#Jueves_entrada').val() > $('#Jueves_salida').val()) || ($('#Jueves_entrada').val() == null && $('#Jueves_salida').val() != null) || ($('#Jueves_salida').val() == null && $('#Jueves_entrada').val() != null) ||
       ($('#Viernes_entrada').val() != null && $('#Viernes_entrada').val() == $('#Viernes_salida').val() )|| ($('#Viernes_entrada').val() != null && $('#Viernes_entrada').val() > $('#Viernes_salida').val()) || ($('#Viernes_entrada').val() == null && $('#Viernes_salida').val() != null) || ($('#Viernes_salida').val() == null && $('#Viernes_entrada').val() != null) ){
      

      alert('Esta seleccionando un rango de horas Incorrecto!');
      
    }else if($('#Lunes_entrada').val() == null && $('#Lunes_salida').val() == null && $('#Martes_entrada').val() == null && $('#Martes_salida').val() == null && $('#Miercoles_entrada').val() == null && $('#Miercoles_salida').val() == null
      && $('#Jueves_entrada').val() == null && $('#Jueves_salida').val() == null && $('#Viernes_entrada').val() == null && $('#Viernes_salida').val() == null){

      alert('Selecciona por lo menos un rango!');

    }else{
        const postData = {
        ID: $('#id_mat').val(),
        SALON: $('#salon').val(),
        SECCION: $('#seccion').val(),
        CARRERA: $('#carrera').val(),
        CAPACIDAD: $('#capacidad').val(),
        CICLO: $('#ciclo').val(),
        LUNES: $('#Lunes_entrada').val() +'-'+ $('#Lunes_salida').val(),
        MARTES: $('#Martes_entrada').val() +'-'+ $('#Martes_salida').val(),  
        MIERCOLES: $('#Miercoles_entrada').val() +'-'+ $('#Miercoles_salida').val(),
        JUEVES: $('#Jueves_entrada').val() +'-'+ $('#Jueves_salida').val(),
        VIERNES:$('#Viernes_entrada').val() +'-'+ $('#Viernes_salida').val(),
        idOp: 'AddClase'
      };
      
      const url='querys.php';
      $.post(url, postData, (response) => {
        let v =response;
        console.log(v);
        if(v==1){
          alert('Se registro la Clase Exitosamente!');
        }else if(v==0){
          alert('NO se pudo registrar la Clase!');
        }else{
          alert('Algo salio mal!');
        }

      });

    }
  });



//////////////////////////////////////////////////////////////







$(document).on('click', '#InfoClass', (e) => {
  e.preventDefault();
  let titulo=$('#titulo').text("Informacion de la Clase");
  let titPanel=$('#titPanel').text("Mostrar/Modificar/Eliminar Clase");
  let template='';
   template += "<br><div class='form-group'>\
                    <label style='font-size:25px;' for='selectClass'>Seleccione una Carrera</label>\
                        <select class='custom-select custom-select-lg ' id='carreraClass' required=''>\
                          <option disabled selected value=''>Carrera.....</option>\
                          <option value='ITICS'>ITICS</option>\
                          <option value='Administración'>Administración</option>\
                          <option value='Gestión Empresarial'>Gestión Empresarial</option>\
                          <option value='Contabilidad'>Contabilidad</option>\
                          <option value='Derecho'>Derecho</option>\
                          <option value='Mercadoctenia'>Mercadoctenia</option>\
                          <option value='Nutricion'>Nutricion</option>\
                          <option value='Administración'>Administración</option>\
                          <option value='Criminologia'>Criminologia</option>\
                          <option value='Psicologia'>Psicologia</option>\
                          <option value='Educacion fisica'>Educacion fisiica</option>\
                          <option value='Diseño grafico'>Diseño grafico</option>\
                          </select></div><br>\
                          <div class='container'><div id='MostClases'></div></div>";           
   $('#pbody').html(template);
   idOp='BuscMats';
   $('#carreraClass').change(function() {
              const postData = {
                carrera: $('#carreraClass').val(),
                idOp: 'BuscClases'
              };
              const url='querys.php';
              $.post(url, postData, (response) => {
                console.log(response);
                const tasks = JSON.parse(response);
                if(tasks.length == 0){
                    let template = '<h2>NO HAY CLASES PARA ESTA MATERIA</h2>';
                    $('#MostClases').html(template);
                }else{
                  let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: auto;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 12px'; scope='col'>ID CLASE</th>\
                    <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                    <th style='font-size: 12px'; scope='col'>SALON</th>\
                    <th style='font-size: 12px'; scope='col'>SECCION</th>\
                    <th style='font-size: 12px'; scope='col'>LUNES</th>\
                    <th style='font-size: 12px'; scope='col'>MARTES</th>\
                    <th style='font-size: 12px'; scope='col'>MIERCOLES</th>\
                    <th style='font-size: 12px'; scope='col'>JUEVES</th>\
                    <th style='font-size: 12px'; scope='col'>VIERNES</th>\
                    <th style='font-size: 12px'; scope='col'>CICLO</th>\
                    <th style='font-size: 12px'; scope='col'>DISPONIBLE</th>\
                    <th style='font-size: 12px'; scope='col'>MODIFICAR</th>\
                    <th style='font-size: 12px'; scope='col'>ELIMINAR</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 12px'; >${task.Id}</td>
                          <td style='font-size: 12px'; >${task.Nombre}</td>
                          <td style='font-size: 12px'; >${task.Salon}</td>
                          <td style='font-size: 12px'; >${task.Seccion}</td>
                          <td style='font-size: 12px'; >${task.Lunes}</td>
                          <td style='font-size: 12px'; >${task.Martes}</td>
                          <td style='font-size: 12px'; >${task.Miercoles}</td>
                          <td style='font-size: 12px'; >${task.Jueves}</td>
                          <td style='font-size: 12px'; >${task.Viernes}</td>
                          <td style='font-size: 12px'; >${task.Ciclo}</td>
                          <td style='font-size: 12px'; >${task.Disponible}</td>
                          <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModClass'></i></a></td>
                          <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimClass'></i></a></td>
                          
                        </tr>
                          `
                         
                });
               template += '</tbody>\
                  </table>';
               $('#MostClases').html(template);

             
                }
           });     
   });
       
});




$(document).on('click', '#ModClass', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    const postData = {
      id: id,
      idOp: 'BuscUnaClase'
    };
    const url='querys.php';
    $.post(url, postData, (response) => {
      console.log(response);
      const tasks = JSON.parse(response);
      tasks.forEach(task => {
          let selection=`<form id='formModClass'>\
            <div class='form-row'>\
                <div class='col-3'>\
                    <label>Id Clase</label>\
                    <input type='text' class='form-control' disabled id='id_mat'  value='${task.Id}' >\
                </div>\
            </div><br>\
            <div class='form-row'>\
                <div class='col'>\
                    <label>Salón</label>\
                    <input type='text' class='form-control' maxlength='3' onkeypress='return justNumbers(event);' required='' id='salon' value='${task.Salon}'>\
                </div>\
                <div class='col'>\
                    <label>Sección</label>\
                    <input type='text' class='form-control' maxlength='2' onkeypress='return justNumbers(event);' required='' id='seccion' value='${task.Seccion}'>\
                </div>\
                <div class='col'>\
                    <label>Ciclo</label>\
                    <input type='text' class='form-control' required='' maxlength='6' onkeypress='return justNumbers(event);' id='ciclo' value='${task.Ciclo}'>\
                </div>\
            </div><br>\
            <div class='form-row'>`;
            var hora = ['Lunes_entrada','Lunes_salida','Martes_entrada','Martes_salida','Miercoles_entrada','Miercoles_salida','Jueves_entrada','Jueves_salida','Viernes_entrada','Viernes_salida'];
            for (var i = 0; i < 10; i++) {
              selection+="<br><div class='col-5'>\
                    <label>"+hora[i]+"</label>\
                    <select class='custom-select custom-select-lg'  id='"+hora[i]+"'>\
                        <option disabled selected value='' >Seleccione una Hora</option>\
                        <option value='07:00'>07:00</option>\
                        <option value='08:00'>08:00</option>\
                        <option value='09:00'>09:00</option>\
                        <option value='10:00'>10:00</option>\
                        <option value='11:00'>11:00</option>\
                        <option value='12:00'>12:00</option>\
                        <option value='13:00'>13:00</option>\
                        <option value='14:00'>14:00</option>\
                        <option value='15:00'>15:00</option>\
                        <option value='16:00'>16:00</option>\
                        <option value='17:00'>17:00</option>\
                        <option value='18:00'>18:00</option>\
                        <option value='19:00'>19:00</option>\
                        <option value='20:00'>20:00</option>\
                    </select>\
                </div>";
            }
            selection+="</div>\
            <br>\
            <button type='submit' class='btn btn-warning'>Actualizar Clase</button>\
            <button type='submit' id='regActClass' class='btn btn-danger'>REGRESAR</button>\
            </form>";
       

        $('#pbody').html(selection);
       });
    });
  });


$(document).on('click', '#regActClass', (e) => {
  e.preventDefault();
  $('#InfoClass').click();

});


$(document).on('submit', '#formModClass', (e) => {
         e.preventDefault();
        if(($('#Lunes_entrada').val() != null && $('#Lunes_entrada').val() == $('#Lunes_salida').val() )|| ($('#Lunes_entrada').val() != null && $('#Lunes_entrada').val() > $('#Lunes_salida').val())  || ($('#Lunes_entrada').val() == null && $('#Lunes_salida').val() != null) || ($('#Lunes_salida').val() == null && $('#Lunes_entrada').val() != null) ||
           ($('#Martes_entrada').val() != null && $('#Martes_entrada').val() == $('#Martes_salida').val() )|| ($('#Martes_entrada').val() != null && $('#Martes_entrada').val() > $('#Martes_salida').val()) || ($('#Martes_entrada').val() == null && $('#Martes_salida').val() != null) || ($('#Martes_salida').val() == null && $('#Martes_entrada').val() != null) || 
           ($('#Miercoles_entrada').val() != null && $('#Miercoles_entrada').val() == $('#Miercoles_salida').val()) || ($('#Miercoles_entrada').val() != null &&  $('#Miercoles_entrada').val() > $('#Miercoles_salida').val()) || ($('#Miercoles_entrada').val() == null && $('#Miercoles_salida').val() != null) || ($('#Miercoles_salida').val() == null && $('#Miercoles_entrada').val() != null) ||
           ($('#Jueves_entrada').val() != null && $('#Jueves_entrada').val() == $('#Jueves_salida').val() )|| ($('#Jueves_entrada').val() != null && $('#Jueves_entrada').val() > $('#Jueves_salida').val()) || ($('#Jueves_entrada').val() == null && $('#Jueves_salida').val() != null) || ($('#Jueves_salida').val() == null && $('#Jueves_entrada').val() != null) ||
           ($('#Viernes_entrada').val() != null && $('#Viernes_entrada').val() == $('#Viernes_salida').val() )|| ($('#Viernes_entrada').val() != null && $('#Viernes_entrada').val() > $('#Viernes_salida').val()) || ($('#Viernes_entrada').val() == null && $('#Viernes_salida').val() != null) || ($('#Viernes_salida').val() == null && $('#Viernes_entrada').val() != null) ){
          

          alert('Esta seleccionando un rango de horas Incorrecto!');
          
        }else if($('#Lunes_entrada').val() == null && $('#Lunes_salida').val() == null && $('#Martes_entrada').val() == null && $('#Martes_salida').val() == null && $('#Miercoles_entrada').val() == null && $('#Miercoles_salida').val() == null
          && $('#Jueves_entrada').val() == null && $('#Jueves_salida').val() == null && $('#Viernes_entrada').val() == null && $('#Viernes_salida').val() == null){

          alert('Selecciona por lo menos un rango!');

        }else{
            const postData = {
            ID: $('#id_mat').val(),
            SALON: $('#salon').val(),
            SECCION: $('#seccion').val(),
            CICLO: $('#ciclo').val(),
            LUNES: $('#Lunes_entrada').val() +'-'+ $('#Lunes_salida').val(),
            MARTES: $('#Martes_entrada').val() +'-'+ $('#Martes_salida').val(),  
            MIERCOLES: $('#Miercoles_entrada').val() +'-'+ $('#Miercoles_salida').val(),
            JUEVES: $('#Jueves_entrada').val() +'-'+ $('#Jueves_salida').val(),
            VIERNES:$('#Viernes_entrada').val() +'-'+ $('#Viernes_salida').val(),
            idOp: 'ModClase'
          };
          
          const url='querys.php';
          $.post(url, postData, (response) => {
            let v =response;
            console.log(v);
            if(v==1){
              alert('Se Modifico la Clase Exitosamente!');
            }else if(v==0){
              alert('NO se pudo Modificar la Clase!');
            }else{
              alert('Algo salio mal!');
            }

          });

        }
  });

$(document).on('click', '#ElimClass', (e) => {
    e.preventDefault();
    var id = e.target.getAttribute('name');
    if(confirm('Estas Seguro de eliminar la Clase con Id: '+ id +' ?') == true){
      if(confirm('Se eliminara la Clase de los Profesores y Alumnos, Continuar?') == true){
          const postData = {
          Id: id,
          idOp: 'BorrarClass'
        };
        
        const url='querys.php';
        $.post(url, postData, (response) => {
          let v =response;
          console.log(v);
          if(v==1){
            alert('Se Elimino la Clase Exitosamente!');
          }else if(v==0){
            alert('NO se pudo Eliminar la Clase!');
          }else{
            alert('Algo salio mal!');
          }

        });
      }
        
     }
  });





$(document).on('submit', '#formAddAlumno', (e) => {
   e.preventDefault();
    const postData = {
      NOMBRE: $('#Nombre').val(),
      CARRERA: $('#Carrera').val(),
      FECHA_NACIMIENTO: $('#Fecha').val(),
      CALLE: $('#Calle').val(),
      NUM_EXT: $('#Num').val(),
      COLONIA: $('#Colonia').val(),
      CP: $('#CP').val(),      
      MUNICIPIO: $('#Muni').val(),
      ESTADO: $('#Estado').val(),
      ESTATUS: $('#status').val(),
      CELULAR: $('#Cel').val(),
      CORREO: $('#Email').val(),
      idOp: 'AddAlumno'
    };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      console.log(v);
      if(v==1){
        alert('Se registro el Alumno Exitosamente!');
      }else if(v==0){
        alert('NO se pudo registrar al Alumno!');
      }else if(v==2){
        alert('Ya existe el Alumno!');
      }
      else{
        alert('Algo salio mal!');
      }

    });
   
  });

$(document).on('submit', '#formAddProf', (e) => {
   e.preventDefault();
    const postData = {
      NOMBRE: $('#Nombre').val(),
      CARRERA: $('#Profesion').val(),
      FECHA_NACIMIENTO: $('#Fecha').val(),
      CALLE: $('#Calle').val(),
      NUM_EXT: $('#Num').val(),
      COLONIA: $('#Colonia').val(),
      CP: $('#CP').val(),      
      MUNICIPIO: $('#Muni').val(),
      ESTADO: $('#Estado').val(),
      ESTATUS: $('#status').val(),
      CELULAR: $('#Cel').val(),
      CORREO: $('#Email').val(),
      idOp: 'AddProf'
    };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      console.log(v);
      if(v==1){
        alert('Se registro el Profesor Exitosamente!');
      }else if(v==0){
        alert('NO se pudo registrar al Profesor!');
      }else if(v==2){
        alert('Ya existe el Profesor!');
      }else{
        alert('Algo salio mal!');
      }

    });
   
  });


$(document).on('submit', '#formAddAdmin', (e) => {
   e.preventDefault();
    const postData = {
      NOMBRE: $('#Nombre').val(),
      CARRERA: $('#Profesion').val(),
      FECHA_NACIMIENTO: $('#Fecha').val(),
      CALLE: $('#Calle').val(),
      NUM_EXT: $('#Num').val(),
      COLONIA: $('#Colonia').val(),
      CP: $('#CP').val(),      
      ESTATUS: $('#status').val(),
      CELULAR: $('#Cel').val(),
      CORREO: $('#Email').val(),
      idOp: 'AddAdmin'
    };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      if(v==1){
        alert('Se registro el Administrador Exitosamente!');
      }else if(v==0){
        alert('NO se pudo registrar al Administrador!');
      }else if(v==2){
        alert('Ya existe el Administrador!');
      }else{
        alert('Algo salio mal!');
      }

    });
   
  });

$(document).on('submit', '#formAddAdmin2', (e) => {
   e.preventDefault();
    const postData = {
      NOMBRE: $('#Nombre').val(),
      CARRERA: $('#Profesion').val(),
      FECHA_NACIMIENTO: $('#Fecha').val(),
      CALLE: $('#Calle').val(),
      NUM_EXT: $('#Num').val(),
      COLONIA: $('#Colonia').val(),
      CP: $('#CP').val(),  
      MUNICIPIO: $('#Muni').val(),
      ESTADO: $('#Estado').val(),    
      ESTATUS: $('#status').val(),
      CELULAR: $('#Cel').val(),
      CORREO: $('#Email').val(),
      idOp: 'AddAdmin2'
    };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      if(v==1){
        alert('Se registro el Administrador/Profesor Exitosamente!');
      }else if(v==0){
        alert('NO se pudo registrar al Administrador/Profesor!');
      }else if(v==2){
        alert('Ya existe el Administrador/Profesor!');
      }else{
        alert('Algo salio mal!');
      }

    });
   
  });



  $(document).on('click', '#AgregMatProf', (e) => { //Agregar Materia al Profesor
  	 let template='';
     let id_clase = '';
  	 let titulo=$('#titulo').text("Agregar Clase al Profesor");
  	 let titPanel=$('#titPanel').text("");
  	 let idOp='BuscProfs';
  	 $.ajax({///////////////////////////////////////////////////////////////
      url: 'querys.php',
      data:{idOp},
      type: 'POST',
      success: function(response) {
        const tasks = JSON.parse(response);
        if(tasks.length == 0){
          template = '<h2>NO HAY PROFESORES</h2>';
          $('#pbody').html(template);
        }else{
          template += "<form id='formAddMateria'><div class='form-group'>\
                <label style='font-size:25px; for='select1'>Seleccione un Profesor</label>\
                    <select class='custom-select custom-select-lg' required='' id='select1'>\
                    <option selected disabled value=''>Profesores...</option>";

        tasks.forEach(task => {
          template += 
              `
         <option value="${task.Id}">${task.Nombre}</option>
                `
        });
        template +="</select></div>\
                    <div class='container'><div id='ClasesDispon'></div></div>";
        $('#pbody').html(template);
        $('#select1').change(function () {
              const postData = {
                //carrera: $('#carreraClass').val(),
                idOp: 'BuscClasesDisponibles'
              };
              const url='querys.php';
              $.post(url, postData, (response) => {
                console.log(response);
                const tasks = JSON.parse(response);
                if(tasks.length == 0){
                    let template = '<h2>NO HAY CLASES DISPONIBLES</h2>';
                    $('#ClasesDispon').html(template);
                }else{
                  let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: 15%; width: auto;'>\
                <thead>\
                  <tr>\
                    <th style='font-size: 12px'; scope='col'>SEL.</th>\
                    <th style='font-size: 12px'; scope='col'>ID CLASE</th>\
                    <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                    <th style='font-size: 12px'; scope='col'>SALON</th>\
                    <th style='font-size: 12px'; scope='col'>SECCION</th>\
                    <th style='font-size: 12px'; scope='col'>LUNES</th>\
                    <th style='font-size: 12px'; scope='col'>MARTES</th>\
                    <th style='font-size: 12px'; scope='col'>MIERCOLES</th>\
                    <th style='font-size: 12px'; scope='col'>JUEVES</th>\
                    <th style='font-size: 12px'; scope='col'>VIERNES</th>\
                    <th style='font-size: 12px'; scope='col'>CICLO</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <form>
                          <td><input style='position: relative;' required class='form-check-input' type="radio" id='radio' name='radioClases'  value='${task.Id}'></td>
                          <td style='font-size: 12px'; >${task.Id}</td>
                          <td style='font-size: 12px'; >${task.Nombre}</td>
                          <td style='font-size: 12px'; >${task.Salon}</td>
                          <td style='font-size: 12px'; >${task.Seccion}</td>
                          <td style='font-size: 12px'; >${task.Lunes}</td>
                          <td style='font-size: 12px'; >${task.Martes}</td>
                          <td style='font-size: 12px'; >${task.Miercoles}</td>
                          <td style='font-size: 12px'; >${task.Jueves}</td>
                          <td style='font-size: 12px'; >${task.Viernes}</td>
                          <td style='font-size: 12px'; >${task.Ciclo}</td>
                          
                        </tr>
                          `
                         
                  });
                 template += "</tbody>\
                    </table><br>\
                    <button type='submit' id='formAddClass' class='btn btn-warning'>Agregar Clase</button>\
                    <button type='submit' id='regAddClass' class='btn btn-danger'>REGRESAR</button>\
                    </form>";
                 $('#ClasesDispon').html(template);

               
                  }
                  
               });
            
        });
      } 
     }
    });
    
    
  });

$(document).on('click', '#regAddClass', (e) => {
 e.preventDefault();
  if($('#radio').is(':checked')){
    $('input[name=radioClases]').attr('checked', false);
    $('#AgregMatProf').click();
   }else{
    $('#AgregMatProf').click();
   }
  
});


$(document).on('click', '#formAddClass', (e) => { //CONFIRMAR CLASE PARA PROFESOR
   e.preventDefault();
   let x = $('input:radio[name="radioClases"]:checked').val();
   if(x != null){
      const postData = {
        prof: $('#select1').val(),
        clase: x,
        idOp: 'AddClaseAProfesor'
       };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      console.log(v);
      if(v==1){
        alert('Ya esta registrada la Clase al Profesor!');
        $('#AgregMatProf').click();
      }else if(v==2){
        alert('Se empalma la Clase!');
        $('#AgregMatProf').click();
      }else if(v==3){
        alert('Se agrego exitosamente la Clase al Profesor!');
        $('#AgregMatProf').click();
      }else{
        alert('Algo salio mal!');
        $('#AgregMatProf').click();
      }
      
    });
   }else{
      alert('Selecciona un Clase!');
   }
    
   
  });


























  $(document).on('click', '#AgregMatAlumno', (e) => { //Agregar Materia al Alumno
     let template='';
     let id_clase = '';
     let titulo=$('#titulo').text("Agregar Clase al Alumno");
     let titPanel=$('#titPanel').text("");
     let idOp='BuscAlumnos';
     $.ajax({///////////////////////////////////////////////////////////////
      url: 'querys.php',
      data:{idOp},
      type: 'POST',
      success: function(response) {
        const tasks = JSON.parse(response);
        if(tasks.length == 0){
          template = '<h2>NO HAY ALUMNOS</h2>';
          $('#pbody').html(template);
        }else{
          template += "<form id='formAddMateria2'><div class='form-group'>\
                <label style='font-size:25px; for='select1'>Seleccione un Alumno</label>\
                    <select class='custom-select custom-select-lg' required='' id='select2'>\
                    <option selected disabled value=''>Alumnos...</option>";

        tasks.forEach(task => {
          template += 
              `
         <option value="${task.Id}">${task.Nombre}</option>
                `
        });
        template +="</select></div>\
                    <div class='container'><div id='ClasesDispon2'></div></div>";
        $('#pbody').html(template);
        $('#select2').change(function () {
              const postData = {
                //carrera: $('#carreraClass').val(),
                idOp: 'BuscClasesDisponibles2'
              };
              const url='querys.php';
              $.post(url, postData, (response) => {
                console.log(response);
                const tasks = JSON.parse(response);
                if(tasks.length == 0){
                    let template = '<h2>NO HAY CLASES DISPONIBLES</h2>';
                    $('#ClasesDispon2').html(template);
                }else{
                  let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: 15%; width: auto;'>\
                  <thead>\
                    <tr>\
                      <th style='font-size: 12px'; scope='col'>SEL.</th>\
                      <th style='font-size: 12px'; scope='col'>ID CLASE</th>\
                      <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                      <th style='font-size: 12px'; scope='col'>SALON</th>\
                      <th style='font-size: 12px'; scope='col'>SECCION</th>\
                      <th style='font-size: 12px'; scope='col'>LUNES</th>\
                      <th style='font-size: 12px'; scope='col'>MARTES</th>\
                      <th style='font-size: 12px'; scope='col'>MIERCOLES</th>\
                      <th style='font-size: 12px'; scope='col'>JUEVES</th>\
                      <th style='font-size: 12px'; scope='col'>VIERNES</th>\
                      <th style='font-size: 12px'; scope='col'>CICLO</th>\
                    </tr>\
                  </thead>\
                  <tbody>";
                   tasks.forEach(task => {
                      template += 
                          `
                     <tr> 
                            <form>
                            <td><input style='position: relative;' required class='form-check-input' type="radio" id='radio' name='radioClases'  value='${task.Id}'></td>
                            <td style='font-size: 12px'; >${task.Id}</td>
                            <td style='font-size: 12px'; >${task.Nombre}</td>
                            <td style='font-size: 12px'; >${task.Salon}</td>
                            <td style='font-size: 12px'; >${task.Seccion}</td>
                            <td style='font-size: 12px'; >${task.Lunes}</td>
                            <td style='font-size: 12px'; >${task.Martes}</td>
                            <td style='font-size: 12px'; >${task.Miercoles}</td>
                            <td style='font-size: 12px'; >${task.Jueves}</td>
                            <td style='font-size: 12px'; >${task.Viernes}</td>
                            <td style='font-size: 12px'; >${task.Ciclo}</td>
                            
                          </tr>
                            `
                           
                    });
                 template += "</tbody>\
                    </table><br>\
                    <button type='submit' id='formAddClass2' class='btn btn-warning'>Agregar Clase</button>\
                    <button type='submit' id='regAddClass2' class='btn btn-danger'>REGRESAR</button>\
                    </form>";
                 $('#ClasesDispon2').html(template);

               
                  }
                  
               });
               /*$('input:radio[name="radioClases"]').change(function() {
                    if ($(this).is(':checked') ) {
                          id_clase = $(this).val();
                          
                        }
                                
                   });*/
               
              
        });
      } 
     }
    });
    
    
  });

$(document).on('click', '#regAddClass2', (e) => {
 e.preventDefault();
  if($('#radio').is(':checked')){
    $('input[name=radioClases]').attr('checked', false);
    $('#AgregMatAlumno').click();
   }else{
    $('#AgregMatAlumno').click();
   }
  
});



$(document).on('click', '#formAddClass2', (e) => { //CONFIRMAR CLASE PARA ALUMNO
   e.preventDefault();
   let x = $('input:radio[name="radioClases"]:checked').val();
   if(x != null){
      const postData = {
        alumno: $('#select2').val(),
        clase: x,
        idOp: 'AddClaseAlumno'
       };
    
    const url='querys.php';
    $.post(url, postData, (response) => {
      let v =response;
      console.log(v);
      if(v==1){
        alert('Ya esta registrada la Clase al Alumno!');
        $('#AgregMatAlumno').click();
      }else if(v==2){
        alert('Se empalma la Clase!');
        $('#AgregMatAlumno').click();
      }else if(v==3){
        alert('Se agrego exitosamente la Clase al Alumno!');
        $('#AgregMatAlumno').click();
      }else{
        alert('Algo salio mal!');
        $('#AgregMatAlumno').click();
      }
      
    });
   }else{
      alert('Selecciona un Clase!');
   }
    
   
  });

























$(document).on('click', '#horProf', (e) => {// Ver el Horario del profe

	let titulo=$('#titulo').text("Mostrar Horario");
  let titPanel=$('#titPanel').text("");
	let template='';
    const postData = {
      id_prof: id,
      idOp: 'horProf'
    };
    var dias=['Lunes','Martes','Miercoles','Jueves','Viernes'];

    
    const url='querys.php';
    $.post(url, postData, (response) => {
    		const tasks = JSON.parse(response);
        
        template += "<table class='table-responsive-sm table-bordered'  style='height: 80%; width: 100%;''>\
        <thead>\
          <tr>\
            <th scope='col'>Hora</th>\
            <th scope='col'>LUNES</th>\
            <th scope='col'>MARTES</th>\
            <th scope='col'>MIERCOLES</th>\
            <th scope='col'>JUEVES</th>\
            <th scope='col'>VIERNES</th>\
          </tr>\
        </thead>\
        <tbody>";
         tasks.forEach(task => {
	          template += 
	          		`
					 <tr> 
			            <th scope='row' style='font-size:13px;'>${task.Hora}</th>
			            <td>${task.Lunes}</td>
			            <td>${task.Martes}</td>
			            <td>${task.Miercoles}</td>
			            <td>${task.Jueves}</td>
			            <td>${task.Viernes}</td>
			            
			          </tr>
	                `
	               
	        });

    	template += '</tbody>\
      				</table>';
        $('#pbody').html(template);
    });
    e.preventDefault();
  });


$(document).on('click', '#horAlumno', (e) => {// Ver el Horario del profe

  let titulo=$('#titulo').text("Mostrar Horario");
  let titPanel=$('#titPanel').text("");
  let template='';
    const postData = {
      id_alumno: id,
      idOp: 'horAlumno'
    };
    var dias=['Lunes','Martes','Miercoles','Jueves','Viernes'];

    
    const url='querys.php';
    $.post(url, postData, (response) => {
      const tasks = JSON.parse(response);
        
        template += "<table class='table-responsive-sm table-bordered'  style='height: 80%; width: 100%;''>\
        <thead>\
          <tr>\
            <th scope='col'>Hora</th>\
            <th scope='col'>LUNES</th>\
            <th scope='col'>MARTES</th>\
            <th scope='col'>MIERCOLES</th>\
            <th scope='col'>JUEVES</th>\
            <th scope='col'>VIERNES</th>\
          </tr>\
        </thead>\
        <tbody>";
         tasks.forEach(task => {
            template += 
                `
           <tr> 
                  <th scope='row' style='font-size:13px;'>${task.Hora}</th>
                  <td>${task.Lunes}</td>
                  <td>${task.Martes}</td>
                  <td>${task.Miercoles}</td>
                  <td>${task.Jueves}</td>
                  <td>${task.Viernes}</td>
                  
                </tr>
                  `
                 
          });

      template += '</tbody>\
              </table>';
        $('#pbody').html(template);
    });
    e.preventDefault();
  });




////////////
$(document).on('click', '#subCalif', (e) => {// Subi Calificaciones
             let template='';
             let titulo=$('#titulo').text("Subir Calificaciones");
             let titPanel=$('#titPanel').text("");
             const postData = {
                //carrera: $('#carreraClass').val(),
                idOp: 'BuscMatProf',
                id: id
              };
              const url='querys.php';
              $.post(url, postData, (response) => {
                console.log(response);
                const tasks = JSON.parse(response);
                if(tasks.length == 0){
                    let template = '<h2>NO HAY CLASES REGISTRADAS</h2>';
                    $('#pbody').html(template);
                }else{
                  let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: 10%; width: 80%;'>\
                  <thead>\
                    <tr>\
                      <th style='font-size: 12px'; scope='col'>SEL.</th>\
                      <th style='font-size: 12px'; scope='col'>ID CLASE</th>\
                      <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                      <th style='font-size: 12px'; scope='col'>CARRERA</th>\
                    </tr>\
                  </thead>\
                  <tbody>";
                   tasks.forEach(task => {
                      template += 
                          `
                     <tr> 
                            <form>
                            <td><input style='position: relative;' required class='form-check-input' type="radio" id='radio' name='radioClasesProf'  value='${task.Id}'></td>
                            <td style='font-size: 12px'; >${task.Id}</td>
                            <td style='font-size: 12px'; >${task.Nombre}</td>
                            <td style='font-size: 12px'; >${task.Carrera}</td>
                                                        
                          </tr>
                            `
                           
                    });
                 template += "</tbody>\
                    </table><br>\
                    <button type='submit' id='aceptarClaseProf' class='btn btn-warning'>ACEPTAR</button>\
                    </form>";
                 $('#pbody').html(template);

               
                  }
                  
               });

});


$(document).on('click', '#aceptarClaseProf', (e) => { //MOSTRAR ALUMNOS DE LA CLASE SELECCIONADA
   e.preventDefault();
   
   let x = $('input:radio[name="radioClasesProf"]:checked').val();
   MostrarAlumClass(x,id);
  });





$(document).on('click', '#liberarMat', (e) => {
    e.preventDefault();
    let x = $('#id_claseA').val();
    idOp='BuscAlumnosClase';
    var flag = false;
    let id_clase = x;
    $.ajax({///////////////////////////////////////////////////////////////
      url: 'querys.php',
      data:{id,id_clase,idOp},
      type: 'POST',
      success: function(response) {
      console.log(response);
      const tasks = JSON.parse(response);
        if(tasks.length == 0){
            template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
            $('#pbody').html(template);
        }else{
          flag = false;
          tasks.forEach(task => {
              if(task.CalF == 0){
                flag = true;
              }
                         
          });
          if(flag == false){
            idOp='LibClaseProf';
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              let v =response;
              if(v==1){
                alert('Se libero la Clase Exitosamente!');
                $('#subCalif').click();
              }else{
                alert('Algo salio mal!');
                 $('#subCalif').click();
              }
            }
          });
          }else{
            alert('Faltan Parciales por Calificar!');
          }
        }
      }
    });
});





$(document).on('change', '.check', (e) => {
   e.preventDefault();
   let clase = $('#valorClase').val();
   let val = $('input:radio[name="radioClases"]:checked').val();
   if(val == 1){
       idOp='BuscAlumnosClase';
            let template = '';
            let id_clase = clase;
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              console.log(response);
              const tasks = JSON.parse(response);
              if(tasks.length == 0){
                  template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
                  $('#pbody').html(template);
              }else{
            
                template += "\
                <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 85%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>MODIFICAR</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; >${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td name='1' id='1' style='font-size: 18px'; >${task.Cal1}</td>
                          <td name='2' style='font-size: 18px'; >${task.Cal2}</td>
                          <td name='3' style='font-size: 18px'; >${task.Cal3}</td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                          <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModCalf'></i></a></td>
                          
                          
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                    <input type='hidden' id='id_claseA' value='"+id_clase+"' >\
                  </table>";
              $('#MostrarAlumnosClase').html(template);
              }
              

            }
          });
   }else if(val == 2){
         idOp='BuscAlumnosClase';
            let template = '';
            let id_clase = clase;
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              console.log(response);
              const tasks = JSON.parse(response);
              if(tasks.length == 0){
                  template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
                  $('#pbody').html(template);
              }else{
            
                template += "<input type='hidden' id='cantAl' value='"+tasks.length+"'>\
                <input type='hidden' id='classGral' value='"+id_clase+"'>\
                <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 80%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; class="nombres" value='${task.Id}'>${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td><select class='custom-select custom-select-lg cali1'  id='cal1'>
                                  <option selected value='${task.Cal1}' >${task.Cal1}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>             
                          <td><select class='custom-select custom-select-lg cali2'  id='cal2'>
                                  <option selected value='${task.Cal2}' >${task.Cal2}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>
                          <td><select class='custom-select custom-select-lg cali3'  id='cal3'>
                                  <option  selected value='${task.Cal3}' >${task.Cal3}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                          
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                  </table><br><br>\
                  <button type='submit' id='CalifMasiv' class='btn btn-warning'>REGISTRAR CALIFICACIONES</button>";
              $('#MostrarAlumnosClase').html(template);

                
                
              //
              }
              

            }
          });

   }/*else if(val == 3){
       idOp='BuscAlumnosClase';
            let template = '';
            let id_clase = clase;
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              console.log(response);
              const tasks = JSON.parse(response);
              if(tasks.length == 0){
                  template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
                  $('#pbody').html(template);
              }else{
            
                template += "\
                <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 100%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; >${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td name='1' id='1' style='font-size: 18px'; >${task.Cal1}</td>
                          <td name='2' style='font-size: 18px'; >${task.Cal2}</td>
                          <td name='3' style='font-size: 18px'; >${task.Cal3}</td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                        
                          
                          
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                    <input type='hidden' id='id_claseA' value='"+id_clase+"' >\
                  </table>";
              $('#MostrarAlumnosClase').html(template);
              }
              

            }
          });

   }*/
   

});


$(document).on('click', '#CalifMasiv', (e) => {// MODIFICAR LA CALIFICACION MASIVAS
   e.preventDefault();
   
   var nombres = new Array($('#cantAl').val());
   var x = 0;
   $(".nombres").each(function(index) {
      
     nombres[x] = $(this).text();
     x++;       
                  
    }); 

   var matrix = new Array(3);
   for (var j = 0 ; j < matrix.length ; j++) {
        matrix[j] = new Array($('#cantAl').val());
   }

   let y = 0;
   $(".cali1").each(function(index) {
      
      matrix[0][y]= $(this).val();
       y++;
                  
    }); 
    y = 0;
    $(".cali2").each(function(index) {
      
      matrix[1][y]= $(this).val();
       y++;
                  
    });
     y = 0;
    $(".cali3").each(function(index) {
      
      matrix[2][y]= $(this).val();
       y++;
                  
    });
     
   const postData = {
            ID: nombres,
            ID_CLASE:  $('#classGral').val(),
            ARRAY: matrix, 
            idOp: 'ModCalifMasiv'
          };
          
          const url='querys.php';
          $.post(url, postData, (response) => {
            let v =response;
            console.log(v);
            if(v==1){
              alert('Se Modifico las Calificaciones Exitosamente!');
              MostrarAlumClass($('#classGral').val(),id);
            }else if(v==0){
              alert('NO se pudo Modificar las Calificaciones!');
              MostrarAlumClass($('#classGral').val(),id);
            }else{
              alert('Algo salio mal!');
            }

          }); 
});






$(document).on('click', '#regClassProf', (e) => {// MODIFICAR LA CALIFICACION
   e.preventDefault();
   $('#subCalif').click();


});


$(document).on('click', '#ModCalf', (e) => {// MODIFICAR LA CALIFICACION
   e.preventDefault();

     let titulo=$('#titulo').text("Modificar Calificaciones");
     let titPanel=$('#titPanel').text("");
     var id1= e.target.getAttribute('name');
     var id_clase= $('#id_claseA').val();
     console.log(id_clase);
     idOp='BuscUnAlumnoClase';
            let template = '';
            
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id1,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              
              const tasks = JSON.parse(response);

              template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 100%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; >${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td><select class='custom-select custom-select-lg'  id='cal1'>
                                  <option  selected value='${task.Cal1}' >${task.Cal1}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>
                          <td><select class='custom-select custom-select-lg'  id='cal2'>
                                  <option selected value='${task.Cal2}'>${task.Cal2}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>
                          <td><select class='custom-select custom-select-lg'  id='cal3'>
                                  <option  selected value='${task.Cal3}' >${task.Cal3}</option>
                                  <option value='1'>1</option> 
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                              </select>
                          </td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                         
                                                   
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                   <input type='hidden' id='id_claseB' value='"+id_clase+"' >\
                   <input type='hidden' id='id_al' value='"+id1+"' >\
                  </table>\
                  <br><button type='submit' id='ModCalf2' class='btn btn-warning btn-lg'>Modificar Calificacion</button>\
                  <button type='submit' id='regCalf2' class='btn btn-danger btn-lg btn-inline'>REGRESAR</button>";
              $('#pbody').html(template);
           }
         }); 
  });

$(document).on('click', '#regCalf2', (e) => {// MODIFICAR LA CALIFICACION
   e.preventDefault();
   MostrarAlumClass($('#id_claseB').val(),id);
});

$(document).on('click', '#ModCalf2', (e) => {// MODIFICAR LA CALIFICACION
   e.preventDefault();
   aux = $('#id_claseB').val() ;

   const postData = {
            ID: $('#id_al').val(),
            ID_CLASE: $('#id_claseB').val(),
            CALIF1: $('#cal1').val(),
            CALIF2: $('#cal2').val(),
            CALIF3: $('#cal3').val(), 
            idOp: 'ModCalif'
          };
          
          const url='querys.php';
          $.post(url, postData, (response) => {
            let v =response;
            console.log(v);
            if(v==1){
              alert('Se Modifico la Calificacion Exitosamente!');
              MostrarAlumClass(aux,id);
            }else if(v==0){
              alert('NO se pudo Modificar la Calificacion!');
              MostrarAlumClass(aux,id);
            }else{
              alert('Algo salio mal!');
            }

          });
});



$(document).on('click', '#BuscAlumno', (e) => {
          e.preventDefault();
          let titulo=$('#titulo').text("Buscar un Alumno");
          let titPanel=$('#titPanel').text("");
          let template = '' ;
          template += "<form>\
              <div class='form-group'>\
              <label style='font-size:24px;' for='inputBuscAlum'>Escribir el Nombre del Alumno</label>\
              <input style='width: 60%; height: 40px; font-size:18px;' type='text' class='form-control form-control-lg' id='inputBuscAlum'  placeholder='Nombre....'>\
              </div></form>\
              <div class='container'><div id='responseAlumno'></div></div>";
          $('#pbody').html(template);
        });


$(document).on('keyup', '#inputBuscAlum', (e) => {
  if ($('#inputBuscAlum').val()) {
    let search = $('#inputBuscAlum').val();

    idOp = 'BuscAlumnoLike';
    $.ajax({
        url: 'querys.php',
        type: 'POST',
        data: {search, idOp},
        success: function (response) {
          let tasks = JSON.parse(response);
          console.log(tasks);
          let template = '';
            if(tasks.length == 0){
             
            }else{
               template += "<table class='table-responsive-sm table-bordered'  style='height: auto; width: 100%;''>\
            <thead>\
              <tr>\
                <th scope='col'>MATRICULA</th>\
                <th scope='col'>NOMBRE</th>\
                <th scope='col'>CARRERA</th>\
                <th scope='col'>MODIFICAR</th>\
                <th scope='col'>ELIMINAR</th>\
                <th scope='col'>IMPRIMIR KARDEX</th>\
              </tr>\
            </thead>\
            <tbody>";
            }
          tasks.forEach(task => {
              template += 
                    `
               <tr> 
                      <th scope='row' style='font-size:13px;'>${task.Id}</th>
                      <td>${task.Nombre}</td>
                      <td>${task.Carrera}</td>
                      <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModAlumno'></i></a></td>
                      <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimAlumno'></i></a></td>
                      <td><a href='' ><i class='fas fa-print ' name='${task.Id}' id='PrintAlumno'></i></a></td>
                      
                    </tr>
                      `
          });
          template += '</tbody>\
              </table>';
          $('#responseAlumno').html(template);
        }

    });

  }else{
    let template = '';
    $('#responseAlumno').html(template);
  }
});



$(document).on('click', '#PrintAlumno', (e) => { //IMPRIMIR KARDEX
     e.preventDefault();
     var id_alumno = e.target.getAttribute('name');
     window.open('pdf.php?id='+id_alumno, '_blank');
});

$(document).on('click', '#impKardex', (e) => { //IMPRIMIR KARDEX
     e.preventDefault();
     window.open('pdf.php?id='+id, '_blank');
});

$(document).on('click', '#asistencia', (e) => { // TOMAR ASISTENCIA
     e.preventDefault();
     let titulo=$('#titulo').text("Tomar asistencia");
     let titPanel=$('#titPanel').text("");
             const postData = {
                //carrera: $('#carreraClass').val(),
                idOp: 'BuscMatProf',
                id: id
              };
              const url='querys.php';
              $.post(url, postData, (response) => {
                console.log(response);
                const tasks = JSON.parse(response);
                if(tasks.length == 0){
                    let template = '<h2>NO HAY CLASES REGISTRADAS</h2>';
                    $('#pbody').html(template);
                }else{
                  let template = '';
                  template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: 10%; width: 80%;'>\
                  <thead>\
                    <tr>\
                      <th style='font-size: 12px'; scope='col'>SEL.</th>\
                      <th style='font-size: 12px'; scope='col'>ID CLASE</th>\
                      <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                      <th style='font-size: 12px'; scope='col'>CARRERA</th>\
                    </tr>\
                  </thead>\
                  <tbody>";
                   tasks.forEach(task => {
                      template += 
                          `
                     <tr> 
                            <form>
                            <td><input style='position: relative;' required class='form-check-input' type="radio" id='radio' name='radioClasesProf'  value='${task.Id}'></td>
                            <td style='font-size: 12px'; >${task.Id}</td>
                            <td style='font-size: 12px'; >${task.Nombre}</td>
                            <td style='font-size: 12px'; >${task.Carrera}</td>
                                                        
                          </tr>
                            `
                           
                    });
                 template += "</tbody>\
                    </table><br>\
                    <button type='submit' id='aceptarClaseProf2' class='btn btn-warning'>ACEPTAR</button>\
                    </form>";
                 $('#pbody').html(template);

               
                  }
                  
               });
});


$(document).on('click', '#aceptarClaseProf2', (e) => { //MOSTRAR ALUMNOS DE LA CLASE SELECCIONADA
   e.preventDefault();
   let x = $('input:radio[name="radioClasesProf"]:checked').val();

   if(x === undefined){
          alert('Selecciona una Clase');
    }else{
       let template = '';
       template += "<label style='font-size: 20px;' for='Fecha'>Seleccione una fecha</label>\
          <input type='date' style='width: 30%;' required='' class='form-control' id='Fecha'><br><br>\
          <div class='container' id='btns'></div>";
       $('#pbody').html(template);
       $('#Fecha').change(function () {

            var z = document.getElementById("Fecha");
            let aux = $('#Fecha');
            let date = new Date(z.value.replace(/-+/g, '/'));

              let options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              };
              
              if (aux.val() > '2019-04-20' && aux.val() < '2019-11-20' ) {
                if(date.getDay() == 6 || date.getDay() == 0){
                  alert('La fecha pertenece a un Sabado o Domingo!');
                  let template ="<div class='container' id='btns'></div>";
                  $('#btns').html(template);
                }else{
                 
                  let template ="<input type='hidden' id='claseAsist' value='"+x+"'>\
                          <button type='submit' id='AgregAsist' class='btn btn-warning'>INSERTAR</button>\
                         <button type='submit' id='ModAsist' class='btn btn-warning'>TOMAR ASISTENCIA</button>";
                  $('#btns').append(template);  
                   
                }
              }else{
                alert('La fecha no pertenece al Ciclo Escolar');
                let template ="<div class='container' id='btns'></div>";
                  $('#btns').html(template);
              }
              
              
       });
      }
  });



$(document).on('click', '#ModAsist', (e) => { 
   e.preventDefault();
   let aux = $('#claseAsist').val();
   let fecha = $('#Fecha').val();

  var i = 0;
  let template = '';
   const postData = {
                  idOp: 'BuscAsistencia',
                  id_clase: aux
                };
                const url='querys.php';
                $.post(url, postData, (response) => {
                  const tasks = JSON.parse(response);
                  if(tasks.length == 0){
                    alert('No hay registros para Tomar Asistencia!');
                  }else{

                     template += "<input type='hidden' id='cantAl' value='"+tasks.length+"'>\
                        <input type='hidden' id='classGral' value='"+aux+"'>\
                        <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 80%;''>\
                        <thead>\
                          <tr>\
                            <th style='font-size: 16px; background:#ffc107;' ; scope='col'>ASISTENCIA</th>\
                            <th style='font-size: 16px; background:#ffc107;' scope='col'>CLASE</th>\
                            <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                            <th style='font-size: 16px; background:#ffc107;' scope='col'>FECHA</th>\
                          </tr>\
                        </thead>\
                        <tbody>";
                         tasks.forEach(task => {
                            if(task.Asistencia == 0){
                              template += 
                                  `
                             <tr> 
                                    <td style='font-size: 18px'; class="datos" ><input style='position: relative;' class=form-check-input" type="checkbox" value="" id="Check1"></td>
                                    <td style='font-size: 18px'; >${task.Clase}</td>
                                    <td style='font-size: 18px';  class='nombres'>${task.Nombre}</td>
                                    <td style='font-size: 18px'; >${task.Fecha}</td>
                                     
                                  </tr>
                                    `
                            }else{

                                template += 
                                `
                           <tr> 
                                  <td style='font-size: 18px'; ><input  style='position: relative;' class="form-check-input datos" type="checkbox" checked value="" id="Check1"></td>
                                  <td style='font-size: 18px'; >${task.Clase}</td>
                                  <td style='font-size: 18px'; class='nombres'>${task.Nombre}</td>
                                  <td style='font-size: 18px'; >${task.Fecha}</td>
                                   
                                </tr>
                                  `
                            }
                            
                                 
                        });
                       template += "</tbody>\
                          </table><br>\
                          <button type='submit' id='AsistMasiv' class='btn btn-warning'>REGISTRAR ASISTENCIA</button>";
                      $('#btns').html(template);

                  }
                  
                });
 });










$(document).on('click', '#AsistMasiv', (e) => {// MODIFICAR LA CALIFICACION MASIVAS
   e.preventDefault();
   var nombres = new Array($('#cantAl').val());
   var asistencia = new Array($('#cantAl').val());
   var x = 0;
   $(".nombres").each(function(index) {
      
     nombres[x] = $(this).text();
     x++;       
                  
    }); 
   x=0;
   $("input[type=checkbox]").each(function(index) {

      if($(this).prop('checked')) {
        asistencia[x] = 1;
     }else{
        asistencia[x] = 0;
     }
     x++;       
                  
    });
      const postData = {
            NOMBRES: nombres,
            ID_CLASE:  $('#classGral').val(),
            ASIST: asistencia, 
            idOp: 'ModAsistMasiv'
          };
          
          const url='querys.php';
          $.post(url, postData, (response) => {
            let v =response;
            console.log(v);
            if(v==1){
              alert('Se Modifico las Asistencias Exitosamente!');
               $('#asistencia').click();
            }else if(v==0){
              alert('NO se pudo Modificar las Asistencias!');
                $('#asistencia').click();
            }else{
              alert('Algo salio mal!');
            }

          }); 

    
   
});








$(document).on('click', '#AgregAsist', (e) => { 
   e.preventDefault();
   let aux = $('#claseAsist').val();
   let fecha = $('#Fecha').val();

  var i = 0;
   const postData = {
                  idOp: 'BuscAlumnosClase',
                  id: id,
                  id_clase: aux
                };
                const url='querys.php';
                $.post(url, postData, (response) => {
                  const tasks = JSON.parse(response);
                  var nombres = new Array(tasks.length);
                  tasks.forEach(task => {
                     nombres[i] = task.Nombre;
                     i++;
                  });
                  console.log(aux);
                  const postData = {
                    idOp: 'AddAsistencia',
                    fecha: fecha,
                    nombres: nombres,
                    id_clase: aux
                  };
                  $.post(url, postData, (response) => {
                  let v =response;
                  console.log(v);
                  if(v==1){
                    alert('Se insertaron las asistencias Exitosamente!');
                    
                  }else if(v==0){
                    alert('NO se pudo insertar las asistencias!');
                    
                  }else{
                    alert('Algo salio mal!');
                  }
                 
                 });
                });
 });







function MostrarAlumnos() {
          let template='';
          const postData = {
            idOp: 'MostrarAlumnos'
          };
          const url='querys.php';
          $.post(url, postData, (response) => {
            const tasks = JSON.parse(response);

            template += "<table class='table-responsive-sm table-bordered'  style='height: auto; width: auto;''>\
            <thead>\
              <tr>\
                <th style='font-size: 12px'; scope='col'>MATRICULA</th>\
                <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                <th style='font-size: 12px'; scope='col'>CARRERA</th>\
                <th style='font-size: 12px'; scope='col'>FECHA DE NAC.</th>\
                <th style='font-size: 12px'; scope='col'>CALLE</th>\
                <th style='font-size: 12px'; scope='col'>NUM. EXT.</th>\
                <th style='font-size: 12px'; scope='col'>COLONIA</th>\
                <th style='font-size: 12px'; scope='col'>C.P.</th>\
                <th style='font-size: 12px'; scope='col'>MUNICIPIO</th>\
                <th style='font-size: 12px'; scope='col'>ESTADO</th>\
                <th style='font-size: 12px'; scope='col'>CELULAR</th>\
                <th style='font-size: 12px'; scope='col'>CORREO</th>\
                <th style='font-size: 12px'; scope='col'>ESTATUS</th>\
                <th style='font-size: 12px'; scope='col'>MODIFICAR</th>\
                <th style='font-size: 12px'; scope='col'>ELIMINAR</th>\
              </tr>\
            </thead>\
            <tbody>";
             tasks.forEach(task => {
                if(task.Estatus == 1){var status='Activo';}else{ var status='Inactivo';}

                template += 
                    `
               <tr> 
                      <td style='font-size: 12px'; >${task.Id}</td>
                      <td style='font-size: 12px'; >${task.Nombre}</td>
                      <td style='font-size: 12px'; >${task.Carrera}</td>\
                      <td style='font-size: 12px'; >${task.Fecha}</td>
                      <td style='font-size: 12px'; >${task.Calle}</td>
                      <td style='font-size: 12px'; >${task.Num}</td>
                      <td style='font-size: 12px'; >${task.Col}</td>
                      <td style='font-size: 12px'; >${task.CP}</td>
                      <td style='font-size: 12px'; >${task.Muni}</td>
                      <td style='font-size: 12px'; >${task.Estado}</td>
                      <td style='font-size: 12px'; >${task.Celular}</td>
                      <td style='font-size: 12px'; >${task.Correo}</td>
                      <td style='font-size: 12px'; >`+ status +`</td>
                      <td><a href='' ><i class='fas fa-pen '  name='${task.Id}' id='ModAlumno'></i></a></td>
                      <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimAlumno'></i></a></td>
                      
                    </tr>
                      `
                     
            });
           template += '</tbody>\
              </table>';
           $('#pbody').html(template);
           });
}

function MostrarProfesores() {
          let template='';
          const postData = {
            idOp: 'MostrarProfes'
          };
          const url='querys.php';
          $.post(url, postData, (response) => {
            const tasks = JSON.parse(response);

            template += "<table class='table-responsive-sm table-bordered'  style='height: auto; width: auto;''>\
            <thead>\
              <tr>\
                <th style='font-size: 12px'; scope='col'>MATRICULA</th>\
                <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                <th style='font-size: 12px'; scope='col'>CARRERA</th>\
                <th style='font-size: 12px'; scope='col'>FECHA DE NAC.</th>\
                <th style='font-size: 12px'; scope='col'>CALLE</th>\
                <th style='font-size: 12px'; scope='col'>NUM. EXT.</th>\
                <th style='font-size: 12px'; scope='col'>COLONIA</th>\
                <th style='font-size: 12px'; scope='col'>C.P.</th>\
                <th style='font-size: 12px'; scope='col'>MUNICIPIO</th>\
                <th style='font-size: 12px'; scope='col'>ESTADO</th>\
                <th style='font-size: 12px'; scope='col'>CELULAR</th>\
                <th style='font-size: 12px'; scope='col'>CORREO</th>\
                <th style='font-size: 12px'; scope='col'>ESTATUS</th>\
                <th style='font-size: 12px'; scope='col'>MODIFICAR</th>\
                <th style='font-size: 12px'; scope='col'>ELIMINAR</th>\
              </tr>\
            </thead>\
            <tbody>";
             tasks.forEach(task => {
              if(task.Estatus == 1){var status='Activo';}else{ var status='Inactivo';}
                template += 
                    `
               <tr> 
                      <td style='font-size: 12px'; >${task.Id}</td>
                      <td style='font-size: 12px'; >${task.Nombre}</td>
                      <td style='font-size: 12px'; >${task.Carrera}</td>
                      <td style='font-size: 12px'; >${task.Fecha}</td>
                      <td style='font-size: 12px'; >${task.Calle}</td>
                      <td style='font-size: 12px'; >${task.Num}</td>
                      <td style='font-size: 12px'; >${task.Col}</td>
                      <td style='font-size: 12px'; >${task.CP}</td>
                      <td style='font-size: 12px'; >${task.Muni}</td>
                      <td style='font-size: 12px'; >${task.Estado}</td>
                      <td style='font-size: 12px'; >${task.Celular}</td>
                      <td style='font-size: 12px'; >${task.Correo}</td>
                      <td style='font-size: 12px'; >`+status+`</td>
                      <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModProf'></i></a></td>
                      <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimProf'></i></a></td>
                      
                    </tr>
                      `
                     
            });
           template += '</tbody>\
              </table>';
           $('#pbody').html(template);

           });
}


function MostrarAdministradores() {
          let template='';
          const postData = {
            idOp: 'MostrarAdmins'
          };
          const url='querys.php';
          $.post(url, postData, (response) => {
            const tasks = JSON.parse(response);

            template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: auto;''>\
            <thead>\
              <tr>\
                <th style='font-size: 12px'; scope='col'>MATRICULA</th>\
                <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                <th style='font-size: 12px'; scope='col'>FECHA DE NAC.</th>\
                <th style='font-size: 12px'; scope='col'>CALLE</th>\
                <th style='font-size: 12px'; scope='col'>NUM. EXT.</th>\
                <th style='font-size: 12px'; scope='col'>COLONIA</th>\
                <th style='font-size: 12px'; scope='col'>C.P.</th>\
                <th style='font-size: 12px'; scope='col'>CELULAR</th>\
                <th style='font-size: 12px'; scope='col'>CORREO</th>\
                <th style='font-size: 12px'; scope='col'>ESTATUS</th>\
                <th style='font-size: 12px'; scope='col'>MODIFICAR</th>\
                <th style='font-size: 12px'; scope='col'>ELIMINAR</th>\
              </tr>\
            </thead>\
            <tbody>";
             tasks.forEach(task => {
               if(task.Estatus == 1){var status='Activo';}else{ var status='Inactivo';}
                template += 
                    `
               <tr> 
                      <td style='font-size: 12px'; >${task.Id}</td>
                      <td style='font-size: 12px'; >${task.Nombre}</td>
                      <td style='font-size: 12px'; >${task.Fecha}</td>
                      <td style='font-size: 12px'; >${task.Calle}</td>
                      <td style='font-size: 12px'; >${task.Num}</td>
                      <td style='font-size: 12px'; >${task.Col}</td>
                      <td style='font-size: 12px'; >${task.CP}</td>
                      <td style='font-size: 12px'; >${task.Celular}</td>
                      <td style='font-size: 12px'; >${task.Correo}</td>
                      <td style='font-size: 12px'; >`+status+`</td>
                      <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModAdmin'></i></a></td>
                      <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimAdmin'></i></a></td>
                      
                    </tr>
                      `
                     
            });
           template += '</tbody>\
              </table>';
           $('#pbody').html(template);

           });
}

function MostrarAlumClass(x,id) {
  

      if(x === undefined){
          alert('Selecciona una Clase');
      }else{
            idOp='BuscAlumnosClase';
            let template = '';
            let id_clase = x;
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              console.log(response);
              const tasks = JSON.parse(response);
              if(tasks.length == 0){
                  template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
                  $('#pbody').html(template);
              }else{
            
                template += "<input type='hidden' id='valorClase' value='"+x+"'>\
                <div class='form-check form-check-inline'>\
                  <input class='form-check-input check' type='radio' name='radioClases' id='Radio1' checked value='1'>\
                  <label class='form-check-label' for='Radio1'>Individualmente</label>\
                </div>\
                <div class='form-check form-check-inline'>\
                  <input class='form-check-input check' type='radio' name='radioClases' id='Radio1' value='2'>\
                  <label class='form-check-label' for='Radio2'>Masivamente</label>\
                  <button type='submit' id='liberarMat' class='btn btn-warning ml-4'>LIBERAR MATERIA</button>\
                  <button type='submit' id='regClassProf' class='btn btn-danger ml-4'>REGRESAR</button>\
                </div>\
                <br><br><div id='MostrarAlumnosClase'>\
                <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 80%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>MODIFICAR</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; >${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td name='1' id='1' style='font-size: 18px'; >${task.Cal1}</td>
                          <td name='2' style='font-size: 18px'; >${task.Cal2}</td>
                          <td name='3' style='font-size: 18px'; >${task.Cal3}</td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                          <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModCalf'></i></a></td>
                          
                          
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                    <input type='hidden' id='id_claseA' value='"+id_clase+"' >\
                  </table><div>";
              $('#pbody').html(template);
              }
              

            }
          });
      }
   
}


function MostrarAlumClass2(x,id) {
  

      if(x === undefined){
          alert('Selecciona una Clase');
      }else{
            idOp='BuscAlumnosClase';
            let template = '';
            let id_clase = x;
            $.ajax({///////////////////////////////////////////////////////////////
            url: 'querys.php',
            data:{id,id_clase,idOp},
            type: 'POST',
            success: function(response) {
              console.log(response);
              const tasks = JSON.parse(response);
              if(tasks.length == 0){
                  template = '<h2>NO EXISTEN ALUMNOS EN LA CLASE</h2>';
                  $('#pbody').html(template);
              }else{
            
                template += "<input type='hidden' id='valorClase' value='"+x+"'>\
                <div class='form-check form-check-inline'>\
                  <input class='form-check-input check' type='radio' name='radioClases' id='Radio1' checked value='1'>\
                  <label class='form-check-label' for='Radio1'>Individualmente</label>\
                </div>\
                <div class='form-check form-check-inline'>\
                  <input class='form-check-input check' type='radio' name='radioClases' id='Radio1' value='2'>\
                  <label class='form-check-label' for='Radio2'>Masivamente</label>\
                  <button type='submit' id='liberarMat' class='btn btn-warning ml-4'>LIBERAR MATERIA</button>\
                  <button type='submit' id='regClassProf' class='btn btn-danger ml-4'>REGRESAR</button>\
                </div>\
                <br><br><div id='MostrarAlumnosClase'>\
                <table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 80%;''>\
                <thead>\
                  <tr>\
                    <th style='font-size: 16px; background:#ffc107;' ; scope='col'>MATRICULA</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>NOMBRE</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 1</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 2</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>PARCIAL 3</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>FINAL</th>\
                    <th style='font-size: 16px; background:#ffc107;' scope='col'>MODIFICAR</th>\
                  </tr>\
                </thead>\
                <tbody>";
                 tasks.forEach(task => {
                    template += 
                        `
                   <tr> 
                          <td style='font-size: 18px'; >${task.Id}</td>
                          <td style='font-size: 18px'; >${task.Nombre}</td>
                          <td name='1' id='1' style='font-size: 18px'; >${task.Cal1}</td>
                          <td name='2' style='font-size: 18px'; >${task.Cal2}</td>
                          <td name='3' style='font-size: 18px'; >${task.Cal3}</td>
                          <td name='4' style='font-size: 18px'; >${task.CalF}</td>
                          <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModCalf'></i></a></td>
                          
                          
                        </tr>
                          `
                         
                });
               template += "</tbody>\
                    <input type='hidden' id='id_claseA' value='"+id_clase+"' >\
                  </table><div>";
              $('#pbody').html(template);
              }
              

            }
          });
      }
   
}


function MostrarMaterias() {
    let titulo=$('#titulo').text("Informacion de las Materias");
    let titPanel=$('#titPanel').text("Mostrar/Modificar/Eliminar Materias");
    let template='';
          const postData = {
            idOp: 'BuscMats'
          };
          const url='querys.php';
          $.post(url, postData, (response) => {
            const tasks = JSON.parse(response);

            template += "<table class='table-responsive-sm table-bordered' id='matricula' style='height: auto; width: 100%;''>\
            <thead>\
              <tr>\
                <th style='font-size: 12px'; scope='col'>ID</th>\
                <th style='font-size: 12px'; scope='col'>NOMBRE</th>\
                <th style='font-size: 12px'; scope='col'>SEMESTRE</th>\
                <th style='font-size: 12px'; scope='col'>CREDITOS</th>\
                <th style='font-size: 12px'; scope='col'>ESTATUS</th>\
                <th style='font-size: 12px'; scope='col'>MODIFICAR</th>\
                <th style='font-size: 12px'; scope='col'>ELIMINAR</th>\
              </tr>\
            </thead>\
            <tbody>";
             tasks.forEach(task => {
               if(task.Estatus == 1){var status='Activo';}else{ var status='Inactivo';}
                template += 
                    `
               <tr> 
                      <td style='font-size: 12px'; >${task.Id}</td>
                      <td style='font-size: 12px'; >${task.Nombre}</td>
                      <td style='font-size: 12px'; >${task.Semestre}</td>
                      <td style='font-size: 12px'; >${task.Creditos}</td>
                      <td style='font-size: 12px'; >`+status+`</td>
                      <td><a href='' ><i class='fas fa-pen ' name='${task.Id}' id='ModMat'></i></a></td>
                      <td><a href='' ><i class='fas fa-times ' name='${task.Id}' id='ElimMat'></i></a></td>
                      
                    </tr>
                      `
                     
            });
           template += '</tbody>\
              </table>';
           $('#pbody').html(template);

           });
}

function val(x) {
	try{
		console.log(x);
	}catch(error){
		x=1;
	}
	return x;
}














  });