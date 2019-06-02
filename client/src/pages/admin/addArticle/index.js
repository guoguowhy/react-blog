import React, {Component} from 'react'
import { Input,Select,Divider,Icon,Tag } from 'antd'
import 'antd/dist/antd.css'
//import './index.less'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
        
    }
 }

    render() {
        return (
            <div className="admin_article">
                <Input placeholder="标题" />,
                <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ padding: '8px', cursor: 'pointer' }}>
                        <Icon type="plus" /> Add item
                        </div>
                    </div>
                    )}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br/>
                <Tag>Tag 1</Tag>
                <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
                </Tag>
                <Tag closable>
                Tag 2
                </Tag>
                <Tag closable>
                Prevent Default
                </Tag>
            </div>
        ) 
    }
}