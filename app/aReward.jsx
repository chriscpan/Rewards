var Reward = React.createClass({
  render: function() {
    return (
      <div className="reward">
        <ul className="rewardDescript">
          <div className="edit">
            Edit
          </div>
          <div className="stat-left">
            <li>Username: {this.props.user['name']}</li>
            <li>Reward: {this.props.experience}</li>
          </div>
          <div className="stat-right">
            <li>Status: {this.props.status}</li>
            <li>Date: {this.props.date}</li>
          </div>
        </ul>
      </div>
    )
  }
})
