export const fetchEpisode = (id) => (
    $.ajax({
        method: "GET",
        url: `api/episodes/${id}`
    })
);

export const fetchEpisodes = () => (
        $.ajax({
            method: "GET",
            url: `api/episodes`
        })
);