
// Imprimir documento

document.getElementById('imprimir').addEventListener('click', function() {
    
    if (confirm('¿Quieres imprimir este documento?')) {
    console.log("Imprimiendo Documento");
    var div = document.getElementById('pdf');
    
    imprimirElemento(div)}

   
  });

  function imprimirElemento(elemento) {
    var ventana = nv=window.open('', 'PRINT', 'height=800,width=1000');
    
    
    ventana.document.write('<link rel="stylesheet" href="styles.css">');
    ventana.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = function() {
      ventana.print();
      ventana.close();
    };
    return true;
  }

// Fecha de hoy

  var d=new Date();
  var month=new Array(12);
  month[0]='Enero';
  month[1]='Febrero';
  month[2]='Marzo';
  month[3]='Abril';
  month[4]='Mayo';
  month[5]='Junio';
  month[6]='Julio';
  month[7]='Agosto';
  month[8]='Septiembre';
  month[9]='Octubre';
  month[10]='Noviembre';
  month[11]='Diciembre';
  var todaysDate=+d.getDate()+' de '+month[d.getUTCMonth()]+' del '+d.getUTCFullYear();
document.getElementById('fechahoy').innerHTML= todaysDate;


// Tiempo dentro de la pagina

startday=new Date();
clockStart=startday.getTime();
function initStopwatch(){var myTime=new Date();
  return((myTime.getTime()-clockStart)/1000);}
function getSecs(){var tSecs=Math.round(initStopwatch());
  var iSecs=tSecs%60;
  var iMins=Math.round((tSecs-30)/60);
  var sSecs=""+((iSecs>9)?iSecs:"0"+iSecs);
  var sMins=""+((iMins>9)?iMins:"0"+iMins);
  document.getElementById('timespent').value=sMins+":"+sSecs;window.setTimeout('getSecs()',1000);}
window.onload = function(){
window.setTimeout('getSecs()',1);
}



  



  
