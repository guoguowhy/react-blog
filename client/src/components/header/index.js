import React, {Component} from 'react';
import './index.less'

export default class Header extends Component {
 constructor(props) {
    super(props);
    this.state = {
        lists:[
            {
                name:'首页',
                url:'/'
            },
            {
                name:'vue',
                url:'/'
            },
            {
                name:'react',
                url:'/'
            },
            {
                name:'redux',
                url:'/'
            },
            {
                name:'webpack',
                url:'/'
            },
            {
                name:'typescript',
                url:'/'
            },
        ]
    }
 }


 render() {
    const { lists } = this.state;
    return (
            <div className="f-header">
                <div className="f-header-nav">
                    <a href="/" className="f-logo"></a>
                    {
                        lists.length>0?
                        <ul className="f-header-menu">
                            {
                                lists.map((item,index) => {
                                    return (
                                        <li key={`nav-${index}`}><a href={item.url}>{item.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                        :
                        null
                    }
                </div>
            </div>
        ) 
    }
}