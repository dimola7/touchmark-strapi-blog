module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "KZgt7s8WLG6w19hdbg83aQ==",
      "8CK7TCa10SIeCX1Rixbgtg==",
      "Yq3n4yK2fYwM4r9LaDOa7g==",
      "FkoD3n1nlmWzy/0IJPw96A==",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
