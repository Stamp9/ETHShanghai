import React from 'react'
import { useEffect, useState } from 'react'
const axios = require('axios').default
import { Card } from 'antd'
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
        return (
          <div className="site-card-border-less-wrapper">
            <Card
              title={l.title} bordered={true}
              extra={<a href={l.link}>Go full reading</a>}
            >
              <div style={{ padding: 15 }} dangerouslySetInnerHTML={{ __html: l.content }} />
            </Card>
          </div>
        )
      })}
    </div>
  )
}

Rss.propTypes = {};
Rss.defaultProps = {};
