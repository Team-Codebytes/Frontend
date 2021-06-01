import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom'


const ProtectedRoute = (props) => {
    const history = useHistory();
        let Comp = props.comp



    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/')
        
    }
})
    return (
        <div>
            <Comp/>
        </div>
     );
}
 
export default ProtectedRoute;