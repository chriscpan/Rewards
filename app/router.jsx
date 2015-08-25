
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
    <Route name="tag" path=":tag" handler={TagList} />
  </Route>
);

// Render the element
Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
