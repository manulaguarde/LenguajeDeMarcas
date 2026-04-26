<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Mi Catálogo de Videojuegos</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
                    h1 { text-align: center; color: #333; }
                    table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                    th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
                    th { background-color: #2c3e50; color: white; }
                    tr:nth-child(even) { background-color: #f9f9f9; }
                    .top-nota { color: #d4af37; font-weight: bold; }
                    .formato { font-size: 0.8em; color: #7f8c8d; text-transform: uppercase; }
                </style>
            </head>
            <body>
                <h1>Mi Colección de Videojuegos</h1>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Desarrolladora</th>
                        <th>Año</th>
                        <th>Plataforma</th>
                        <th>Géneros</th>
                        <th>Nota</th>
                    </tr>
                    
                    <xsl:for-each select="catalogo/videojuego">
                        <xsl:sort select="titulo" order="ascending"/>
                        <tr>
                            <td>
                                <strong><xsl:value-of select="titulo"/></strong>
                                <br/><span class="formato">(<xsl:value-of select="@formato"/>)</span>
                            </td>
                            <td><xsl:value-of select="desarrolladora"/></td>
                            <td><xsl:value-of select="lanzamiento/@año"/></td>
                            <td><xsl:value-of select="plataforma"/></td>
                            <td>
                                <xsl:for-each select="genero">
                                    <xsl:value-of select="."/><xsl:if test="position() != last()">, </xsl:if>
                                </xsl:for-each>
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="nota &gt; 95">
                                        <span class="top-nota"><xsl:value-of select="nota"/> (TOP)</span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="nota"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>