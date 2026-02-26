# Installing Supernova for Codex

Enable Supernova skills in Codex via native skill discovery. Just clone the repository and create a symlink.

## Prerequisites

- Git

## Installation

There are two ways to install skills depending on your workflow: **Global (User-Level)** or **Project (Codebase-Level)**.

### Global Installation (User-Level)
This makes Supernova available across all your codebases everywhere on your machine.

1. **Clone the Supernova repository:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ~/.codex/supernova
   ```

2. **Create the skills symlink:**
   This allows Codex to automatically discover Supernova's orchestrated Dev Team skills.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.codex/supernova/skills ~/.agents/skills/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supernova" "$env:USERPROFILE\.codex\supernova\skills"
   ```

3. **Restart Codex** (quit and relaunch the CLI) to discover the skills.

### Project Installation (Codebase-Level)
This makes Supernova available *only* within a specific codebase, making it ideal if your team wants to track these skills in source control.

1. **Clone or copy the Supernova repository into your project:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin
   ```

2. **Create the Project skills folder:**
   Codex automatically scans `.agents/skills` recursively from your current working directory up to the git root.
   ```bash
   mkdir -p .agents/skills
   cp -r ./supernova-plugin/skills .agents/skills/supernova
   ```

3. **Restart Codex** when inside your project directory.

## Verify

You can verify the installation by checking the symlink directory:
```bash
ls -la ~/.agents/skills/supernova
```
You should see a symlink (or junction on Windows) pointing to your Supernova skills directory.

## Updating

To update the skills and pipelines automatically, simply pull the latest changes:
```bash
cd ~/.codex/supernova && git pull
```
Because of the symlink, the skills in Codex will update instantly.

## Uninstalling

To remove Supernova from Codex:
```bash
rm ~/.agents/skills/supernova
```
Optionally delete the clone: `rm -rf ~/.codex/supernova`.
