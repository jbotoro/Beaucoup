export const addMyStuff = (show_id) => (
    $.ajax({
        method: "POST",
        url: `/api/usershows`,
        data: {show_id}
    })
)

export const removeMyStuff = (show_id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/usershows/${show_id}`
    })
)