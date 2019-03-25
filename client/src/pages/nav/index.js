// webpack-dev-server --progress --profile --colors --hot --inline
import React, {Component} from 'react';
// import './index.less'

export default class Nav extends Component {
 constructor(props) {
    super(props);
    this.state = {
        navList:[
            {
                name:'文章管理',
                url:'',
                child:[
                    {
                        name:'文章列表',
                        url:'', 
                    },
                    {
                        name:'',
                        url:'', 
                    },
                ]
            },
            {
                name:'文章管理',
                url:'',
                child:[
                    {
                        name:'',
                        url:'', 
                    }
                ]
            },
            {
                name:'分类管理',
                url:'',
            },
        ]
    }
 }

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                       11111 
                    </li>
                    <li>
                       22222
                    </li>
                    <li>
                       33333
                    </li>
                </ul>
            </div>
        )
    }
}