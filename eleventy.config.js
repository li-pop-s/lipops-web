import QRCode from "qrcode";
import { DateTime } from "luxon";

/**
 * Generates a QR code for a given URL and returns an inline SVG
 * @param {string} url - The URL to encode in the QR code
 * @param {string} size - The size of the QR code in pixels (default: 100)
 * @param {string} alt - The alt text for the QR code (default: 'QR Code')
 * @param {string} className - Optional CSS class for the SVG element
 * @returns {Promise<string>} - Inline SVG with the QR code
 */
async function qrCodeShortcode(url, size = 100, alt = 'QR Code', className = '') {
  try {
    // Generate SVG string
    const qrOptions = {
      errorCorrectionLevel: 'M',
      type: 'svg',
      margin: 1,
      width: parseInt(size, 10),
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    };

    // Generate QR code as SVG string
    const svgString = await QRCode.toString(url, qrOptions);

    // Add accessibility attributes and class to the SVG
    const classAttr = className ? ` class="${className}"` : '';
    const enhancedSvg = svgString
      .replace('<svg', `<svg${classAttr} role="img" aria-label="${alt}" width="${size}" height="${size}"`)
      .replace(/^<\?xml.*\?>\n/, ''); // Remove XML declaration if present

    return enhancedSvg;
  } catch (error) {
    console.error('QR Code generation error:', error);
    return `<div class="qrcode-error">QR Code generation failed</div>`;
  }
}

export default async function (eleventyConfig) {

  eleventyConfig
    .addPassthroughCopy({
      "./public/": "/"
    })

  eleventyConfig.addWatchTarget("./styles/**/*.css");

  eleventyConfig.addShortcode("qrcode", qrCodeShortcode);


  /**
   * Format date: ISO
   * @param {Date} date
   */
  eleventyConfig.addFilter("dateIso", function (date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.toISO();
  });

  /**
   * Format date: Human readable format
   * @param {Date} date
   */
  eleventyConfig.addFilter("dateFull", function (date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.setLocale("fr").toLocaleString(DateTime.DATE_FULL);
  });

};
