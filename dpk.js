const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    return processEventPartitionKey(event);
  } else {
    return processPartitionByLength(candidate, TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH)
  }
};

// should run if event partition key is provided
const processEventPartitionKey = (event) => {
  if (event.partitionKey) {
    candidate = event.partitionKey;
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  } else {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }
}

// should process by default if event partition key is not provided
const processPartitionByLength = (candidate, TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
}
