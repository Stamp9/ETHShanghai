import React from 'react'
import { useEffect, useState } from 'react'
const axios = require('axios').default
import Card from 'react-bootstrap/Card'
import './Rss.css'

const corsUrl = 'https://api.rss2json.com/v1/api.json?rss_url='
const getFeedList = function (url) {
  let getUrl = corsUrl + url
  // let getUrl = url
  console.log(getUrl)
  return axios.get(getUrl)
}


export default function Rss() {
  const [initialized, setInitialized] = useState(false)
  const [url, setUrl] = useState('')
  const [list, setList] = useState([])
  const [data, setData] = useState({})

  const getList = async (url) => {
    try {
      const response = await getFeedList(url)
      console.log('response: ' + JSON.stringify(response))
      setList(response.data.items)
      setData(response.data.feed)
    } catch (e) {
      console.log('Fail to get feed list: ' + e)
    }
  }

  const openLink = (url) => {
    window.location.href = url
  }

  useEffect(() => {
    if (!initialized) {
      let url = 'https://gov.uniswap.org/posts.rss'
      setUrl(url)
      getList(url)
      setInitialized(true)
    }
  })

  return (
    <div className="feed-page">
      {list.map((l, i) => {
        console.log(l)
        return (
          <Card key={i} className="feed-card">
            <Card.Img variant="bottom" src={l.thumbnail} />
            <Card.Title className="card-title">{l.title}</Card.Title>
            <Card.Body>
              <div style={{ padding: 15 }} dangerouslySetInnerHTML={{ __html: l.content }} />
            </Card.Body>
            <Card.Link href={l.link}>Go full reading</Card.Link>
          </Card>
        )
      })}
    </div>
  )
}

Rss.propTypes = {};
Rss.defaultProps = {};
