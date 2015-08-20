
var Main = React.createClass({

  render: function() {
    console.log(user1)
    return (
      <div className="rewards">
        <p> Here are all the rewards </p>
        <div className="content">
        </div>
      </div>
    )
  },

})

React.render(<Main />, document.getElementById('main'))
