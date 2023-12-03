// Basic Helllo World Program Using React js

const parent=React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},
[React.createElement('h1',{},'I am the h1 tag'),
React.createElement('h2',{},'I am the h2 tag')]));

// created h1 tag
const heading = React.createElement("h1", {}, "Hello React");
// created Root where all things render]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// *********************************-------------------*********************************-----------------**