// PROMISE

// First example of making promise,(resolve, reject) nai argument hoo.

const hasErr = false;
const promise = new Promise((resolve, reject) => {
  if (hasErr) {
    reject("Error occured");
  } else {
    resolve("Success");
  }
});

promise
  .then((result) => {
    // then ma result aaune resolve ma aaucha
    console.log(result);
  })
  .catch((error) => {
    // catch ma aaune error chai reject ma aaucha
    console.log(error);
  })
  .finally(() => {
    console.log("Work done");
  });

// ASYNC AND AWAIT

async function main() {
  try {
    const result = await promise;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

main();
