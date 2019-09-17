export const signup = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'Post',
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        url: '/api/session',
        method: 'Post',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: 'api/session',
        method: 'Delete'
    })
);
