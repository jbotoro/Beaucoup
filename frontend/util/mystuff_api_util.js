export const addMyStuff = (show) => {

    return (

        $.ajax({
            method: "POST",
            url: `/api/userstuff`,
            data: { show }
        })
    )
}

export const removeMyStuff = (show) => (
    $.ajax({
        method: "DELETE",
        url: `/api/userstuff/${show}`
    })
)