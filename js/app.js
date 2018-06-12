
const message1 = <i>Hello React!!</i>;
const message2 = <strong>Hello Redux!!</strong>;

const flag = true;

function getMessage() {
  if (flag) {
    return message1;
  } else {
    return message2;
  }
}

ReactDOM.render(
  <div>
    <h1>{getMessage()}</h1>
    <p>React + Redux</p>
  </div>,
  document.getElementById('root')
);
