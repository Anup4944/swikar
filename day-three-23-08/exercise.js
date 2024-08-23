// setTimeout(() => {
//   console.log("timer running");
// }, 3000);

function waitFor(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sleepChecker() {
  console.log("before sleep");
  await waitFor(5000);
  console.log("after sleep");
  console.log("done");
}

sleepChecker();
