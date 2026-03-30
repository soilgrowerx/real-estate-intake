#!/bin/bash

# NEOCAMBRIAN BOOTSTRAP SEED (v1.0)
# Purpose: Rebuild the link-layer between the Sovereign Second Brain and the OpenClaw workspace.
# Target: 200-Year Continuity.

# 1. Configuration
SECOND_BRAIN="/home/george/Documents/Second_Brain"
WORKSPACE="/home/george/.openclaw/workspace-dev"

echo "🍄 Initializing Neocambrian Bootstrap..."

# 2. Safety Check
if [ ! -d "$SECOND_BRAIN" ]; then
    echo "❌ ERROR: Second Brain not found at $SECOND_BRAIN"
    exit 1
fi

mkdir -p "$WORKSPACE/projects"

# 3. Core Identity Links
echo "🌳 Linking Core Identity..."
ln -sf "$SECOND_BRAIN/007_SYSTEM/OpenClaw_Config/SOUL.md" "$WORKSPACE/SOUL.md"
ln -sf "$SECOND_BRAIN/007_SYSTEM/OpenClaw_Config/AGENTS.md" "$WORKSPACE/AGENTS.md"
ln -sf "$SECOND_BRAIN/007_SYSTEM/OpenClaw_Config/USER.md" "$WORKSPACE/USER.md"
ln -sf "$SECOND_BRAIN/007_SYSTEM/OpenClaw_Config/TOKEN_STRATEGY.md" "$WORKSPACE/TOKEN_STRATEGY.md"
ln -sf "$SECOND_BRAIN/007_SYSTEM/Vault Ecology Guide.md" "$WORKSPACE/VAULT_ECOLOGY.md"
ln -sf "$SECOND_BRAIN/005_JOURNAL" "$WORKSPACE/memory"

# 4. Project Links
echo "📁 Linking Active Projects..."
ln -sf "$SECOND_BRAIN/001_PROJECTS/Lumbee" "$WORKSPACE/projects/lumbee"

# 5. Script & Utility Links
echo "🛠️ Linking System Scripts..."
mkdir -p "$HOME/bin"
ln -sf "$SECOND_BRAIN/007_SYSTEM/Scripts/molt_toggle.sh" "$HOME/bin/molt_toggle.sh"

# 6. Initialization
echo "✨ System Rebuilt. Neocambrian OS is now Operational."
echo "   Workspace: $WORKSPACE"
echo "   Sovereign Source: $SECOND_BRAIN"
