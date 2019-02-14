InfiniteScroll component example:

```js
const Provider = require('react-redux').Provider
const store = require('../redux/store').default

initialState = {
  res: {
    count: 30,
    results: [
      {
        dbf_id: '50371',
        name: 'Absolutely Mad!',
        player_class: 'Priest'
      },
      {
        dbf_id: '50378',
        name: 'Avenger',
        player_class: 'Neutral'
      }
    ]
  }
}
loadMore = () => {
  alert('ads')
}
;<Provider store={store}>
  <InfiniteScroll
    loadMore={() => state.loadFunc()}
    hasMore={true}
    isLoading={false}
  >
    <CardList cards={state.res.results} />
  </InfiniteScroll>
</Provider>
```
