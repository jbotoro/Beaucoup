export const signup = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'Post',
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        url: '/session',
        method: 'Post',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: '/session',
        method: 'Delete'
    })
);
