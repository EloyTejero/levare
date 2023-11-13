use dblevare;
select * from estado_aprobacion;
INSERT INTO `dblevare`.`estado_aprobacion`
(`nombre`)
VALUES
("APROBADO");
select * from nota;
select * from curso_alumno;
select * from materia;
select * from ciclo;
select * from curso;
select * from division;
select * from etapa;
INSERT INTO `dblevare`.`materia`
(`id_ciclo`,
`nombre`)
VALUES
(3,
"lengua");

CALL createNota(4, 5, 1, 1, 5);

CALL readNota(3);