import UsuarioModel from "../models/usuario.model.js";


export default class UserRepository {
  async getUsers() {
    try {
      return await UsuarioModel.find();
    } catch (error) {
      throw new Error(`Error getting users: ${error.message}`);
    }
  }

  async getUser(id) {
    try {
      return await UsuarioModel.findById(id);
    } catch (error) {
      throw new Error(`Error getting user with id ${id}: ${error.message}`);
    }
  }

  async addUser(userData) {
    try {
      const user = new UsuarioModel(userData);
      return await user.save();
    } catch (error) {
      throw new Error(`Error adding user: ${error.message}`);
    }
  }

  async modifyUser(id, userData) {
    try {
      return await UsuarioModel.findByIdAndUpdate(id, userData, { new: true });
    } catch (error) {
      throw new Error(`Error updating user with id ${id}: ${error.message}`);
    }
  }

  async removeUser(id) {
    try {
      return await UsuarioModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error deleting user with id ${id}: ${error.message}`);
    }
  }
}

