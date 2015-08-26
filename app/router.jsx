// Create a Route component that passes
// through to our App component
var routes = (
  <Route path="/" handler={Main}>
    <Route name="tag" path=":tag" handler={Tag} />
  </Route>
);

// function fetchData(routes, params) {
//   var data = {};
//   return Promise.all(routes
//     .filter(route => route.handler.fetchData)
//     .map(route => {
//       return route.handler.fetchData(params).then(d => {data[route.name] = d;});
//     })
//   ).then(() => data);
// }
//
// Router.run(routes, function (Handler, state) {
//   loadingEvents.emit('loadStart');
//
//   fetchData(state.routes, state.params).then((data) => {
//     loadingEvents.emit('loadEnd');
//     React.render(<Handler/>, document.getElementById('main'));
//   });
// });
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
