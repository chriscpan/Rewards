var Main = React.createClass({
  getInitialState: function() {
    return {data: []}
  },

  loadRewards: function(){

  },

  componentDidMount: function(){
    console.log('hello');
    this.loadRewards();
  },

  render: function() {
    console.log(user1)
    return (
      <div className="main">
        <RewardList data={this.state.data} />
        <div className="content">
        </div>
      </div>
    )
  },

})

React.render(<Main />, document.getElementById('main'))
