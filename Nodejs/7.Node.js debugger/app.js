var time = 0;
setInterval(function(){
 time += 2;
   console.log('3 sec have passed');
 if (time > 7) {
    clearInterval(timer);
  }
}, 2000);

console.log(_dirname);
