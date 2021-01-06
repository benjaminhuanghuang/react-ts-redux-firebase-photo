
Install
```
  npm i  redux react-redux @types/react-redux redux-devtools-extension
```   

Redux 7.1 (2019)开始提供Hooks版本

在新版的Redux中，reducer和store的使用方式和以前相同
```
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);


<Provider store={store}>
    <Main />
</Provider>,

```

## useSelector
取出component 需要的state
之前的Redux需要Connect 在 Component中取得state
```
import { useSelector } from 'react-redux';

const todoList = useSelector(state => state.todoList);
```

## useDispatch
```
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const addTodoList = () => {
  dispatch({
    type: 'ADD_TODOLIST',
    payload: { listName, },
  });
};

```





