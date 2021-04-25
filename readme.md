npm install express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
npm install -D nodemon concurrently

body-parser-Чтобы обрабатывать запрос HTTP POST в Экспресс .js версии 4 и выше, вам необходимо установить модуль промежуточного программного обеспечения с именем body-parser. body-parser извлекает всю часть тела входящего потока запросов и предоставляет его на req.body. Среднее программное обеспечение ранее было частью Express.js, но теперь вы должны установить его отдельно. Этот модуль body-parser анализирует данные JSON, буфера, строки и URL-адреса, переданные с использованием запроса HTTP POST. Установите body-parser с помощью NPM, как показано ниже.

populate()-?
const profile = await (await Profile.findOne({ user: req.user.id })).populated('user', ['name', 'avatar'])


**REDUX**

1. создаем файл store.js
импортируем :
<import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

<const initialState={}

<const middleware=[thunk]

<const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

<export default store



2. в App.js импортируем
import {Provider} from 'react-redux'
import store from'./store'
оборачиваем все в Provider

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment >
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

3. создаем папку reducers/index.js 