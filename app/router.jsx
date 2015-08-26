
// routes = {
  // <Route handler={Main} name="rewards" path="/">
//     <Route handler={all} name="all" path="/all"></Route>
//     <Route handler={redeemed} name="redeemed" path="/redeemed"></Route>
//     <Route handler={scheudled} name="scheudled" path="/scheudled"></Route>
//     <Route handler={new} name="new" path="/new"></Route>
//     <Route handler={completed} name="completed" path="/completed"></Route>
  // </Route>
// }
//
// Router.run(routes, function(Handler){
//   React.render(<Handler/>, document.getElementById('main'))
// })


// Create the parent App component
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    return (
      <div>{this.context.router.getCurrentPath()}</div>
    );
  }
});

// Create a Route component that passes
// through to our App component
var routes = (
  <Route handler={Main}>
    <Route name="tag" path=":tag" handler={Tag} />
  </Route>
);

function fetchData(routes, params) {
  var data = {};
  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(d => {data[route.name] = d;});
    })
  ).then(() => data);
}

Router.run(routes, function (Handler, state) {
  loadingEvents.emit('loadStart');

  fetchData(state.routes, state.params).then((data) => {
    loadingEvents.emit('loadEnd');
    React.render(<Handler/>, document.getElementById('main'));
  });
});
// Render the element
// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById('main'));
// });
