import config from '../config/index'

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }

        throw new Error('Não foi possível pegar os dados :(');
        });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (response) => {
            if (response.ok) {
                const result = await response.json()
                return result
            }

            throw new Error('Não foi possível pegar os dados')
        })
}

export default {
    URL_CATEGORIES,
    getAll,
    getAllWithVideos,
}