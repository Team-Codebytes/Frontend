import $ from 'jquery'


function createUser(user) {
    
  $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/commonuser/create', user)
	  .then(user => console.log(user)
	
	)
	.catch(function(err){
		console.log(err);
	})
}  
    
    
    
  


export { createUser }