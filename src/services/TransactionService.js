import axios from "axios";

class TransactionService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.axios = axios.create({
      baseURL: this.apiUrl
    });
  }

  /**
   * Consulta todas as transações do usuário
   */
  async fetchTransactions() {
    const response = await this.axios.get("/transactions");
    if (response.data.success) return response.data.body;

    return [];
  }

  /**
   *
   */
  async togglePaymentStatus(id, isPaid) {
    const response = await this.axios.put(`/transactions/${id}/pay`, {
      isPaid
    });
    if (response.data.success) return response.data.body;
    return undefined;
  }
}

export default new TransactionService();
