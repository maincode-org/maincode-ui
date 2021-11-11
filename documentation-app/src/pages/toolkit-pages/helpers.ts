export const formatObject = (params: string[], indentionLevel = 0) => `{
    ${' '.repeat(indentionLevel * 4)}${params.reduce((a, p) => `${a},\n    ${' '.repeat(indentionLevel * 4)}${p}`)}
${' '.repeat(indentionLevel * 4)}}`;
