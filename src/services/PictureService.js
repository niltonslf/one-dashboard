import Unsplash, { toJson } from "unsplash-js";

class PictureService {
  constructor() {
    this.unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    });
  }

  /**
   * Busca foto pela palavra-chave fornecida
   * @param {String} keyword
   */
  getPictureFromKeyword(keyword) {
    const response = this.unsplash.search
      .photos(keyword, 1, 1)
      .then(toJson)
      .then(json => {
        const { results } = json;
        const picture = results[0].urls.small;

        return picture;
      });

    return response;
  }
}

export default new PictureService();
