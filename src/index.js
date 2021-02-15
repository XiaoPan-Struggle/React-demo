import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import useUpdate from "./useUpdate";
import Context from './Context'
import User from './component/user'
import Books from "./component/books";
import './App.css'

/*useState思想*/
let _state = []
let index = 0
function myUseState(initialValue) {
    const currentIndex = index
    index += 1
    _state[currentIndex] = _state[currentIndex] || initialValue
    const setState = newState => {
        _state[currentIndex] = newState;
        // render()
    }
    return [_state[currentIndex],setState]
}

/*useReducer*/
const initFormData = {
    name:"",
    age:18,
    sex:"男"
}
function reducer(state,action){
    switch (action.type) {
        case "patch":
            return {...state,...action.formData}
        case "reset":
            return initFormData
        default:
            throw new Error()
    }
}


// reducer+content 代替redux
const store = {
    user:null,
    books:null
}
function reducerC(state, action) {
    switch (action.type) {
        case "setUser":
            return {...state,user:action.user}
        case "setBooks":
            return {...state,books:action.books}
        default:
            throw new Error()
    }
}

function App() {
    const [formData,dispatch] = useReducer(reducer,initFormData)
    const [state,dispatchC] = useReducer(reducerC,store)
    return (
        <Context.Provider value={{state,dispatchC}}>
            <User/>
            <Books/>
            <div className="App">
                <div>
                    <form>
                        <div>
                            <label>
                                姓名：
                                <input type="text" value={formData.name}
                                       onChange={
                                           e => dispatch({type:"patch",formData:{name:e.target.value}})
                                       }
                                />
                            </label>
                        </div>
                    </form>
                </div>
                baba
                <Son AppData='App的data' />
            </div>
        </Context.Provider>
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
    const [obj,setObj] = React.useState({name:'pkc',age:21})
    const [x,setX] = myUseState(0)
    const onClick = () => {
        setN(n+1)
        setX(x+1)
        setObj({
            ...obj,
            name:'yy'
        })
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
            自定义usestate:{x}
            <button onClick={onClick}>+1</button>
            对象：{obj.name}{obj.age}
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




