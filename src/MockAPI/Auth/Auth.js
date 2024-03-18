import MockAdapter from "axios-mock-adapter";
import EmailValidator from "email-validator";

const RegisterDatabase = [];

export default function applyMockAdapter(axiosInstance) {
  const mock = new MockAdapter(axiosInstance);


  ///register api
  mock.onPost("/api/register").reply(async (config) => {
    const { userName, useremail, password } = JSON.parse(config.data);

    const emailvalidate = EmailValidator.validate(useremail);


    if (!emailvalidate) {
      return [200, { msg: "you entered wrong email address" }];
    } 

    RegisterDatabase.push({ userName, useremail, password });
    return [201, { useremail, userName }];
  });

  ///login api

  mock.onPost("/api/login").reply(async (config) => {
    const { useremail, password } = JSON.parse(config.data);

    console.log(RegisterDatabase);
    const user = RegisterDatabase.filter(
      (data) => data.useremail === useremail
    );

    console.log("this is the user")
    console.log(user);
    if(!user)
    {
      return [400,{msg:"user not exist"}];
    }
    else if(user[0].password!==password)
    {
      return [400,{msg:"password is incorrect"}]
    }
    

    return [200, user];
  });

  mock.onAny().reply(200, {
    status: "Any other call will get this 😀",
    moreData: [1, 3, 4, 5],
  });
}
