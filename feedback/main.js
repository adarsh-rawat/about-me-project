var x = document.querySelector('#btn1');
x.addEventListener('click', checkvalues);
function checkvalues(){
	console.log('called.');
	//sal = salutation, 
	var sal = document.getElementById('salutation');
	if(sal.value == 'Select'){
		alert('Please pick appropriate salutation');
		return;
	}
	var fname = document.getElementById('firstName');
	var lname = document.getElementById('lastName');
	if(hasNumber(fname.value) || hasNumber(lname.value)){
		alert('First or Last Name is invalid, Please make corrections.');
		return;
	}
	var comment= document.getElementById('comment');
	if(!sal.value.length || !fname.value.length || !lname.value.length || !comment.value.length){
		alert('some value is empty, please fill it.');
		return;
	}
	makeCard(sal, fname, lname, comment);
}
function makeCard(sal, fname, lname, comment) {
	var n = document.createElement('div');
	n.className = 'card';
	var newhead = document.createElement('div');
	var newcontent = document.createElement('div');
	newhead.className = 'head';
	newhead.innerHTML = sal.value + ' ' + fname.value + ' ' + lname.value+ ' says...';
	newcontent.className = 'content';
	newcontent.innerHTML = comment.value;
	n.appendChild(newhead);
	n.appendChild(newcontent);
	document.querySelector('.heading').after(n);
	n.classList.add('fade');
	if(document.getElementsByClassName('card').length == 5){
		document.getElementsByClassName('card')[4].remove();
	}
	setTimeout(()=>n.classList.remove('fade'), 700);
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
