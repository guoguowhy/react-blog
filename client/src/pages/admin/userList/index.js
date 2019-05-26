import React, {Component} from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
//import './index.less'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
        columns:[
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
              },
              {
                title: '注册时间',
                dataIndex: 'regTime',
                key: 'regTime',
              },
              {
                title: '操作',
                dataIndex: 'act',
                key: 'address',
              },
        ],
        dataSource:[],
    }
 }

    render() {
        return (
            <div className="admin_user">
                <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
        ) 
    }
}