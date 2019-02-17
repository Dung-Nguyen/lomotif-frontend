InfiniteScroll component example:

```js
const Provider = require('react-redux').Provider
const store = require('../redux/store').default
;<Provider store={store}>
  <InfiniteScroll
    loadMore={() => state.loadFunc()}
    hasMore={true}
    isLoading={false}
  >
    <CardList />
  </InfiniteScroll>
</Provider>
```
