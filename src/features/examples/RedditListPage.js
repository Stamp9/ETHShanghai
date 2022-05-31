import React from 'react';
import { useFetchRedditList } from './redux/hooks';

export default function RedditListPage() {
  const {
    redditList,
    fetchRedditList,
    fetchRedditListPending,
    fetchRedditListError,
  } = useFetchRedditList();

  return (
    <div className="examples-reddit-list-page">
      <h1>Reddit API Usage</h1>
      <p>This demo shows how to use Redux async actions to fetch data from Reddit's REST API.</p>
      <button
        className="btn-fetch-reddit"
        disabled={fetchRedditListPending}
        onClick={fetchRedditList}
      >
        {fetchRedditListPending ? 'Fetching...' : 'Fetch reactjs topics'}
      </button>
      {fetchRedditListError && (
        <div className="fetch-list-error">Failed to load: {fetchRedditListError.toString()}</div>
      )}
      {redditList.length > 0 ? (
        <ul className="examples-reddit-list">
          {redditList.map(item => (
            <li key={item.data.id}>
              <a href={item.data.url}>{item.data.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-items-tip">No items yet.</div>
      )}
    </div>
  );
}
