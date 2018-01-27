# Nodejs


Pasos para arrancar y probar la api REST:

1.Instalar mongodb (Community edition, por ejemplo)

2.Ir al directorio de instalación de Mongodb, y ejecutar por consola \bin\mongod (.exe) --> si todo va bien se ve un mensaje del estilo "waiting for connections on port 27017"

3.En la ruta del proyecto, ejecutar npm install

4.Ejecutar npm run start -> deberíamos ver un mensaje que indica que la api REST está levantada en el puerto 3000.

Con POSTMAN o con la herramienta que se prefiera ya podemos hacer POST (añadir -necesita 2 parámetros para insertar, brand y model), GET (listar) en  http://localhost:3000/cars, y GET/PUT/DELETE de un elemento en concreto con http://localhost:3000/cars/id

