import axios from 'axios'

const itunesController = {
    itunesBaseUrl: 'https://itunes.apple.com/search?',
    async search (term) {
        const searchUrl = this.itunesBaseUrl + 'limit=50&term=' + term
        const resp = await axios.get(searchUrl)
        return resp.data
    }
}

export default {
    itunesController
}