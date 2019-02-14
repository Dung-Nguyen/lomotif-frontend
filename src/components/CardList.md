CardList component example:

```js
const Provider = require('react-redux').Provider
const store = require('../redux/store').default

initialState = {
  cards: [
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
;<Provider store={store}>
  <CardList cards={state.cards} />
</Provider>
```
