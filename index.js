
// var result="Enter opertaion:";
// var stored=0
// $(".ans").text(result);


// $(".item").click(function(){

    

// result=this.innerHTML;
// //  console.log(result);
//  $(".ans").text(result);
//    stored=result;
//    console.log(result)
// })

// const ansDiv = document.querySelector(".ans");

// const container = document.querySelectorAll(".item");

// let query = "";

// container.forEach((item) => {
  
//   item.addEventListener("click", () => {
//     if (item.innerHTML == "=") {
//       calculate(query)
//       query = ""
//       return;
//     }

//     if (item.innerHTML == "C") {
//       query = ""
//       ansDiv.innerHTML = query
//       return
//     }

//     if (item.innerHTML == "%") {
//       query = "/100"
//       ansDiv.innerHTML = query
//       return
//     }

//     query += item.innerHTML;
//     ansDiv.innerHTML = query
//   })
// })



// function calculate(query) {
//   const ans = eval(query);
//   ansDiv.innerHTML = ans;
// }



let query="";

$(".item").click(function(){

  let pressed=this.innerHTML;

  if(pressed =="C"){
    query="";
    $(".ans").text(query);
    return;
  }
  if(pressed== "=")
  {
    calculate(query);
   return;
  }
  if(pressed=="%")
  {
    query+="%";
    $(".ans").text(query);
    query+="/";
   
      return;

  }

  query += pressed;
  $(".ans").text(query);


})


function calculate(query)
{
  
  const anss=eval(query);
  $(".ans").text(anss);
}