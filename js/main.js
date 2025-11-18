// Definición de la proyección TMQ usada en Quito
proj4.defs("TMQ",
    "+proj=tmerc +lat_0=0 +lon_0=-78.5 " +
    "+k=1.000458 +x_0=500000 +y_0=10000000 " +
    "+datum=WGS84 +units=m +no_defs"
);

function convertir() {
    let e = document.getElementById("easting").value.trim();
    let n = document.getElementById("northing").value.trim();

    // Cambiar coma por punto
    e = e.replace(",", ".");
    n = n.replace(",", ".");

    if (isNaN(e) || isNaN(n) || e === "" || n === "") {
        document.getElementById("resultado").innerHTML = "❌ Ingresa números válidos.";
        return;
    }

    // Convertir usando Proj4JS
    let [lon, lat] = proj4("TMQ", "WGS84", [parseFloat(e), parseFloat(n)]);

    document.getElementById("resultado").innerHTML =
        document.getElementById("resultado").innerHTML =
        "Latitud: " + lat.toFixed(8) + "<br>" +
        "Longitud: " + lon.toFixed(8)+ "<br>" +
		"<a href='https://www.google.com/maps/search/"+lat.toFixed(8)+","+lon.toFixed(8)+"'>Ver Mapa</a>";
}
