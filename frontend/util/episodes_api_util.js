export const fetchEpisode = (id) => (
    $.ajax({
        method: "GET",
        url: `api/episodes/${id}`
    })
);

export const fetchAllEpisodes = () => {

    return (
        $.ajax({
            method: "GET",
            url: `api/episodes`
        })
    )
};