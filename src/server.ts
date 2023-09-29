import { response } from "express";
import { getArchive} from "./archive/archive";
import error from 'console';


getArchive('oi')
.then((response)=>{
    console.log(response);
})
.catch(error=>console.log(error))