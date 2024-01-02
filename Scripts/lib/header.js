const default_header_size = 3;

const error_header = (dv, header) => dv.header(default_header_size, "❌ " + header);
const success_header = (dv, header) => dv.header(default_header_size, "✅ " + header);
const regular_header = (dv, header) => dv.header(default_header_size, header);

exports.error_header = error_header;
exports.success_header = success_header;
exports.regular_header = regular_header;