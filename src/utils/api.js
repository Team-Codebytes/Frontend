import axios from 'axios'
import $ from 'jquery'


function createUser(data) {





    
   

let url ='https://unorganisedsectorbackbnd.herokuapp.com/API/commonuser/create'
  
    
  $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/commonuser/create', {
		FirstName: 'alpha',
		LastName: 'alpha',
		Email_id:'alpha',
		Password: 'alpha',
		Address: 'alpha',
		State:'alpha', 
		City: 'alpha',
		Pincode: 'alpha',
		Phone_no: 'alpha',
	})
	.then(user=>console.log(user)
	)
	.catch(function(err){
		console.log(err);
	})
}  
    
    
    
  


export { createUser }