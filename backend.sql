-- create schema backend 
-- use backend
-- drop schema backend
-- drop table persona;
CREATE TABLE persona (
  dni INT (11) primary key,
  nombre VARCHAR(30) NOT NULL,
  apellido VARCHAR(30) NOT NULL
);

-- drop table usuario;
CREATE TABLE usuario (
  mail VARCHAR(40) primary key,
  nickname VARCHAR(20) NOT NULL,
  clave VARCHAR(20) NOT NULL,
  persona int not null,
  foreign key(persona) references persona(dni)
);
