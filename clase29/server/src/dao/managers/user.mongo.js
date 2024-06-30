export class userMongo {
  constructor() {
    this.model = user.model;
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
}
