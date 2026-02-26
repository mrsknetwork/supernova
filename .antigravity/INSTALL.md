# Installing Supernova for Antigravity

Enable Supernova skills and commands in Antigravity via native skill discovery and workflows.

## Prerequisites

- Git

## Installation

There are two ways to install Supernova depending on your workflow: **Global (User-Level)** or **Project (Codebase-Level)**.

### Global Installation (User-Level)
This makes Supernova available across all your codebases everywhere on your machine.

1. **Clone the Supernova repository:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ~/.antigravity/supernova
   ```

2. **Create the skills symlink:**
   Antigravity naturally discovers custom skills placed in the global `~/.agents/skills/` directory.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.antigravity/supernova/skills ~/.agents/skills/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supernova" "$env:USERPROFILE\.antigravity\supernova\skills"
   ```

3. **Create the workflows symlink:**
   Antigravity processes predefined step-by-step commands through the `workflows` directory. Supernova's `.md` commands map perfectly to this.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.agents/workflows
   ln -s ~/.antigravity/supernova/commands ~/.agents/workflows/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\workflows"
   cmd /c mklink /J "$env:USERPROFILE\.agents\workflows\supernova" "$env:USERPROFILE\.antigravity\supernova\commands"
   ```

### Project Installation (Codebase-Level)
This makes Supernova available *only* within a specific codebase, meaning your entire team automatically gains these skills when they clone your project repo.

1. **Clone or copy the Supernova repository into your project:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin
   ```

2. **Create the Project skills and workflow folders:**
   Antigravity scans for `.agents/skills` and `.agents/workflows` locally inside your project root directory.
   ```bash
   mkdir -p .agents/skills
   mkdir -p .agents/workflows
   
   cp -r ./supernova-plugin/skills .agents/skills/supernova
   cp -r ./supernova-plugin/commands .agents/workflows/supernova
   ```

## Verify

You can verify the installation by checking the symlink directories:
```bash
ls -la ~/.agents/skills/supernova
ls -la ~/.agents/workflows/supernova
```
You should see symlinks (or junctions on Windows) pointing to your Supernova skills and commands directories, respectively.

## Updating

To update the skills and workflows automatically, simply pull the latest changes:
```bash
cd ~/.antigravity/supernova && git pull
```
Because of the symlink, the skills and workflows in Antigravity will be updated instantly.

## Uninstalling

To remove Supernova from Antigravity:
```bash
rm ~/.agents/skills/supernova
rm ~/.agents/workflows/supernova
```
Optionally delete the clone: `rm -rf ~/.antigravity/supernova`.
