workflow "Build, lint and test" {
  on = "push"
  resolves = [
    "Build project",
    "Lint project"
  ]
}

action "Don't skip CI" {
  uses = "ffflorian/actions/skip-ci-check@v1.0.0"
}

action "Install dependencies" {
  uses = "ffflorian/actions/git-node@v1.0.0"
  needs = "Don't skip CI"
  runs = "yarn"
}

action "Lint project" {
  uses = "ffflorian/actions/git-node@v1.0.0"
  needs = "Install dependencies"
  runs = "yarn"
  args = "lint"
}

action "Build project" {
  uses = "ffflorian/actions/git-node@v1.0.0"
  needs = "Install dependencies"
  runs = "yarn"
  args = "dist"
}