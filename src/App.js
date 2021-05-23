// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import AddItemContainer from './components/TodoItems/AddItemContainer'
import TodoItems from "./components/TodoItems/TodoItems";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            showContent: false,
            todoItems: []
        }
    }


    addHandler = () => {
        let items = [...this.state.todoItems]
        if(!this.state.inputValue) {
            alert("Please enter something!");
            return;
        }

        items.push({title:this.state.inputValue, completed:false});

        this.setState({
            showContent: true,
            todoItems: items,
            inputValue:''
        });


    }
    onChangeAction = (event) => {
        console.log("VAL", event.target.value);
        if (event.target.value == "complete-all"){
            let newItems = [...this.state.todoItems];
            newItems.map(item => {
                return item.completed = true;
            })

            this.setState({
                todoItems: newItems
            });
        }
        if (event.target.value == "unselect-all"){
            let newItems = [...this.state.todoItems];
            newItems.map(item => {
                return item.completed = false;
            })

            this.setState({
                todoItems: newItems
            });
        }
        if (event.target.value == "remove-completed"){
            let newItems = [...this.state.todoItems];
            let res = newItems.filter(item => item.completed == false);
            this.setState({
                todoItems: res
            });
        }
        if (event.target.value == "remove-all"){
            this.setState({
                todoItems: []
            });
        }
    }
    onChangeHandler = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }
    onRemoveItem = (index) => {

        console.log("INDEX",index)
        let newItems = [...this.state.todoItems]
        newItems.splice(index, 1);
        this.setState({
            todoItems: newItems
        });
    }
    onComplete = (index) => {
        console.log("COMPLETED", index);
        let newItems = [...this.state.todoItems];
        newItems.map((item, itemIndex) => {

            if(itemIndex === index ) {
                // item.completed = false;
                if (!item.completed){
                    item.completed = true;
                }else{
                    item.completed = false;
                }

            }
            return item;
        });

        console.log("FINAL ITEMS", newItems);
        this.setState({
            todoItems: newItems
        });
    }
    render() {
        return (
            <div className="App">
                <header>
                    <h1 style={{fontStyle:'italic',marginTop:'2rem'}}>Todo APP</h1>
                    <div style={{marginTop:'2rem'}}>
                        <AddItemContainer
                            inputType="email"
                            inputValue={this.state.inputValue}
                            inputOnChange={this.onChangeHandler.bind(this)}

                            ButtonOnClick={this.addHandler.bind(this)}
                        />
                        <TodoItems
                            items={this.state.todoItems}
                            onSelectAction={this.onChangeAction}
                            removeBtnClick={this.onRemoveItem.bind(this)}
                            makeCompleted={this.onComplete.bind(this)}
                        />
                    </div>
                </header>
            </div>
        )


    }


}

export default App;
