import {usersModel} from "../models/users.model.js";
export class UsersMongo {
  constructor() {
    this.model = usersModel;
  }

  async getUsers() {
    try {
      const users = await this.model.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error("Error: al obtener los usuarios");
    }
  }

  async getUserById(id) {
    try {
      const user = await this.model.findById(id);
      if(!user) throw new Error("Error: usuario no encontrado");
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error: al obtener el usuario");
    }
  }

  async saveUser(user) {
    try {
      const newUser = new this.model.create(user);
      return newUser;
    }catch (error) {
      console.log(error.message);     
      throw new Error("Error: al crear el usuario");
    } 
  }

  async updateUser(id, user) {
    try {
      const updatedUser = await this.model.findByIdAndUpdate(id, user,{new : true});
      return updatedUser;
    } catch (error) {
      console.log(error.message);
      throw new Error("Error: al actualizar el usuario"); 
    }
  } 
}