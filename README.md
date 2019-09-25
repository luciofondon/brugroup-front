# BruGroup

Brugroup es una supuesta gestión de usuarios utilizando diferentes protocolos de comunicación y persistiendo los datos en una Bases de Datos, además, de tener una aplicación web. 

Destacar que los diferentes proyectos se han divididos en tres repositorios, según las tecnologías empleadas:
1. Brugroup-back-spring
2. Brugroup-back-node
3. Brugroup-front


# ARQUITECTURA
El ejemplo de la aplicación que se ha desarrollado es una simulación de una arquitectura orientada a microservicios. La idea es dividir la aplicación en partes funcionales, sin embargo, hay que destacar que es una aplicación demo. 

![image](https://drive.google.com/uc?export=view&id=10jEYNoFteJhcaDJL8iI4y_f84o49TAk6)

A continuación, se detallan los diferentes servidores que forman la aplicación:

- **Bases de Datos HyperSQL**

Para ofrecer persistencia a la aplicación se ha utilizado el Sistema Gestos de Bases de Datos (HSQLDB).


- **Servidor Eureka**

Eureka es un servicio REST cuyo objetivo principal es registrar y localizar microservicios existentes, informar de su localización, su estado y datos relevantes de cada uno de ellos. Además, nos facilita el balanceo de carga y tolerancia a fallos.


En la dirección [http://localhost:8761] se puede acceder al cliente web del servidor para observar los diferentes servicios desplegados y el estado de cada uno de ellos

- **Servidor SOAP**

Este servidor despliega unos Web Service para poder ejecutar llamadas a procecimiento remoto (RPC). Estas llamadas permiten realizar un CRUD directamente con acceso a la Bases de Datos y atacar a la entidad de Usuario. 

Por otra parte, este servidor genera dinámicamente un fichero WSDL [http://localhost:8080/ws/users.wsdl] que se encuentra protegido con usuario "userws" y contraseña "passW1ord". A partir de este fichero WSDL se podrá generar de forma sencilla un cliente, por ejemplo, utilizando *SOAP UI*.

- **Servidor REST**

Este servidor despliega una API REST que permite realizar un CRUD directamente con acceso a la Bases de Datos y atacar a la entidad de Usuario. Además, todos los servicios estarán duplicados, unos atacan directamente a la BD y otros al servidor SOAP. 

Por otra parte, este protocolo al no generar ningún sistema de información de forma automático para poder saber cómo atarlo, se ha añadido la configuración de *Swagger* con toda la documentación necesaria para atarcale. La web de swagger se despliega en [http://localhost:9090/swagger-ui.html]


- **Servidor GraphQL**

Graphql es un lenguaje de consulta que se plantea como alterativa a REST para comunicarse un cliente con servidor. La ventaja es que nos permite recuperar una respuesta predecible

Este servidor despliga una aplicación Graphql y un cliente *GraphiQL* [http://localhost:3000/api] para entornos de desarrollo donde poder lanzar las diferentes consultas. 

# Brugroup-front

## Tecnologías empleadas
En el desarrollo del front de la aplicación se ha empleado el framework **Angular** en su versión 8. Además, se ha utilizado el módulo PrimeNG.


## Requisitos

Para desplegar y desarrollar este proyecto es necesario tener configurado: 

- Node JS [https://nodejs.org/es/] 
- NPM [https://www.npmjs.com/]


# Construir proyecto

Instarlar las dependencias descritas en el fichero *package.json*.

```
npm install
```

Una vez instaladas las dependencias se puede ejecutar el proyecto con el siguiente comando que levantará un servidor para desarrollo que estará escuchando los diferentes cambios para transpilar en tiempo real el proyecto. Este servidor desplegará el proyecto en `http://localhost:4200/`

```
npm start
```

Para generar la versión de produción hay que utilizar el siguiente comando que generará una carpeta "dist" con el proyecto transpilado. 

```
ng build --prod
```


