import React, {Component} from 'react'
// import {Router, Route} from 'react-router'
import {Link} from 'react-router-dom'
import './index.css'

// import Form from '../form/index'
// import Pic from '../picture/index'
// import Sign from '../sign/index'


class Home extends Component{
    
    render(){
        return(
                <div> 
                    <div className='Lo'>
                        <img alt='致同' src={require('./logo.png')}/>
                        </div>           
                    <Link to='/form' className='Uword'>
                        <div className="Form" >
                          <font face="Microsoft YaHei"  size='7'>内容填写</font>
                        </div>
                    </Link>
                    <Link to='/picture' className='Uword'>
                        <div className="Pic">
                        <font face="Microsoft YaHei"  size='7'>拍照上传</font>
                        </div>
                    </Link>
                    <Link to='/sign' className='Uword'>
                        <div className="Sign">
                        <font face="Microsoft YaHei"  size='7'>签字确认</font>
                        </div>
                    </Link>
                </div>    
               
        )
        
    }
}

export default Home