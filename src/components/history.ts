import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

history.listen((location, action) => {
  console.log(action, location.hash, location.state);
});

export {history};
