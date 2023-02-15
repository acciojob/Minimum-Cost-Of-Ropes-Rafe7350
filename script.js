//your code here
//your code here

function minCostToFormRope(a) {
	a.preventDefault();
	var inputElement = document.querySelector("input").value;
	var arr = inputElement.split(",");
	arr.sort(function (a, b) {
	  return a - b;
	});
  
	// we need to access first two element
	// add them & store in a variable res
  
	// add the res in array
	// increment cost by res
	var cost = 0;
	while (arr.length > 1) {
	  var res = Number(arr[0]) + Number(arr[1]);
	  arr.splice(0, 2);
  
	  arr.push(res);
	  cost += res;
  
	  arr.sort(function (a, b) {
		return a - b;
	  });
	}
  
	document.getElementById("result").textContent = cost;
  }
// =======

// //your code here
// function minCost(event) {
// 	event.preventDefault();
// 	var input = document.querySelector("input").value;
// 	var arr = input.split(",");
// 	var cost=0;
// 	while(arr.length > 1){
// 		arr.sort(function (a,b) {return a-b});
// 		var temp=Number(arr[0]) + Number(arr[1]);
// 		cost+=temp;
// 		arr.push(temp);
// 		arr.splice(0,2);
// 		arr.sort(function (a,b) {return a-b});
		
// 	}
// 	document.querySelector("div").textContent=cost;
// }
	
// >>>>>>> 95b4c8dde6b6414aa5efeea7bc2949eabe9e8652
