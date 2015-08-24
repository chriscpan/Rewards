var TagList = React.createClass({
  getInitialState: function() {
    return {
      filterOn: false,
      start: true
    }
  },

  handleClick: function(e) {
    var target = $(e.currentTarget);
    var text = target.text();
    if (text === 'filter') {
      this.setState({
        filterOn: true
      })
      var prevTag = $('.active').text()
      this.getRewards(prevTag);
    } else {
      this.getRewards(text)
    }
    $('.active').removeClass('active');
    target.addClass('active');
  },

  getRewards: function(text) {
    var filteredArr = [];
    rewards.forEach(function(reward){
      if (text === 'all') {
        filteredArr = rewards;
        return;
      }
      if (text === 'filter') {
        this.setState({
          filterOn: true
        });
      }
      if (reward.status === text) {
        filteredArr.push(reward)
      }
    }.bind(this))
    this.props.onTagClick({
      rewards: filteredArr
    })
  },

  handleClose: function(){
    this.props.onTagClick({
      rewards: rewards
    });
    this.setState({
      filterOn: false
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.search).value.trim();
    var filteredArr = [];
    rewards.forEach(function(reward){
      if (reward.experience.toLowerCase().indexOf(text) >= 0 || reward.user.name.toLowerCase().indexOf(text) >= 0 || reward.date.toLowerCase().indexOf(text) >= 0) {
        filteredArr.push(reward);
      }
    })
    this.props.onTagSearch({
      rewards: filteredArr
    })
  },

  componentDidMount: function() {
    if (this.state.start) {
      $(".tag:contains('all')").addClass('active');
      this.state.start = false;
    }

  },

  render: function(){
    if (this.state.filterOn === false) {
      return this.renderTags();
    } else {
      return this.renderSearch();
    }

  },

  renderTags: function() {
    var that = this;
    var tagItem = this.props.tags.map(function(tag){
      return (
        <li className="tag" onClick={that.handleClick}>
          {tag}
        </li>
      )
    })
    return (
      <div className="tag-box">
        <ul className="tag-list">
          {tagItem}
        </ul>
      </div>
    )
  },

  renderSearch: function() {
    return(
        <form className="tagSearch" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What rewards do you want to search for?" ref="search">
            <div className="filterExit" onClick={this.handleClose}>
              X
            </div>
          </input>
        </form>
    )
  }
})
