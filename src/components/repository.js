import React from 'react'

// Icons
import StarIcon from 'icons/ic_star_rate_black_18px.svg'
import IssuesIcon from 'icons/ic_warning_black_24px.svg'
import ForkIcon from 'icons/ic_call_split_black_18px.svg'

const Heading = ({gravatar, name, username, url}) => (
  <a href={url} target='_blank'>
    <div className='header'>
      <img className='gravatar' src={gravatar}  />
      <div className='key-info'>
        <div className='name'>
          {name}
        </div>

        <div className="user">
          {username}
        </div>
      </div>
    </div>
  </a>
)

const Stats = ({stars, openIssues, forks}) => (
  <div className='stats'>
    <div className='stars'>
      <StarIcon height={32} width={32}/>
      <span className='stat'>{stars}</span>
    </div>
    <div className='forks'>
      <ForkIcon height={32} width={32}/>
      {forks}
    </div>
    <div className='issues'>
      <IssuesIcon height={32} widht={32} /> {openIssues}
    </div>
  </div>
)

// Example of a stateless react component
const Repository = ({name, owner, description, stars, url, openIssues, forks}) => (
  <div className='repository'>
    <div className='top'>
      <Heading
          gravatar={owner.avatar_url}
          name={name}
          username={owner.login}
          url={url}
      />
      <div className="description">
        {description}
      </div>
    </div>
    <div className="bottom">
      <Stats
          stars={stars}
          openIssues={openIssues}
          forks={forks} />
    </div>
  </div>
)

export default Repository
