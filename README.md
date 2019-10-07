# Prueba técnica para Resolve Studio

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 8.3.8.

## Instalación

- Instale y ejecute [Docker](https://www.docker.com/) *(este proyecto usa **docker-compose**)*.

- Descargue o clone este repositorio GIT en su máquina local.

- Ejecute una terminal y cambie el directorio a la raíz de este proyecto.

## Entorno de desarrollo

- Ejecute `docker-compose up develop` para iniciar los **contenedores de Docker** *(espere mientras se completa la ejecución del comando)*, al terminar, se tendrá un servidor local disponible en `http://localhost:4200/`. La aplicación se actualiza automáticamente si cambia cualquier archivo fuente.

> Ejecute `docker-compose up --build develop` si cambia cualquier archivo de Docker.

## Detener

- Ejecute `docker-compose stop` para **detener** los contenedores.

*o*

- Ejecute `docker-compose down` para **detener** y **eliminar** los contenedores.

> Agregue el argumento `-v` o `--volumes` para eliminar los volúmenes.

## Ejecutar comandos

Ejecute `docker-compose exec develop bash` para entrar a la terminal del contenedor.

> Dentro del contenedor puede instalar **dependencias de NPM** o cualquier otro comando de Angular.

## Comandos Angular

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Módulo

Ejecute `ng g m DIRECTORY/NAME --flat` para crear un nuevo módulo.

#### Página

Ejecute `ng g c pages/NAME` para crear una nueva página.

#### Componente

Ejecute `ng g c components/NAME` para crear un nuevo componente.

#### Interface

Ejecute `ng g i interfaces/NAME interface` para crear una nueva interface.

#### Enum

Ejecute `ng g e enums/NAME` para crear un nuevo enum.

#### Servicio

Ejecute `ng g s services/NAME` para crear un nuevo servicio.

#### Guardia

Ejecute `ng g g guards/NAME` para crear un nuevo guardia.

#### Pipe

Ejecute `ng g p pipes/NAME` para crear un nuevo pipe.

## Despliegue

- Ejecute el comando `npm run deploy` para compilar para producción y publicar en **Firebase Hosting**.
