function* getStop()
{
   yield "cmc";
   yield "mikael";
   yield "megenagna";
}

const station = document.getElementById("station");
document.querySelector("#nextStation").addEventListener('click',function(){
   let nextStop = getStop();

   if(nextStop.done){
      station.textContent = "final destination"'
   }
   else{
      station.textContent = nextStop.value;
   }
});