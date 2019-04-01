import { Radio, PageHeader } from 'antd';
import React, { Component } from 'react'
import 'antd/dist/antd.css'
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';

// let users = []
const RadioGroup = Radio.Group;

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{
              "id":1,
              "question": "您的年龄范围",
              "radio":["20-30岁","30-40岁","40-50岁","50岁以上"]
          },
          {
              "id":2,
              "question": "您的工作年限",
              "radio":["1~3年","3-5年","5~10年","10年以上"]
          },
          {
              "id":3,
              "question": "这是一个问题？",
              "radio":["前天","昨天","今天","明天"]
          },
          {
              "id":4,
              "question": "这又是一个问题",
              "radio":["答案1","答案2","答案3","答案4"]
          },
          {
              "id":5,
              "question": "这还是一个问题",
              "radio":["不知道","知道","不想知道","为什么"]
          },
          {
              "id":6,
              "question": "这又又是一个问题",
              "radio":["东","南","西","北"]
          },
          {
              "id":7,
              "question": "这又又又是一个问题",
              "radio":["上","下","左","右"]
          }
          ] ,
            value:[1,2,3,4,5,6,7]}
    }
    
    // //方法
    // componentWillMount() {
    //     fetch('/static/users.json').then(res => {
    //         return res.json()
    //     }).then(data => {
    //         this.setState({users:data})
    //     }) 
    // }

  onChange = (e, id) => {
    // console.log('radio checked', e.target.value);
    let value = this.state.value
    value[id-1] =  e.target.value
    console.log(value, id)
    this.setState({
      value: value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '40px',
    };
    console.log(this.state.users)
    return(
      <div><PageHeader onBack={() => this.props.history.goBack()} title="填表" subTitle="请在下列题目选择" />
      <div>
      {this.state.users.map((user) => { 
        return (<li key={user.id}>
     <span className='ques'>{user.id}.{user.question}></span>><br/>
   <RadioGroup name={user.id} onChange={(e)=>this.onChange(e, user.id)} value={this.state.value[user.id-1]}>
     <Radio style={radioStyle} name={user.id} value={user.radio[0]}>{user.radio[0]}</Radio>
     <Radio style={radioStyle} name={user.id} value={user.radio[1]}>{user.radio[1]}</Radio>
     <Radio style={radioStyle} name={user.id} value={user.radio[2]}>{user.radio[2]}</Radio>
     <Radio style={radioStyle} name={user.id} value={user.radio[3]}>{user.radio[3]}
       {/* More...
       {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null} */}
     </Radio>
   </RadioGroup></li>
    )})}
  </div>
  </div>
    )
  }
}

export default Form