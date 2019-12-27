export const addMyStuff = (show_id) => {

    return (

        $.ajax({
            method: "POST",
            url: `/api/userstuff`,
            data: { show_id }
        })
    )
}

export const removeMyStuff = (show_id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/userstuff/${show_id}`
    })
)