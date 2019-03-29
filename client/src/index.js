import React from 'react';
import ReactDom from 'react-dom';
import RootRouter from './router/index';

// 目前是直接把RootRouter注入进去，其实可以再包一层，用来选择不同的layout文件，但目前就一种layout
ReactDom.render(
    <RootRouter />,
    document.getElementById('root')
);
