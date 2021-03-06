'use strict'

module.exports = {
  branches: ["master"]
, plugins: [
    ["@semantic-release/commit-analyzer", null]
  , ["@semantic-release/release-notes-generator", null]
  , ["@semantic-release/changelog", {
      changelogFile: "CHANGELOG.md"
    }]
  , ["@semantic-release/npm", {
      npmPublish: true
    }]
  , ["@semantic-release/git", {
      assets: [
        "package.json"
      , "package-lock.json"
      , "CHANGELOG.md"
      ]
    }]
  , ["@semantic-release/github", null]
  ]
}
