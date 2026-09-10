import { visit } from 'unist-util-visit';

/**
 * remark-pdf — embed a PDF viewer from plain Markdown.
 *
 * A paragraph whose only content is a link to a `.pdf` file becomes an inline
 * viewer (the browser's native PDF renderer in an <iframe>) with a title bar
 * that carries "Open" and "Download" links:
 *
 *   [Attention Is All You Need](/papers/attention.pdf)
 *
 * The link text is the shown title; if it is empty the file name is used. An
 * optional Markdown link title sets the viewer height in pixels:
 *
 *   [My paper](/papers/paper.pdf "620")
 *
 * A PDF link that sits inside a sentence is left alone as an ordinary link, so
 * you can still write "see [the paper](/papers/paper.pdf) for details".
 *
 * No client-side JS: the output is a static <figure>/<iframe>. Styling lives in
 * src/styles/global.css (`.pdf`). Put the file in `public/` and reference it
 * with a root-absolute path (`/papers/...`) or an absolute URL.
 */

const PDF_RE = /\.pdf(?:[?#][^\s]*)?$/i;

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function toText(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  if (Array.isArray(node.children)) return node.children.map(toText).join('');
  return '';
}

// The single <link> child of a paragraph, ignoring whitespace-only text nodes.
function soleLink(paragraph) {
  const kids = paragraph.children.filter(
    (c) => !(c.type === 'text' && c.value.trim() === '')
  );
  return kids.length === 1 && kids[0].type === 'link' ? kids[0] : null;
}

function parseHeight(title) {
  const m = title && String(title).match(/(\d{2,4})/);
  if (!m) return null;
  return Math.min(2000, Math.max(160, parseInt(m[1], 10)));
}

function fileNameOf(url) {
  const path = url.split(/[?#]/)[0];
  const base = path.slice(path.lastIndexOf('/') + 1);
  try {
    return decodeURIComponent(base) || 'Document';
  } catch {
    return base || 'Document';
  }
}

function render(url, label, height) {
  const safeUrl = escapeHtml(url);
  const safeLabel = escapeHtml(label);
  // `#view=FitH` asks the native viewer to fit the page width.
  const src = `${safeUrl}${url.includes('#') ? '&' : '#'}view=FitH`;
  const style = height ? ` style="height:${height}px"` : '';
  return `<figure class="pdf" role="group" aria-label="PDF: ${safeLabel}">
  <figcaption class="pdf__bar">
    <span class="pdf__name">${safeLabel}</span>
    <span class="pdf__actions">
      <a class="pdf__act" href="${safeUrl}" target="_blank" rel="noopener noreferrer">Open&nbsp;↗</a>
      <a class="pdf__act" href="${safeUrl}" download>Download</a>
    </span>
  </figcaption>
  <iframe class="pdf__frame" src="${src}" title="${safeLabel}" loading="lazy"${style}></iframe>
</figure>`;
}

export default function remarkPdf() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index === null) return;
      const link = soleLink(node);
      if (!link || !PDF_RE.test(link.url)) return;

      const label = toText(link).trim() || fileNameOf(link.url);
      parent.children[index] = {
        type: 'html',
        value: render(link.url, label, parseHeight(link.title)),
      };
    });
  };
}
