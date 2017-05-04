import { h, render } from "preact";

const app = (
  <div id="foo">
    <span>Hello, world!</span>
    <button onClick={e => alert("hi!")}>Click Me</button>
  </div>
);

global.bootApp = () => {
  const domRoot = document.getElementById("app");
  render(app, domRoot);
};
