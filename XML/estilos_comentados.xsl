<?xml version="1.0" encoding="UTF-8"?>
<!-- Declaración estándar del documento XML -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!--
Define que este archivo es una hoja de transformación XSLT
version="1.0" → versión del estándar XSLT
xmlns:xsl → espacio de nombres obligatorio para usar etiquetas XSL
-->

    <xsl:template match="/">
    <!--
    Template principal:
    match="/" significa que se aplica al nodo raíz del XML
    Es el punto de entrada de la transformación
    -->

        <html>
        <!-- A partir de aquí generamos HTML -->

            <head>
                <title>Mi Catálogo de Videojuegos</title>
                <!-- Título de la pestaña del navegador -->

                <style>
                    /* CSS para dar estilo al HTML generado */

                    body {
                        font-family: Arial, sans-serif; /* Fuente */
                        background-color: #f4f4f4; /* Fondo gris claro */
                        padding: 20px; /* Espaciado interno */
                    }

                    h1 {
                        text-align: center; /* Centrar título */
                        color: #333; /* Color oscuro */
                    }

                    table {
                        width: 100%; /* Ocupa todo el ancho */
                        border-collapse: collapse; /* Une bordes */
                        background: white; /* Fondo blanco */
                        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Sombra */
                    }

                    th, td {
                        padding: 12px; /* Espaciado interno */
                        border: 1px solid #ddd; /* Bordes suaves */
                        text-align: left; /* Alineación */
                    }

                    th {
                        background-color: #2c3e50; /* Fondo oscuro */
                        color: white; /* Texto blanco */
                    }

                    tr:nth-child(even) {
                        background-color: #f9f9f9; /* Filas alternas */
                    }

                    .top-nota {
                        color: #d4af37; /* Dorado */
                        font-weight: bold; /* Negrita */
                    }

                    .formato {
                        font-size: 0.8em; /* Tamaño pequeño */
                        color: #7f8c8d; /* Gris */
                        text-transform: uppercase; /* MAYÚSCULAS */
                    }
                </style>
            </head>

            <body>
                <h1>Mi Colección de Videojuegos</h1>
                <!-- Título visible en la página -->

                <table>
                    <!-- Tabla que mostrará los datos del XML -->

                    <tr>
                        <!-- Cabecera de la tabla -->
                        <th>Título</th>
                        <th>Desarrolladora</th>
                        <th>Año</th>
                        <th>Plataforma</th>
                        <th>Géneros</th>
                        <th>Nota</th>
                    </tr>

                    <xsl:for-each select="catalogo/videojuego">
                    <!--
                    Bucle que recorre todos los elementos <videojuego>
                    dentro del elemento raíz <catalogo>
                    -->

                        <xsl:sort select="titulo" order="ascending"/>
                        <!--
                        Ordena los videojuegos por el contenido de <titulo>
                        order="ascending" → orden alfabético A-Z
                        -->

                        <tr>
                            <!-- Cada videojuego será una fila -->

                            <td>
                                <strong>
                                    <xsl:value-of select="titulo"/>
                                </strong>
                                <!--
                                Muestra el contenido del elemento <titulo>
                                -->

                                <br/>

                                <span class="formato">
                                    (<xsl:value-of select="@formato"/>)
                                </span>
                                <!--
                                @formato → accede al atributo formato del videojuego
                                Se muestra entre paréntesis
                                -->
                            </td>

                            <td>
                                <xsl:value-of select="desarrolladora"/>
                            </td>
                            <!-- Muestra la desarrolladora -->

                            <td>
                                <xsl:value-of select="lanzamiento/@año"/>
                            </td>
                            <!--
                            Accede al atributo año dentro del elemento lanzamiento
                            -->

                            <td>
                                <xsl:value-of select="plataforma"/>
                            </td>
                            <!-- Muestra la plataforma -->

                            <td>
                                <xsl:for-each select="genero">
                                <!--
                                Bucle interno:
                                recorre todos los géneros del videojuego
                                -->

                                    <xsl:value-of select="."/>
                                    <!--
                                    "." significa "el valor del nodo actual"
                                    (es decir, el texto del género)
                                    -->

                                    <xsl:if test="position() != last()">
                                        , 
                                    </xsl:if>
                                    <!--
                                    position() → posición actual en el bucle
                                    last() → última posición

                                    Si NO es el último → añade coma
                                    Evita coma final
                                    -->
                                </xsl:for-each>
                            </td>

                            <td>
                                <xsl:choose>
                                <!--
                                Estructura condicional tipo if/else
                                -->

                                    <xsl:when test="nota &gt; 95">
                                    <!--
                                    Si la nota es mayor que 95
                                    (&gt; es ">" escapado en XML)
                                    -->

                                        <span class="top-nota">
                                            <xsl:value-of select="nota"/> (TOP)
                                        </span>
                                        <!--
                                        Aplica estilo especial y añade etiqueta TOP
                                        -->

                                    </xsl:when>

                                    <xsl:otherwise>
                                        <xsl:value-of select="nota"/>
                                    </xsl:otherwise>
                                    <!--
                                    Si no cumple la condición → muestra normal
                                    -->
                                </xsl:choose>
                            </td>

                        </tr>

                    </xsl:for-each>
                    <!-- Fin del bucle principal -->

                </table>

            </body>
        </html>

    </xsl:template>
    <!-- Fin del template principal -->

</xsl:stylesheet>
<!-- Fin del documento XSLT -->