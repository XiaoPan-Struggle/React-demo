
import React from 'react'
let n = 0
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            x:1,
            width:undefined
        }
        this.divRef = React.createRef()
    }
    // onClick = () => {
    //     this.setState({
    //         x:this.state.x+1
    //     })
    //     this.setState({
    //         x:this.state.x+1
    //     })
    //     // 这里设置两次+1，结果还是2，因为x还是1进行下面操作
    // }
    onClick2 = () => {
        this.setState((state) => ({
            x:state.x+1
        }))
        this.setState((state) =>({
            x:state.x+1
        }))
        // 这种函数形式，就可以实现两次+1
    }
    componentDidMount() {
        const div =this.divRef.current
        const  {width} = div.getBoundingClientRect();
        this.setState({width})
    }

    render() {
      return (
          <div className="App">
              <span>宽度：{this.state.width}</span>
              <span ref={this.divRef}>{n}</span>
              <Component/>
              <button onClick={this.onClick2}>+1</button>
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

