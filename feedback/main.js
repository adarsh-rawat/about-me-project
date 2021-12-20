var x = document.querySelector('#btn1');
x.addEventListener('click', checkvalues);
function checkvalues(){
	console.log('validation started...');
	//sal = salutation,
	var sal;
	if (document.getElementsByName('salutation')[0].checked) {
		sal = 'Mr.'
	}
	else if (document.getElementsByName('salutation')[1].checked) {
		sal = 'Miss.'
	}
	else{
		alert('Please select appropriate Salutation.');
		return;
	}
	document.getElementsByName('salutation')[0].checked
	var fname = document.getElementById('firstName');
	var lname = document.getElementById('lastName');
	if(hasNumber(fname.value) || hasNumber(lname.value)){
		alert('First or Last Name is invalid, Please make corrections.');
		return;
	}
	var comment= document.getElementById('comment');
	if(!fname.value.length || !comment.value.length){
		alert('Some value is empty, please fill it.');
		return;
	}
	makeCard(sal, fname, lname, comment);
}
function makeCard(sal, fname, lname, comment) {
	console.log('Making Comment card...');
	var n = document.createElement('div');
	n.className = 'card';
	var newhead = document.createElement('div');
	var newcontent = document.createElement('div');
	newhead.className = 'head';
	newhead.innerHTML = sal + ' ' + fname.value + ' ' + lname.value+ ' says...';
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
	document.querySelector('form').reset();
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
