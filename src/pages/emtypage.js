import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
export function Firstpage() {
    const history=useHistory();
    const token=sessionStorage.getItem('token');
    if(token){
     history.push('/dashboard')
    }else{
        history.push('/login');
    }
    return (
        <div>
            
        
        </div>
    )
}