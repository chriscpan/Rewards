var Reward = React.createClass({
  render: function() {
    return (
      <div className="reward">
        <ul className="rewardDescript">
          <li>{this.props.user['name']}</li>
          <li>{this.props.experience}</li>
          <li>{this.props.status}</li>
          <li>{this.props.date}</li>
        </ul>
      </div>
    )
  }
})
