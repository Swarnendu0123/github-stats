# github-stats

Get all your github issues and pull-request in one place.

![NPM Version](https://img.shields.io/npm/v/@swarnendu0123/github-stats)
![NPM Downloads](https://img.shields.io/npm/dt/@swarnendu0123/github-stats)
![GitHub Repo size](https://img.shields.io/github/repo-size/Swarnendu0123/github-stats)

![NPM License](https://img.shields.io/npm/l/@swarnendu0123/github-stats)
![GitHub Repo issues](https://img.shields.io/github/issues/Swarnendu0123/github-stats)
![GitHub Repo pull requests](https://img.shields.io/github/issues-pr/Swarnendu0123/github-stats)

![Contributors](https://img.shields.io/github/contributors/Swarnendu0123/github-stats)
![GitHub Repo stars](https://img.shields.io/github/stars/Swarnendu0123/github-stats)
![GitHub Repo forks](https://img.shields.io/github/forks/Swarnendu0123/github-stats)

- GitHub: https://github.com/Swarnendu0123/github-stats
- NPM: https://www.npmjs.com/package/@swarnendu0123/github-stats

- `getPulls` : Function Get all the pull requests of a repository
- `getIssues` : Function Get all the issues of a repository

## Installation:

```bash
    npm install @swarnendu0123/github-stats
```

## Usage:

### Promise Syntax:

```js
const stats = require("@swarnendu0123/github-stats");
stats
  .getIssues("https://github.com/processing/processing-website")
  .then((data) => {
    console.log(data);
  });
```

### Async/Await Syntax:

```js
const stats = require("@swarnendu0123/github-stats");
const myPulls = await stats.getPulls(
  "https://github.com/processing/processing-website"
);
console.log(myPulls);
```


- `by (Optional)`: The user who created the pull request/issue . If not provided, it will return all the pull requests.

```js
const stats = require("@swarnendu0123/github-stats");
const myPulls = await stats.getPulls(
  "https://github.com/processing/processing-website",
  "Swarnendu0123"
);
console.log(myPulls);
```

### Using in a react app:

```js
import React, { useEffect, useState } from "react";
import stats from "@swarnendu0123/github-stats";

function MyComponent() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    stats
      .getIssues("https//:github.com/processing/processing-website")
      .then((data) => {
        setIssues(data);
      });
  }, []);

  return (
    <div>
      {issues.map((index, issue) => (
        <div key={index}>
          <h1>{issue.title}</h1>
          <p>{issue.url}</p>
          <p>{issue.openedBy}</p>
          <p>
            {issue.issueLabel.map((label) => (
              <span>{label}</span>
            ))}
          </p>
          <p>{issue.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
```

## Keywords

- `github-stats`
- `github`
- `stats`
- `issues`
- `pulls`
- `github-issues`
- `github-pulls`
- `github-stats`
- `github-api`
- `github-issues-api`
- `github-pulls-api`
- `github-stats-api`
- `github-issues-pulls`
- `github-issues-pulls-stats`
- `github-issues-pulls-stats-api`
- `github-issues-pulls-stats-npm`
- `github-issues-pulls-stats-npm-package`
- `github-issues-pulls-stats-npm-package-api`
