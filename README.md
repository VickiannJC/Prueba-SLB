# Proyecto-SLB
## Descripción del Proyecto
### Objetivo
Desarrollar una aplicación web para gestionar pozos petroleros.
## Funcionalidades
-Listar los pozos petroleros disponibles en una tabla con datos actualizados desde una API.
-Crear nuevos registros de pozos.
-Actualizar el estado operativo de un pozo (de "activo" a "inactivo" y viceversa).
-Visualizar estadísticas, como el porcentaje de pozos activos e inactivos, y la producción total diaria.

##Arquitectura
1. Frontend => Angular.
     1. Estadísticas (No desarrolado por cuestión de tiempo)
       -Mostrar el porcentaje de pozos activos e inactivos.
          porcentajeActivos = (pozosActivos / totalPozos) * 100;
       -Calcular la producción total diaria de todos los pozos.
           produccionTotal = pozos.reduce((sum, pozo) => sum + pozo.produccionDiaria, 0);
     3. Formulario
       -Añadir pozos nuevos a la lista:
          Atributos: Nombre, ubicación, Producción diaria (barriles), estado inicial (activo/inactivo)
     4. Pozos
        -Mostrar la tabla de todos los pozos con sus atributos
        -Cambiar el estado de un pozo (Activo/Inactivo)
     4.Pipe
        Conversión de unidades de producción diarias: barriles, galones y litros.
3. Backend =>  Node.js con TypeScript.
   Maneja operaciones CRUD mediate endpoints REST
   -GET ->getPozos: Devuelve la lista de todos los pozos registradis
   -post -> createPozos: Crea un nuevo pozo, añadiendole a la tabla
   -patch -> updateEstadoPozo: Actualizar el estado de un pozo (activo /inactivo)
5. Base de datos => PostgreSQL.
       TABLE pozos (
        id SERIAL PRIMARY KEY,             -- ID único para cada pozo (auto-incremental)
        nombre VARCHAR(100) NOT NULL,      -- Nombre del pozo
        ubicacion VARCHAR(100) NOT NULL,   -- Ubicación del pozo
        produccion_diaria NUMERIC NOT NULL, -- Producción diaria en barriles
        estado VARCHAR(10) CHECK (estado IN ('activo', 'inactivo')) NOT NULL -- Estado del pozo (activo/inactivo)
    );


  #ERRORES 
  Error Crítico en el servidor frontend -> HTTP 404
  Posibles causas:
  1. Rutas no configuradas correctamente en el servidor.
  2. Falta de redirección al archivo index.html para servir el frontend desde el backend.
  ##FALTANTES
  ##Dockerización
     1. Crear un Dockerfile para el backend que instala dependencias y ejecuta el servidor.
     2. Crear otro Dockerfile para el frontend compila la aplicación Angular y la sirve con Nginx.
    3.  Archivo docker-compose.yml -> coordina ambos servicios junto con la base de datos
  ## Instrucciones para Correr el proyecto
  1. Clonar el repositorio
      git clone 
      cd Prueba-SLB
  ##Backend
  2. Instalación de dependencias
      npm install express pg body-parser cors typescript @types/node @types/express –sabe
      npm install --save-dev @types/cors
      //instalación de pg librería utilizada para conectarse a PostgreSQL.
      npm install --save-dev @types/pg
  3. Compilación servidor
       ts
  4. Correr el servidor
       node dist/index.js
Servidor http://localhost:3000
##Frontend
  6. Instalación de dependencias
      npm install @angular/forms @angular/common @angular/router
      npm install -g http-server
  7. Correr el servidor
     ng serve  
     
Nota: Por error http 404:
Se realizaron pruebas con el servidor de ángular 4200, y se creó para intentar encontrar la fuente del error un servidor local con el puerto 8080
pero no se logró solventar el error

Evolución del error, se lograron corregir a último momento algunos errores, pero persiste el no reconocimiento de app-pozos como un elemnto no reconocido
  
