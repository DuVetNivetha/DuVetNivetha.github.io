
function halsningHemsida(){

 var datum = new Date();
 var timme = datum.getHours();
 // taggen där vi vill ha hälsningen
  var halsning = document.getElementById('halsningID');

  if (timme < 12){
    halsning.innerHTML = "God morgon!";
  }
  else{
    halsning.innerHTML = "God kväll!";
  }

}
