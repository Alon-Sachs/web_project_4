export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    getUserInformation() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    editUserInformation({ name, job }) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: job
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    addLike(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: "PUT",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });

    }

    removeLike(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });

    }

    addNewCard({ name, link }) {
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    editProfilePicture({ avatar }) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    fetchInitialData() {
        const userInfo = this.getUserInformation();
        const initialCard = this.getInitialCards();

        return Promise.all([userInfo, initialCard]);
    }
}

