export function parseMustache(str: string, obj: any): string {
  return str.replace(/{{\s*([\w\.]+)\s*}}/, (tag, match: string) => {
    const nodes = match.split('.');
    let current = obj;
    for (const node of nodes) {
      current = current[node];
    }
    return current;
  });
}
