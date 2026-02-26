# Installing Supernova for OpenCode

Enable Supernova skills in OpenCode via native skill discovery. You can install these skills globally for your user profile, or locally within a specific project.

## Prerequisites

- Git
- OpenCode installed

## Installation

There are two ways to install skills depending on your workflow: **Global (User-Level)** or **Project (Codebase-Level)**.

### Global Installation (User-Level)
This makes Supernova available across all your codebases everywhere on your machine. OpenCode automatically scans the global config directory for skills.

1. **Clone the Supernova repository:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ~/.config/opencode/supernova
   ```

2. **Create the skills symlink:**
   ```bash
   mkdir -p ~/.config/opencode/skills
   ln -s ~/.config/opencode/supernova/skills ~/.config/opencode/skills/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\skills"
   cmd /c mklink /J "$env:USERPROFILE\.config\opencode\skills\supernova" "$env:USERPROFILE\.config\opencode\supernova\skills"
   ```

3. **Restart OpenCode** to discover the new skills.

### Project Installation (Codebase-Level)
This makes Supernova available *only* within a specific codebase, making it ideal if your team wants to track these skills in source control.

1. **Clone or copy the Supernova repository into your project:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin
   ```

2. **Create the Project skills folder:**
   OpenCode automatically scans `.opencode/skills` recursively from your current working directory up to the git root.
   ```bash
   mkdir -p .opencode/skills
   cp -r ./supernova-plugin/skills .opencode/skills/supernova
   ```

3. **Restart OpenCode** when inside your project directory.

## Verify

You can verify discovery by asking OpenCode to list available skills:
```text
use skill tool to list skills
```
You should see Supernova's orchestrator agents (like `master-agent`, `docs-agent`, `systematic-debugger`, etc.) listed in the output.

## Updating

To update the skills and pipelines automatically, pull the latest changes:
```bash
cd ~/.config/opencode/supernova && git pull
```
Because of the symlink, the skills in OpenCode will update instantly.

## Uninstalling

To remove Supernova from OpenCode:
```bash
rm ~/.config/opencode/skills/supernova
```
Optionally delete the clone: `rm -rf ~/.config/opencode/supernova`.
