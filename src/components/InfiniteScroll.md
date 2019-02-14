InfiniteScroll component example:

```js
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
loadMore = () => {
  alert('ads')
}
;<InfiniteScroll
  loadMore={() => state.loadFunc()}
  hasMore={true}
  isLoading={false}
>
  <ul style={{ height: 100, overflow: 'auto' }}>
    {state.cards.map(item => (
      <li key={item.dbf_id}>
        <p>{item.dbf_id}</p>
        <p>{item.name}</p>
        <p>{item.player_class}</p>
      </li>
    ))}
  </ul>
</InfiniteScroll>
```
