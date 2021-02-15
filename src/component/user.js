import React from 'react';
import Context from "../Context";
import ajax from "../ajax";

function User() {
    const {state,dispatchC} = React.useContext(Context)
    React.useEffect(() => {
        ajax("/user").then(user => {
            dispatchC({type:'setUser',user:user})
        })
    },[])
    return(
        <div>
            <h1>个人信息</h1>
            <div>姓名：{state.user ? state.user.name:""}</div>
        </div>
    )
}
export default User