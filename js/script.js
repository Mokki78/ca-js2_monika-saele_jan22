const API_BASE_URL = "https://nf-api.onrender.com";

// End -points
// Register: /api/v1/social/auth/register

// Registers user.............................

/**
 * API call that registers user
 * @param {string} url
 * @param {any} userData
 * ```js
 * //regUser(registerUrl, userToRegister);
 * ```
 */

async function regUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: "mokki-78",
  email: "MonSae41208@stud.noroff.no",
  password: "ImdoingitmyWay",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

//regUser(registerUrl, userToRegister); //

//...............................................

async function logInUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    console.log(json.accessToken);
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

const userToLogin = {
  email: "MonSae41208@stud.noroff.no",
  password: "ImdoingitmyWay",
};

const logInUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

logInUser(logInUrl, userToLogin);

// Request with token

async function getData(url) {
  try {
    console.log(url);
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const postUrl = `${API_BASE_URL}/api/v1/social/posts`;

getData(postUrl);
