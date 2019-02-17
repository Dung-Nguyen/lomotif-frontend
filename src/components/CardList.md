CardList component example:

```js
const Provider = require('react-redux').Provider
const store = require('../redux/store').default
;<Provider store={store}>
  <CardList />
</Provider>
```
