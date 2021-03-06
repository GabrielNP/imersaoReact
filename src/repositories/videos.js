import config from '../config/index'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`

function create(videoObject) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoObject)
    })
        .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }

        throw new Error('Não foi possível cadastrar o video :(');
        });
}

export default {
    create,
}