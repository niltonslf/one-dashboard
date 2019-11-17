import axios from "axios";

console.log(process.env);

class BillService {
  constructor() {
    this.key = process.env.REACT_APP_ORGANIZZE_KEY;
    this.apiUrl = "https://api.organizze.com.br/rest/v2/";
    this.user = process.env.REACT_APP_ORGANIZZE_USERMAIL;

    this.authorization = btoa(`${this.user}:${this.key}`);

    this.axios = axios.create({
      baseURL: this.apiUrl,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Basic ${this.authorization}`,
        "User-Agent": `Nilton Lopes (${this.user})`,
        "Content-Type": "application/json",
        Accept: " */*"
      }
    });
  }

  /**
   * Consulta todas as transações do usuário
   */
  async fetchBills() {
    const response = await this.axios.get("transactions");
    return response;
  }
}

export default new BillService();
