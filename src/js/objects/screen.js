const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                         <img src="${user.avatarUrl}" alt="Foto de perfil do usúario" />
                                        <div class="data">
                                             <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                             <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>
                                        </div>
                                        <div class="data follower-info">
                                            <p>👥Seguidores: ${user.followers}</p>
                                            <p>👤Seguindo: ${user.following}</p>
                                        </div>
                                     </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                    <div class="main-statistics">
                                                                        <div class="statistics">🍴${repo.forks}</div> 
                                                                        <div class="statistics">⭐${repo.stargazers_count}</div> 
                                                                        <div class="statistics">👀${repo.watchers}</div> 
                                                                        <div class="statistics">💻${repo.language ? repo.language : 'Sem linguagem'}</div> 
                                                                    </div>
                                                                    </a>
                                                                </li>`
                                                            )
                                                                
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                             <h2>Repositórios</h2>
                                             <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        let eventsItens = ''
        user.events.forEach(eventsTypes => {
            if (eventsTypes.type === 'PushEvent' && eventsTypes.payload.commits.length > 0) {
                eventsItens += `<li>
                                    <span class="event-name">${eventsTypes.repo.name}</span> - ${eventsTypes.payload.commits[0].message}
                                </li>`
            }else if(eventsTypes.type === 'CreateEvent') {
                eventsItens += `<li>
                                    <span class="event-name">${eventsTypes.repo.name}</span> - Sem mensagem de commit
                                </li>`
            }
        })

        if (user.events.length > 0 && eventsItens) {
            this.userProfile.innerHTML += `<div class="section events">
                                                <h2>Eventos</h2> 
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }