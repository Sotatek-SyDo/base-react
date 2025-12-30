const fs = require('fs');
const path = require('path');

// Các page key hợp lệ (PHẢI khớp registry)
const VALID_PAGE_KEYS = ['home', 'login', 'myAccount'];

// Các component key hợp lệ (PHẢI khớp ComponentRegistry)
const VALID_COMPONENT_KEYS = ['Header'];

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function validateClient(client) {
  const baseDir = path.resolve(__dirname, '..');
  const customizeDir = path.join(baseDir, 'customize', client);

  // 1) Client folder tồn tại?
  if (!fs.existsSync(customizeDir)) {
    fail(`Client "${client}" does not exist in /customize`);
  }

  const entryFile = path.join(customizeDir, 'index.ts');
  const entryFileJs = path.join(customizeDir, 'index.js');

  // 2) Có file index.ts hoặc index.js?
  if (!fs.existsSync(entryFile) && !fs.existsSync(entryFileJs)) {
    fail(`Missing index.ts or index.js in customize/${client}`);
  }

  // 3) Validate page keys (nếu có)
  // NOTE: chỉ kiểm tra static bằng regex để tránh import TS lúc build
  const content = fs.readFileSync(
    fs.existsSync(entryFile) ? entryFile : entryFileJs,
    'utf8'
  );

  const pagesMatch = content.match(/pages\s*:\s*{([^}]+)}/m);
  if (pagesMatch) {
    const keys = pagesMatch[1]
      .split(',')
      .map((k) => k.split(':')[0].trim())
      .filter(Boolean);

    for (const key of keys) {
      if (!VALID_PAGE_KEYS.includes(key)) {
        fail(
          `Invalid page key "${key}" in customize/${client}. Allowed: ${VALID_PAGE_KEYS.join(
            ', '
          )}`
        );
      }
    }
  }

  // 4) Validate component keys (nếu có)
  const componentsMatch = content.match(/components\s*:\s*{([^}]+)}/m);
  if (componentsMatch) {
    const keys = componentsMatch[1]
      .split(',')
      .map((k) => k.split(':')[0].trim())
      .filter(Boolean);

    for (const key of keys) {
      if (!VALID_COMPONENT_KEYS.includes(key)) {
        fail(
          `Invalid component key "${key}" in customize/${client}. Allowed: ${VALID_COMPONENT_KEYS.join(
            ', '
          )}`
        );
      }
    }
  }

  console.log(`✅ Client "${client}" validation passed`);
}

module.exports = { validateClient };
