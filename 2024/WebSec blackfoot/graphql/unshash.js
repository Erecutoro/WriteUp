const crypto = require("crypto");

const {
  data: { requestsLog: requests },
} = require("./confession.json");

const c = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"()<=>?_{|}~`.split("");

const hashes = requests
  .filter(({ name }) => name == "confession")
  .map(({ args }) => JSON.parse(args).hash);

const decryptChar = (prefix, hash) =>
  c.find((c) => crypto
        .createHash("sha256")
        .update(prefix + c)
        .digest("hex") == hash
  );

const decrypt = (hashes) =>
  hashes.reduce((prefix, hash, _, arr) => {
    const c = decryptChar(prefix, hash);

    if (!c) throw Error("Hash error check prefix or hash");
    console.log(`${(prefix + c).padEnd(arr.length, "")}`);

    return prefix + c;
  }, "");

console.log(decrypt(hashes));
