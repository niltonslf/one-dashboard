import axios from "axios";

class BillService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.axios = axios.create({
      baseURL: this.apiUrl
    })

  }

  /**
   * Consulta todas as transações do usuário
   */
  async fetchBills() {
    const response = await this.axios.get("/transactions");
    if(response.data.success) return response.data.body;

    return []
  }
}

export default new BillService();
