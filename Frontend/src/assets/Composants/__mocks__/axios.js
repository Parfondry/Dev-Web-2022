const get = url => {
    return Promise.resolve({data: {id: 1, Nickname: 'Louis', File: 'https://i.goopics.net/knofc6.jpg', Description: 'Petit chien'}});
}

exports.get = get;