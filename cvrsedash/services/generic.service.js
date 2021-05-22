import axios from './request.service'

export default class GenericService {
  constructor({ url, name }) {
    this.url = url
    this.name = name
  }

  async fetchAll() {
    try {
      const { data } = await axios.get(`${this.url}/`)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `Error on fetchAll at ${this.name}`,
      }
    }
  }

  async fetchOne(id) {
    try {
      const { data } = await axios.get(`${this.url}/${id}`)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `Error on fetchOne at ${this.name}`,
      }
    }
  }

  async create(payload) {
    try {
      const { data } = await axios.post(`${this.url}/`, payload)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `Error on create at ${this.name}`,
      }
    }
  }

  async update(payload, id) {
    try {
      const { data } = await axios.put(`${this.url}/${id}`, payload)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `Error on update at ${this.name}`,
      }
    }
  }

  async delete(id) {
    try {
      await axios.delete(`${this.url}/${id}`)
    } catch (err) {
      throw {
        err,
        error: true,
        message: `Error on delete at ${this.name}`,
      }
    }
  }
}
