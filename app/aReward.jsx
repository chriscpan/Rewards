var Reward = React.createClass({
  render: function() {
    return (
      <div className="reward">
        <ul className="rewardDescript">
          <li>Username: {this.props.user['name']}</li>
          <li>Reward: {this.props.experience}</li>
          <li>Status: {this.props.status}</li>
          <li>Date: {this.props.date}</li>
        </ul>
      </div>
    )
  }
})
