var c=console.log;
var x=document.getElementById('amtBox');
var withdraw=document.getElementById('Withdraw');
var deposit=document.getElementById('deposit');
var miniStatement=document.getElementById('miniStatement');
var res=document.getElementById('res');
var myTab=document.getElementById('tab');
var tbd=document.getElementById('tbody');
var initialAmount=10000;
var finalAmount;
var messages=[];
var d = new Date();

withdraw.addEventListener('click',withdrawFunc);
deposit.addEventListener('click',depositFunc);
miniStatement.addEventListener('click',miniStatementFunc);

function withdrawFunc(e){
	// e.preventDefault();
	if(x.value !== ''){
		var input1=Number(x.value);
		c(input1);
		if(isNaN(input1)){
			alert('Please enter a number');
		}
		else{
			var objArray=localStorage.getItem('localData') || [{"amt":10000,"msg":"This is your initial balance:10000","date":d}];
			if(localStorage.getItem('localData')){
				objArray=JSON.parse(objArray);
				finalAmount=objArray[objArray.length-1].amt-input1;
			}
			else{
				finalAmount=objArray[0].amt-input1;
			}
			c(objArray);
			// finalAmount=objArray[objArray.length-1].amt-input1;
			// if(objArray[0]){
			// 	finalAmount=objArray[0].amt+input1;
			// }
			// else{
			// 	finalAmount=objArray[objArray.length-1].amt+input1;
			// }
			c(finalAmount);
			var myDate=new Date();
			var myData={
				amt:finalAmount,
				msg:'Rs.'+input1 +' withdrawn successfully. Your Current balance is Rs.'+ finalAmount,
				date:myDate

			}
			objArray.push(myData);
			localStorage.setItem('localData',JSON.stringify(objArray));
			
			var demo=localStorage.getItem('localData');
			c(demo);
			messages.push(`${input1} withdrawn successfully. Your Current balance is  ${finalAmount} on date ${myDate}`);
			c(input1 +' Withdrawn successfully. Your Current balance is '+ finalAmount);
			res.innerHTML= 'Rs.'+input1 +' Withdrawn successfully. Your Current balance is Rs.'+ finalAmount+ 'on date' +myDate;
			res.classList.add('show');
			setTimeout(function(){
				res.classList.remove('show');
			},3000);
		}
	}
	else{
		alert('Please enter an amount to withdraw');
	}
}
function depositFunc(e){
	// e.preventDefault();
	if(x.value !== ''){
		var input1=Number(x.value);
		c(input1);
		if(isNaN(input1)){
			alert('Please enter a number');
		}
		else{
			var objArray=localStorage.getItem('localData') || [{"amt":10000,"msg":"This is your initial balance:10000","date":d}];
			if(localStorage.getItem('localData')){
				objArray=JSON.parse(objArray);
				finalAmount=objArray[objArray.length-1].amt+input1;
			}
			else{
				finalAmount=objArray[0].amt+input1;
			}
			c(objArray);
			var myDate=new Date();
			c(finalAmount);
			var myData={
				amt:finalAmount,
				msg:'Rs.'+input1 +' Deposited successfully. Your Current balance is Rs.'+ finalAmount,
				date:myDate
			}
			objArray.push(myData);
			localStorage.setItem('localData',JSON.stringify(objArray));
			// e.target.reset;
			var demo=localStorage.getItem('localData');
			c(demo);
			messages.push(`${input1} deposited successfully. Your Current balance is  ${finalAmount} on date ${myDate}`);
			c(input1 +' Deposited successfully. Your Current balance is '+ finalAmount);
			res.innerHTML= 'Rs.'+input1 +' Deposited successfully. Your Current balance is Rs.'+ finalAmount+ 'on date' +myDate;
			c(messages);
			res.classList.add('show');
			setTimeout(function(){
				res.classList.remove('show');
			},3000);
		}
	}
	else{
		alert('Please enter an amount to deposit');
	}
}

function miniStatementFunc(e){
	var objArray=localStorage.getItem('localData') || [{"amt":10000,"msg":"This is your initial balance:10000","date":d}];
			if(localStorage.getItem('localData')){
				objArray=JSON.parse(objArray);
			}
			var messages1='';
			// c(objArray);
			for(var i=0;i<objArray.length;i++){
				messages1+=`<tr><td>${objArray[i].amt}</td><td>${objArray[i].msg}</td>
				<td>${objArray[i].date}</td></tr>`;
			}
			// location.href = "../statement.html";
			if(myTab.classList.contains('show')){
				myTab.classList.remove('show');
			}
			else{
			myTab.classList.add('show');
			}
			tbd.innerHTML=messages1;
}

