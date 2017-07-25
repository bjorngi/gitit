// Interface to API, in this case github

const apiRoot = "https://api.github.com"

export function getGithubRepositories () {
  const url = `${apiRoot}/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100`
  let query = fetch(url, {
  }).then((response) => {
    return response.json()
  })
  return query
}
