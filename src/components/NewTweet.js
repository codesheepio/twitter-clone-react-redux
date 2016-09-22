import React from 'react'
import classnames from 'classnames'

class NewTweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      tweetText: event.target.value,
    })
  }

  render() {
    const newTweetClass = classnames('new-tweet', {
      'first-item': this.props.firstItem,
    })

    return (
      <div className={newTweetClass}>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="tweet-text col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tweetText"
                placeholder="What's happening"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-sm-2">
              <input type="button" className="btn btn-default" value="Tweet" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewTweet.propTypes = {
  firstItem: React.PropTypes.bool,
}

NewTweet.defultProps = {
  firstItem: false,
}

export default NewTweet
