
function createCard(data) {
    const card = document.createElement('div')
    card.className = 'card'

    const title = document.createElement('h1')
    title.className = 'card-title'
    title.innerText = data.name

    const desc = document.createElement('p')
    desc.className = 'card-desc'
    desc.innerText = data.description

    card.append(title, desc)
    card.addEventListener('click', () => console.log('clicked ' + data.name))

    return card
}

export { createCard }
