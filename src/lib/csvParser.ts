/**
 * Simple CSV Parser for client-side usage.
 * Handles quoted fields and commas within quotes.
 */

export function parseCSV<T>(csv: string): T[] {
    const lines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length === 0) return [];

    const headers = parseLine(lines[0]).map(h => h.trim());
    const result: T[] = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = parseLine(lines[i]);
        if (currentLine.length === headers.length) {
            const obj: any = {};
            for (let j = 0; j < headers.length; j++) {
                let value = currentLine[j].trim();
                // Remove surrounding quotes if present
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                    // Unescape double quotes
                    value = value.replace(/""/g, '"');
                }
                obj[headers[j]] = value;
            }
            result.push(obj as T);
        }
    }

    return result;
}

function parseLine(text: string): string[] {
    const result: string[] = [];
    let cur = '';
    let inQuote = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (inQuote) {
            if (char === '"') {
                // Check if next char is also quote (escaped)
                if (i + 1 < text.length && text[i + 1] === '"') {
                    cur += '"';
                    i++;
                } else {
                    inQuote = false;
                    cur += '"'; // Keep the quote to strip later or identifying valid string
                }
            } else {
                cur += char;
            }
        } else {
            if (char === '"') {
                inQuote = true;
                cur += '"';
            } else if (char === ',') {
                result.push(cur);
                cur = '';
            } else {
                cur += char;
            }
        }
    }
    result.push(cur);
    return result;
}
