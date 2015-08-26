var routes = (
  <Route path="/" handler={Main}>
    <Route name="tag" path=":tag" handler={Tag} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
