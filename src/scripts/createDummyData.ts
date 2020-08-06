import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from "../database/utils/utils.connectDb"

(async () => {
  connect();  const users = [
    { username: "Emma", password: "Bradley", email: "34" },
    { username: "Elise", password: "Conner", email: "62" },
    { username: "Jack", password: "Lawson", email: "20" },
    { username: "Oliver", password: "Moss", email: "80" },
    { username: "Jamie", password: "Reid", email: "52" },
    { username: "Aidan", password: "Bradley", email: "73" },
    { username: "Jordan", password: "Gallagher", email: "27" },
    { username: "Erin", password: "Miles", email: "23" },
    { username: "William", password: "May", email: "39" },
    { username: "Ethan", password: "Butler", email: "68" },
  ];  
  
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.username} ${user.password}`);
    }    disconnect();
  } catch (e) {
    console.error(e);
  }
})();