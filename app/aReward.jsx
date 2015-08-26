var Reward = React.createClass({
  getInitialState: function() {

    return{
      editOn: false,
    };
  },

  handleEdit:function(e) {
    this.setState({
      editOn: true
    })
  },

  finishEdit: function() {
    this.setState({
      editOn: false
    })
  },

  handleChangeName: function(event) {
    this.props.onRewardEdit({
      type: 'name',
      value: event.target.value,
      id: this.props.id
    })
  },

  handleChangeExp: function(event) {
    this.props.onRewardEdit({
      type: 'exp',
      value: event.target.value,
      id: this.props.id
    })
  },

  handleChangeStat: function(event) {
    this.props.onRewardEdit({
      type: 'stat',
      value: event.target.value,
      id: this.props.id
    })
  },

  handleChangeDate: function(event) {
    this.props.onRewardEdit({
      type: 'date',
      value: event.target.value,
      id: this.props.id
    })
  },

  render: function() {
    if (this.state.editOn === false) {
      return this.renderReward();
    } else {
      return this.renderEdit();
    }

  },

  renderReward: function() {
    var name;
    if (typeof this.props.user['name'] === 'undefined') {
      name = this.props.user;
    } else {
      name = this.props.user['name']
    }
    return (
      <div className="reward">
        <ul className="rewardDescript">
          <div className="edit" onClick={this.handleEdit}>
            Edit
          </div>
          <div className="stat-left">
            <li>Username: {name}</li>
            <li>Reward: {this.props.experience}</li>
          </div>
          <div className="stat-right">
            <li>Status: {this.props.status}</li>
            <li>Date: {this.props.date}</li>
          </div>
        </ul>
      </div>
    )
  },

  renderEdit: function() {
    var name;
    if (typeof this.props.user['name'] === 'undefined') {
      name = this.props.user;
    } else {
      name = this.props.user['name']
    }
    return(
      <form className="reward">
        <ul className="rewardDescript">
          <div className="edit" onClick={this.finishEdit}>
            Done Editing
          </div>
          <div className="stat-left">
            <li>
              Username: <input type="text" defaultValue={name} onChange={this.handleChangeName}/>
            </li>
            <li>
              Reward: <input type="text" defaultValue={this.props.experience} onChange={this.handleChangeExp}/>
            </li>
          </div>
          <div className="stat-right">
            <li>
              Status: <input type="text" defaultValue={this.props.status} onChange={this.handleChangeStat}/>
            </li>
            <li>
              Reward: <input type="text" defaultValue={this.props.date} onChange={this.handleChangeDate}/>
            </li>
          </div>
        </ul>
      </form>
    )
  }
})
