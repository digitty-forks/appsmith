import type { IDEType, EditorState } from "@appsmith/entities/IDE/constants";
import { IDE_TYPE, IDEBasePaths } from "@appsmith/entities/IDE/constants";
import { matchPath } from "react-router";
import { identifyEntityFromPath } from "navigation/FocusEntity";

export function getCurrentAppState(currentUrl: string): EditorState {
  const entityInfo = identifyEntityFromPath(currentUrl);
  return entityInfo.appState;
}

export function getIDETypeByUrl(path: string): IDEType {
  for (const type in IDEBasePaths) {
    const basePaths = IDEBasePaths[type as IDEType];
    if (matchPath(path, { path: basePaths })) {
      return type as IDEType;
    }
  }
  return IDE_TYPE.None;
}

export function getBaseUrlsForIDEType(type: IDEType): string[] {
  return IDEBasePaths[type];
}
