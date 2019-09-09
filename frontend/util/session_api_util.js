export const signup = (formUser) => (
    $.ajax({
        url: '/api/users',
        method: 'Post',
        data: { formUser }
    })
);

export const login = (formUser) => (
    $.ajax({
        url: '/session',
        method: 'Post',
        data: { formUser }
    })
);

export const logout = () => (
    $.ajax({
        url: '/session',
        method: 'Delete'
    })
);
