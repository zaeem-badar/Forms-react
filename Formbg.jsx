import './App.css'

import Firstname from './Firstname'
import Lastname from './Lastname'
import WorkEmail from './Workemail'
import Password from './Password'
import OrganizationName from './OrganizationName'
import OrganizationSize from './OrganizationSize'
import Industry from './Industry'
import Submitbtn from './Submitbtn'




function Formbg(){
    return(
        <>
        <div className='formbg'>
        <Firstname/> <Lastname/> 
            
            <WorkEmail/>
            <Password/>
            <OrganizationName/>
<OrganizationSize/>
<Industry/>
<Submitbtn/>

        </div>
        </>
    )
}
export default Formbg