
// ************* JavaScript Promise ***************
/* 
    Syntext of JavaScript Promise 

   let future =  new Promise((resolve, reject) => {reslove() or reject() base on condition})

   future.then((value)=>{}, (err)=>{});

*/


let myPromise = new Promise((resolve, reject)=>{
    // "Producing Code" (May take some time)
   
       myResolve(); // when successful
        myReject();  // when error
     });
     
      // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);
  

// ********* Example After some time leter it will resove then we get value ***************

let future = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  future.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });



  //********** Get file data from Server ********
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
 