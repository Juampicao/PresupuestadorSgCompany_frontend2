comandos:
- npm run dev
- crear archivo .env y crear una VITE_API_URL=http://localhost:5000 (o la url del backend para vincular).

install: 
- npm i
- npm install dotenv --save


Agregar:
 1) Eliminar casilleros
 2) Precio de una, no calcular segun costo. 
 3) Default Values (empresa)
 4) Reiniciar Form, validar form.

Pasos instalar json server
1) npm i json-server
2) package.json => agregar script 
    "json": "json-server --watch db.json --port 4000"
3) Si quiero poner la carpeta en otro lado, modificar db.json por "src/data/data.json" ejemplo.
4) Manejar los pedidos por data.json/empresas o data.json/clientes

Dotenv
1) npm i dotenv.
2) Crear archivo .env.
3) Crear una variable.

Tareas:
1) Pasar los axios.get a una carpeta unica.
2) Useeffect cambia cuando se active una funcion.
3) package json se active dos funciones juntas. (json y npm run dev)


Frontend:
VITE_API_URL=http://localhost:5000
DATABASE__URL=http://localhost:4000

Backend
FRONTEND_URL=http://localhost:5173


