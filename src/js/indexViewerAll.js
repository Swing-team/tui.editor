/**
 * @fileoverview entry point for viewer with all extensions
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */
const EditorViewer = require('./indexViewer');

import './extensions/table/table';
import './extensions/colorSyntax';

module.exports = EditorViewer;
