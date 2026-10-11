"use client";

import { Button } from "@fieldnote/design-system";

export function WorkspaceActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button size="lg" onClick={() => window.alert("Fieldnote workspace is ready for the next learning milestone.")}>
        Explore workspace
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => window.open("http://localhost:6006", "_blank", "noopener,noreferrer")}
      >
        Open component library
      </Button>
    </div>
  );
}
