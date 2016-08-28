export function selectBook(book) {
    // SelectBook is an Action Creator, it needs to return an Action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
