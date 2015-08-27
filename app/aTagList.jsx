var TagList = React.createClass({
  getInitialState: function() {
    return {
      start: true,
      filterOn: false,
      loading: false
    }
  },

  handleSearchSwap: function() {
    this.setState({
      filterOn: true
    })
  },

  handleClose: function(){
    this.setState({
      filterOn: false
    });
    this.props.onTagClick({
      rewards: rewards
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.search).value.trim();
    var filteredArr = [];
    rewards.forEach(function(reward){
      var name;
      if (typeof reward.user['name'] === 'undefined') {
        name = reward.user;
      } else {
        name = reward.user['name']
      }
      if (reward.experience.toLowerCase().indexOf(text) >= 0 || name.toLowerCase().indexOf(text) >= 0 || reward.date.toLowerCase().indexOf(text) >= 0) {
        filteredArr.push(reward);
      }
    })
    this.props.onTagSearch({
      rewards: filteredArr
    })
  },

  componentDidMount: function() {
    var timer;
    if (this.state.start) {
      $(".tag:contains('all')").addClass('active');
      this.state.start = false;
    }
  },

  render: function() {
    if (this.state.filterOn === false) {
      return this.renderTags();
    } else {
      return this.renderSearch();
    }
  },

  renderTags: function(){
    var that = this;
    var tagItem = this.props.tags.map(function(tag){
      return (
        <Tag
          key = {tag.id}
          id = {tag.id}
          tag = {tag.tag}
          onTagSearch = {that.props.onTagSearch}
          onTagClick = {that.props.onTagClick}
          onSearchSwap = {that.handleSearchSwap}
         >
       </Tag>
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
