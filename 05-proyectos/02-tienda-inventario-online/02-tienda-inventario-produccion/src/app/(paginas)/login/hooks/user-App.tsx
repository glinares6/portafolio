export default function userApp() {
  const server = process.env.NEXT_PUBLIC_SERVER || "http://localhost:3000";

  const userGetAuth = async () => {
    const userGet = await fetch(`${server}/users`);

    return userGet.json();
  };
  const userGetEncrypt = async () => {
    const userGetEncrypt = await fetch(`${server}/users/auth/encrypt`, {
      method: "POST",
    });

    return userGetEncrypt.json();
  };

  const userEncryptOneAuth = async (id: number, payload: any) => {
    const userPostEncrypt = await fetch(`${server}/users/encrypt/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return userPostEncrypt.json();
  };

  const authPostToken = async (id: number, payload: any) => {
    const authToken = await fetch(`${server}/auth/login/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return authToken.json();
  };

  const authdecryptOneJwt = async (id: number, token: string) => {
    const userGetEncrypt = await fetch(
      `${server}/auth/login/all/${id}/${token}`,
      {
        method: "GET",
      }
    );

    // const ary: any = await userGetEncrypt.json();
    // console.log(ary);

    return userGetEncrypt.json();

    // console.log("cuasi", await userPostEncrypt.json());
    // // console.log("data del hook", userPostEncrypt);
  };

  return {
    userGetAuth,
    userGetEncrypt,
    userEncryptOneAuth,
    authPostToken,
    authdecryptOneJwt,
    server,
  };
}
