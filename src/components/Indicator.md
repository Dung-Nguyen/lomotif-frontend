Loading component example:

```js
initialState = {
  loading: false
}
showIndicator = () => {
  setState({ loading: true })
  setTimeout(() => setState({ loading: false }), 2000)
}
;<div>
  <Button onClick={() => showIndicator()}>Click Me</Button>
  <Indicator loading={state.loading} />
</div>
```
