// 📁 src/utils/logger.js
export const logTypes = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
};

export const log = (message, type = logTypes.INFO) => {
  const timestamp = new Date().toISOString();
  console.log(`[${type.toUpperCase()}] ${timestamp}: ${message}`);
};
