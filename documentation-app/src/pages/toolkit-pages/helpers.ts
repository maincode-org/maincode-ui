export const formatObject = (params: string[], indentionLevel = 0): string => `{
  ${' '.repeat(indentionLevel * 2)}${params.reduce((a, p) => `${a},\n  ${' '.repeat(indentionLevel * 2)}${p}`)}
${' '.repeat(indentionLevel * 2)}}`;
