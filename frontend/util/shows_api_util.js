export const fetchShows = () => (
    $.ajax({
        method: 'GET',
        url: 'api/shows'
    })
);

export const fetchShow = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/shows/${id}`
    })
);