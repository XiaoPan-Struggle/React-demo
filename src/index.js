import React from 'react';
import ReactDOM from 'react-dom';
import useUpdate from "./useUpdate";
import './App.css'

function App() {
    return (
        <div className="App">
            baba
            <Son AppData='App的data' />
        </div>
    );
}
class Son extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            n:0,
            str:'123',
            b:undefined,
            width:undefined
        }
        this.divRef = React.createRef()
    }
    render() {
        return (
            <div ref={this.divRef} className="son">
                <div>width:{this.state.width}</div>
                儿子：n:{this.state.n}
                孙子：b:{this.state.b}
                <div>{this.props.AppData}</div>
                <button onClick={() => this.addN()}>+1</button>
                <Grandson x={this.x.bind(this)} sonData={this.state.n} />
            </div>
        )
    }
    componentDidMount() {
        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }

    addN = () => {
        this.setState({n:this.state.n+1})
    }
    add(){
        //this.setState({n:this.state.n+=1})  setState是异步更新DOM
        this.setState((state) => {
            console.log(state);
            return{n:state.n+1}
        })
        //setState会等一会改变state
    }
    x(val){
        this.setState(() => {
            return {b:val}
        })
    }
}
let Grandson = (props) => {
    const [n,setN] = React.useState(0)
    const onClick = () => {
        setN(n+1)
        props.x(n+1)
    }

    useUpdate(() => {
        console.log('变了');
    },n)
    // useEffect(() => {
    //     console.log('use');
    // },[])
    return (
        <div className="grandson">
            孙子：n:{n}
            <div>SonData:{props.sonData}</div>
            <button onClick={onClick}>+1</button>
        </div>
    )
    // setN永远不会改变n，会生成一个新的n
}
console.dir(React.useState);



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);




