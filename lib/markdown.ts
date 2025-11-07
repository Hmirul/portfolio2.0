/**
 * Markdown processing utilities
 */

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function extractExcerpt(content: string, length: number = 160): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/^#+\s/gm, '')
    .replace(/\*\*|__/g, '')
    .replace(/\*|_/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/`/g, '')

  // Get first paragraph
  const firstParagraph = plainText.split('\n\n')[0]

  // Truncate to length
  if (firstParagraph.length > length) {
    return firstParagraph.substring(0, length).trim() + '...'
  }

  return firstParagraph
}

export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>')

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/_(.+?)_/g, '<em>$1</em>')

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

  // Code blocks
  html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')

  // Inline code
  html = html.replace(/`(.*?)`/g, '<code>$1</code>')

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>')
  html = '<p>' + html + '</p>'

  return html
}
