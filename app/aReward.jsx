var Reward = React.createClass({
  render: function() {
    return (
      <div className="reward">
        <ul className="rewardDescript">
          <li className="descript">{this.props.user}</li>
          <li className="descript">{this.props.experience}</li>
          <li className="descript">{this.props.status}</li>
          <li className="descript">{this.props.date}</li>
        </ul>
      </div>
    )
  }
})
