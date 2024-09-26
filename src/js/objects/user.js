const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    language: '',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name 
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.language = gitHubUser.language
    }, 
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    }
}

export { user }