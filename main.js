const LinksSocialMedia = {
  github: 'Carlosssjc',
  youtube: '/channel/UCN2IgD3voXLlegPVIRz_alg',
  facebook: '100001340868106',
  instagram: 'carlos93jcosta',
  twitter: 'CarlosC20556464'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
