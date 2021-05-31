import $ from 'jquery'

//register for common user
function createUser(user) {
    
  $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/commonuser/create', user)
	  .then(user => console.log(user)
	
	)
	.catch(function(err){
		console.log(err);
	})
}

//register for enterprise user
function createEnterpriseUser(user) {
    
  $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/enterpriceuser/create', user)
	  .then(user => console.log(user)
	
	)
	.catch(function(err){
		console.log(err);
	})
}  
    
    

    
    
  


export { createUser, createEnterpriseUser }