
import React from 'react'
let n = 0
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            x:1
        }
    }
    onClick = () => {
        this.setState({
            x:this.state.x+1
        })
        this.setState({
            x:this.state.x+1
        })
        // 这里设置两次+1，结果还是2，因为x还是1进行下面操作
    }
    onClick2 = () => {
        this.setState((state) => ({
            x:state.x+1
        }))
        this.setState((state) =>({
            x:state.x+1
        }))
        // 这种函数形式，就可以实现两次+1
    }


    render() {
      return (
          <div className="App">
              <span>{n}</span>
              <Component/>
              <button onClick={this.onClick}>+1</button>
              <Old name={this.state.x} />
          </div>
      );
    }
}
const Component = () => {
  return (
      <div>
        <button
            onClick={() => {
              n+=1
              console.log(n)
            }}
        >+1</button>
      </div>
  )
}
class Old extends React.Component{
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('旧props');
        console.log(this.props);
        console.log('新的props');
        console.log(nextProps);
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default App

