#!/usr/bin/env bash
set -euo pipefail

# Apply branch protection to main.
# Prereqs:
#   - gh CLI authenticated with repo admin scope
#   - main pushed
#   - CI, Lighthouse workflows have run at least once so status checks are registered
#
# Usage:
#   ./scripts/setup-branch-protection.sh [owner/repo]

REPO="${1:-SethCaparelli/portfolio-app}"

echo "Configuring branch protection on $REPO:main"

gh api -X PUT "repos/$REPO/branches/main/protection" \
  --input - <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["verify", "lighthouse"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 0,
    "require_code_owner_reviews": false,
    "dismiss_stale_reviews": true
  },
  "restrictions": null,
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "block_creations": false,
  "required_conversation_resolution": true,
  "lock_branch": false,
  "allow_fork_syncing": false
}
JSON

echo "Done."
