/**
 * @fileoverview entry point for editor with all extension included
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */
const Editor = require('./index');

import './extensions/table/table';
import './extensions/colorSyntax';

module.exports = Editor;
