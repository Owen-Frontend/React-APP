import React, { Component } from 'react'
// import { Router, Route } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'
import { Upload, Button, Icon, PageHeader } from 'antd';
import 'antd/dist/antd.css';


// const history = createBrowserHistory()

const fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }, {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  
  const props = {
    action: 'http://jsonplaceholder.typicode.com/posts/',
    // action:'http://localhost:8028/',
    listType: 'picture',
    defaultFileList: [...fileList],
  };
  
  
  class Pic extends Component {

   render(){
    return(
        <div>
          <PageHeader onBack={() => this.props.history.goBack()} title="图片上传" subTitle="请上传您的图片" />
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
          
         </div>      
  ) }
      
}

export default Pic
  