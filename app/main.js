var Main = React.createClass({

  render: function() {
    return (
      <div className="rewards">
        <Tags />
        <p> Here are all the rewards </p>
        <div className="content">
        </div>
      </div>
    )
  },

})

React.render(<Main />, document.getElementById('main'))
