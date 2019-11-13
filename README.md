La idea de este proyecto es aprender distintas tecnologias. Entre ellas se encuentran, React, Vue y Angular en el frontend. Express, Adonis y Nest en el backend. Tambien se incluira MySql.

El proyecto sera un managment para locales gastronomicos. Especificamente, restaurantes.

Cada local tendra su respectivo login.

Se podra mantener un control del stock del local. Angular / nest
Se podra mantener un control de los productos que vende el local. Angular / nest
Se podra mantener un control de los empleados del local. Angular / nest
Se podra ver las mesas ocupadas. Abrir y cerrar mesas y ver las abiertas. React / express
Se podran ver estadisticas diarias/semanales/mensuales. Vue / adonis
Se podran ver rankings de top productos vendidos. Vue / adonis

Arquitectura de la BD

-- Bases del local
    - Empleados
    - Stock
    - Productos
    - Mesas -- Redis para cache?
    - Productos X Mesa

-- Bases del sistema
    - Locales