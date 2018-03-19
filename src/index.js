import Vue from 'vue';

 
function component() {
    var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML  ='hello webpack';
	btn.innerHTML = 'Click me and check the console';
	btn.onclick = function(){
		import(/* webpackChunkName: "my-chunk-name" */'./ba.js').then(function(obj){
			console.log(obj);
			obj.default.printMe();
		});
	};
    element.appendChild(btn);
    return element;
  }

document.body.appendChild(component());

new Vue({
	el:'#app',
	data:{
		name:'xianjian'
	}
});