# reactjs-tictactoe
Tres en Raya escrito en JavaScript con la librería React para conseguir mas eficiencia, refresca con mas velocidad los elementos DOM de la pagina.

El archivo reactTresRaya.html es el primer ejemplo que se puede probar offline y sin necesidad de instalar un tomcat.

Dentro de la carpeta modulado se encuentra el codigo del segundo ejemplo que es el mismo codigo que el del primer ejemplo pero
modularizado por componentes React, cada componente React esta definido en su respectiva hoja de codigo .jsx
Por ejemplo, el componente React Tablero esta definido en el archivo tablero.jsx
Para poder probar el segundo ejemplo(modularizado) hay que instalar un servidor apache tomcat:
1-Descargar tomcat de la pagina (download->core->tu version de Windows)
2-Descomprimir carpeta de tomcat
3-Copiar contenido de la carpeta modulado a la carpeta ...\webapps\docs\ (esta dentro de la carpeta del tomcat)
4-Añadir la siguiente linea de codigo en el archivo ...\webapps\ROOT\index.jsp , debajo de "<h3>Recommended Reading:</h3>"
  "<h4><a href="${tomcatDocUrl}reactTresRaya.html">Tres en Raya</a></h4>"
5-Añadir variables de entorno, equipo->clickDerecho->propiedades->configuracion avanzada del sistema->variables de entorno->nueva
  en mi caso:
  CATALINA_HOME: C:\Users\Mario1234\Desktop\apache-tomcat-9.0.6;
  CLASSPATH: C:\Users\Mario1234\Desktop\apache-tomcat-9.0.6\lib;
  JRE_HOME: C:\Program Files\Java\jdk1.8.0_151;     (el directorio con la maquina de java de desarrollo JDK8 en mi caso)
  editar la variable PATH añadirle al final: .... ;%CATALINA_HOME%\bin;
6-Ejecutar el C:\Users\Mario1234\Desktop\apache-tomcat-9.0.6\bin\startup.bat que en vuestro caso ...\bin\startup.bat
7-Abrir un navegador web y poner la URL http://localhost:8080/docs/reactTresRaya.html
