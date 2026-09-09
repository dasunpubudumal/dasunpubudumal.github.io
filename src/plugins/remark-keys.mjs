import { visit } from 'unist-util-visit';

/**
 * remark-keys — a small take on pymdown-extensions' "keys" extension.
 *
 * Write a shortcut as `++Super+Space++` (or `++Super + Space++`) and it renders
 * as styled key caps:
 *
 *   <span class="keys"><kbd class="key">Super</kbd><span class="keys-sep">+</span><kbd class="key">Space</kbd></span>
 *
 * Works anywhere in Markdown body text. It does not touch inline code
 * (`` `like this` ``) or fenced code blocks.
 */

// Canonical display names for keys people spell inconsistently.
const NAMES = {
  super: 'Super',
  meta: 'Super',
  win: 'Win',
  windows: 'Win',
  cmd: 'Cmd',
  command: 'Cmd',
  ctrl: 'Ctrl',
  control: 'Ctrl',
  alt: 'Alt',
  opt: 'Opt',
  option: 'Opt',
  shift: 'Shift',
  enter: 'Enter',
  return: 'Return',
  space: 'Space',
  tab: 'Tab',
  esc: 'Esc',
  escape: 'Esc',
  del: 'Del',
  delete: 'Delete',
  backspace: 'Backspace',
  ins: 'Ins',
  home: 'Home',
  end: 'End',
  pageup: 'PgUp',
  pagedown: 'PgDn',
  caps: 'Caps',
  capslock: 'Caps Lock',
  fn: 'Fn',
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
};

function label(raw) {
  const key = raw.trim();
  const low = key.toLowerCase();
  if (NAMES[low]) return NAMES[low];
  if (/^f\d{1,2}$/i.test(key)) return key.toUpperCase();
  if (key.length === 1) return key.toUpperCase();
  return key;
}

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ++Token+Token++ , allowing optional whitespace around the internal "+".
// A token starts and ends with a char that is neither "+" nor whitespace and
// contains no "+", so `++Super++. Then ++Ctrl++` stays two separate combos and
// prose like "C++ and C++" is never matched.
const TOKEN = '[^+\\s\\n](?:[^+\\n]*[^+\\s\\n])?';
const KEYS_RE = new RegExp(
  `\\+\\+(${TOKEN}(?:\\s*\\+\\s*${TOKEN})*)\\+\\+`,
  'g'
);

function renderCombo(inner) {
  const caps = inner
    .split('+')
    .map((k) => k.trim())
    .filter(Boolean)
    .map((k) => `<kbd class="key">${escapeHtml(label(k))}</kbd>`);
  return `<span class="keys">${caps.join('<span class="keys-sep">+</span>')}</span>`;
}

export default function remarkKeys() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index === null || !node.value.includes('++')) return;

      KEYS_RE.lastIndex = 0;
      if (!KEYS_RE.test(node.value)) return;

      const value = node.value;
      const next = [];
      let cursor = 0;
      KEYS_RE.lastIndex = 0;
      let match;
      while ((match = KEYS_RE.exec(value))) {
        if (match.index > cursor) {
          next.push({ type: 'text', value: value.slice(cursor, match.index) });
        }
        next.push({ type: 'html', value: renderCombo(match[1]) });
        cursor = match.index + match[0].length;
      }
      if (cursor < value.length) {
        next.push({ type: 'text', value: value.slice(cursor) });
      }

      parent.children.splice(index, 1, ...next);
      return index + next.length;
    });
  };
}
