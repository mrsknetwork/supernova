# Extended Setup Guide

For standard installation, refer to the main `README.md`.

## Troubleshooting Initialization
If your agent fails to detect Supernova skills automatically:
1. Ensure the `.claude-plugin` (or equivalent `.cursor-plugin`) manifest points to the root `skills` directory correctly.
2. Prompt the agent explicitly on session start: `"Please load all skills from the supernova/skills directory and initialize context-agent."`
