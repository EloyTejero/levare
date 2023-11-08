# Base de Datos

## Stored Procedures

### alumnoSearchByDni
- Recibe:
dni
- Devuelve:
Id de alumno

### alumnoSearchByName
- Recibe:
nombre, apellido
- Devuelve:
Id/s de alumno/s

### asignarCursoaUsuario
- Recibe:
id_curso, id_usuario
- Devuelve:
Nada

### chequeoUsuario
- Recibe:
nombre, contrasena
- Devuelve:
id de usuario

### createAlumno
- Recibe:
dni, nombre, apellido
- Devuelve:
Nada

### createCurso
- Recibe:
id_division
- Devuelve:
Nada

### createCycle
- Recibe:
nombre
- Devuelve:
Nada

### createDivision
- Recibe:
nombre, id_ciclo
- Devuelve:
Nada

### createMateria
- Recibe:
nombre, id_ciclo
- Devuelve:
Nada

### createNota
- Recibe:
id_curso_alumno, id_materia, id_etapa, id_estado, nota
- Devuelve:
Nada

### createObservacion
- Recibe:
id_curso_alumno, texto
- Devuelve:
Nada

### createPhase
- Recibe:
nombre
- Devuelve:
Nada

### createUser
- Recibe:
rol, nombre, contrasena
- Devuelve:
Nada

### desactivarUsuario
- Recibe:
id_usuario
- Devuelve:
Nada

### desactivarUsuarioCurso
- Recibe:
id_curso, id_usuario
- Devuelve:
Nada

### readAllSubjects
- Recibe:
Nada
- Devuelve:
id_curso

# Backend

## Endpoints

### /call (POST)

Permite hacer directamente llamadas directas a la base de datos 

Dentro del body es necesario que esten los siguientes parametros (respetar nombres y formato):
- spname:
El nomrbe de store procedure tal cual como aparece en la base de datos
- args:
Los argumentos que necesita el SP tal cual los pide. Sus valores deben estar en un string con el siguiente formato: "12 , 'texto' " para que la base de datos pueda leerlos correctamente. Por ejemplo si el SP necesita los argumentos dni, nombre, apellido; y yo quiero insertar los datos: 3452834, Jesus y Hernandez; el valor de args debera ser: "3452834 , 'Javier' , 'Hernandez' "
- uname:
El nombre del usuario que esta logeado al sistema
- upass:
La contraseña del usuario que esta logeado al sistema