document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function()
{
	calculateTip();
};

function calculateTip()
{
	var billAmt=document.getElementById("billamt").value;
	var numOfPeople=document.getElementById("peopleamt").value;
	var serviceQual=document.getElementById("serviceQual").value;
	
	if(billAmt==="" || serviceQual==0)
	{
		alert("Please enter values");
		return;
	}
	if(numOfPeople==="" || numOfPeople<=1)
	{
		numOfPeople=1;
		document.getElementById("each").style.display="none";	
	}
	else
	{
		document.getElementById("each").style.display="block";
	}
	
	var total=(billAmt*serviceQual)/numOfPeople;
	total=Math.round(total);
	document.getElementById("totaltip").style.display="block";
	console.log(total);
	document.getElementById("tip").innerHTML=total;
}

