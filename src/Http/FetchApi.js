const url =
  "https://vue3-hhtp-request-default-rtdb.europe-west1.firebasedatabase.app/surveys.json";

export const postData = async (data) => {
  try {
    // Default options are marked with *
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data.json), // body data type must match "Content-Type" header
    })
      // return response.json(); // parses JSON response into native JavaScript objects
      .then((data) => {
        console.log(`yes - ${data}`); // JSON data parsed by `data.json()` call
      });
  } catch (error) {
    console.log(`Opppsss...Something gone wrong ${error}`);
  }
};

export const getData = async () => {
  let results = [];
  try {
    await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rateing: data[id].rateing,
          });

          return results;
        }
      });
  } catch (error) {
    console.log(`Opppsss...Something gone wrong ${error}`);
  }
};
