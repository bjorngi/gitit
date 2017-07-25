import React from 'react'

// Example of a stateless react component
const Repository = ({name, owner, description, stars, url, watchers, openIssues}) => (
  <div className='repository'>
    <div className='top'>
      <a href={url} target='_blank'>
        <div className='header'>
          <img className='gravatar' src={owner.avatar_url}  />
          <div className='key-info'>
            <div className='name'>
              {name}
            </div>

            <div className="user">
              {owner.login}
            </div>
          </div>
        </div>
      </a>

      <div className="description">
        {description}
      </div>
    </div>
    <div className="bottom">
      <div className='stats'>
        <div className='stars'>
  &#9733; {stars}
        </div>
        <div className='issues'>
  &#9888; {openIssues}</div>
      </div>
    </div>
  </div>
)

export default Repository
