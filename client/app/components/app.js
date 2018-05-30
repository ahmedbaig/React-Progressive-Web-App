import React, { Component, Fragment }  from 'react'
import PropTypes from 'prop-types'

class App extends Component{
  constructor(){
    super();
    this.state = {
      article: [],
      sources: [],
      defaultSource: 'the-washington-post',
      apiKey: '6d80a65c7e254097ad331ed8633f5216'
    }
  }
  componentDidMount(){
    const {apiKey, defaultSource} = this.state
    fetch('https://newsapi.org/v2/top-headlines?sources='+defaultSource+'&apiKey='+apiKey).then(res => res.json()).then(json => {
      this.setState({
        article: json.articles
      })
        fetch('https://newsapi.org/v2/sources?apiKey='+apiKey).then(res => res.json()).then(json => {
          this.setState({
            sources: json.sources
          })
          const sourceSelector = document.querySelector('#sourceSelector')
          sourceSelector.value = defaultSource
        })
    })
  }
  updateNews (source){
    const {apiKey} = this.state
    fetch('https://newsapi.org/v2/top-headlines?sources='+source.target.value+'&apiKey='+apiKey).then(res => res.json()).then(json => {
      this.setState({
        article: json.articles
      })
    })
  }
  render () {
    return (
      <div className='container'>
        <h1>News</h1>
        <select id='sourceSelector' onChange={this.updateNews.bind(this)}>
          <Sources sources={this.state.sources}/>
        </select>
        <main>
          <Articles articles={this.state.article}/>
        </main>
      </div>
    )
  }
}

export default App;

class Articles extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const articles = this.props.articles
    let item = articles.map(x => {
      return(
        <div key={x.title} className='article card'>
          <a href={x.url}>
            <h2>{x.title}</h2>
            <img src={x.urlToImage}/>
            <p>{x.description}</p>
          </a>
        </div>
      )
    })
    return ( <Fragment>{item}</Fragment> )
  }
}

class Sources extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const sources = this.props.sources
    let item  = sources.map(x => {
      return (
        <option key={x.name} value={x.id}>{x.name}</option>
      )
    })
    return (
      <Fragment>{item}</Fragment>
    )
  }
}
