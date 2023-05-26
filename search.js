

function createSearchBar(onSearch) {
    const searchElement = document.createElement('div')
    searchElement.className = 'search-bar'

    const input = document.createElement('input')
    input.className = 'search-input'

    const btn = document.createElement('button')
    btn.className = 'search-btn'
    btn.innerText = '🔎'
    btn.addEventListener('click', () => onSearch(input.value))

    searchElement.append(input, btn)

    return searchElement
}

export { createSearchBar }
