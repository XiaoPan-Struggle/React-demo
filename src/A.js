//了类组件
// ES5 方式（过时）
import React from "react";

const A = React.createClass({
    render(){
        return (
            <div>hi</div>
        )
    }
})
export default A

// 由于ES5不支持class，才会有这种方式