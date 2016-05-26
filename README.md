isValidReduxReducer
====
Checks if the reducer is valid

## Installation
`npm install --save is-valid-redux-reducer`  

## Usage
```javascript
import isValidReduxReducer from 'is-valid-redux-reducer'

expect(isValidReduxReducer({})).to.be.false
expect(isValidReduxReducer((state, action) => state)).to.be.false
expect(isValidReduxReducer((state, action) => ({}))).to.be.false
expect(isValidReduxReducer((state = {}, action) => state)).to.be.true
```

## License
MIT
