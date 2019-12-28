export const fetchGenres = () => (
    $.ajax({
        method: "GET",
        url: `/api/genres`
    })
)

export const fetchGenre = (genre_id) => (
    $.ajax({
        method: "GET",
        url: `/api/genres/${genre_id}`
    })
)
